import { NextRequest, NextResponse } from 'next/server'
import { getMembersCheckoutApiUrl, getMembersUrl, getSiteUrl } from '../../../../lib/site'

function sameOrigin(a: string, b: string): boolean {
  try {
    return new URL(a).origin === new URL(b).origin
  } catch {
    return false
  }
}

/**
 * Same-origin checkout proxy.
 * Browser → POST /api/checkout/public → members /api/checkout/public → Stripe URL.
 */
export async function POST(req: NextRequest) {
  let target: string
  try {
    target = getMembersCheckoutApiUrl()
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Members URL not configured'
    return NextResponse.json({ error: message }, { status: 500 })
  }

  if (sameOrigin(target, getSiteUrl())) {
    return NextResponse.json(
      {
        error:
          'NEXT_PUBLIC_MEMBERS_URL must point to the members portal, not this marketing site. ' +
          `Both are set to ${getMembersUrl()}. Use a different port for each app in .env.local.`,
      },
      { status: 500 },
    )
  }

  try {
    const body = await req.json()
    const res = await fetch(target, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(req.headers.get('origin')
          ? { Origin: req.headers.get('origin')! }
          : {}),
      },
      body: JSON.stringify({
        ...body,
        siteUrl: getSiteUrl(),
      }),
      cache: 'no-store',
    })

    const raw = await res.text()
    let data: {
      error?: string
      url?: string
      checkoutUrl?: string
      type?: string
      message?: string
    } = {}
    try {
      data = raw ? JSON.parse(raw) : {}
    } catch {
      data = { error: raw || `Members checkout failed (${res.status})` }
    }

    if (!res.ok) {
      return NextResponse.json(
        {
          error: data.error,
          type: data.type,
          message: data.message,
        },
        { status: res.status },
      )
    }

    const url = data.url || data.checkoutUrl
    if (!url && data.type !== 'same_plan') {
      return NextResponse.json(
        { error: data.error || 'No checkout URL returned from members.' },
        { status: 502 },
      )
    }

    return NextResponse.json({
      type: data.type ?? (url ? 'checkout' : undefined),
      message: data.message,
      url,
    })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Checkout proxy failed'
    console.error('[checkout/public proxy]', target, message)
    return NextResponse.json(
      {
        error:
          process.env.NODE_ENV === 'development'
            ? `Cannot reach members checkout at ${target}. Is the members app running? (${message})`
            : 'Checkout is temporarily unavailable. Please try again.',
      },
      { status: 502 },
    )
  }
}
