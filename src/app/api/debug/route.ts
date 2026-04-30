import { NextResponse } from 'next/server'
import { client, queries } from '../../../../sanity/client'

export async function GET() {
  try {
    const [hp, pp] = await Promise.all([
      client.fetch(queries.homepage).catch((e: Error) => ({ _error: e.message })),
      client.fetch(queries.plansPage).catch((e: Error) => ({ _error: e.message })),
    ])

    return NextResponse.json({
      hasHomepage: !!hp && !('_error' in (hp as object)),
      hasPlansPage: !!pp && !('_error' in (pp as object)),
      plansPageError: pp && '_error' in (pp as object) ? (pp as { _error: string })._error : null,
      plansPageData: pp && !('_error' in (pp as object)) ? {
        heroBadge: (pp as { heroBadge?: string })?.heroBadge,
        heroCtaText: (pp as { heroCtaText?: string })?.heroCtaText,
        pricingCardsCount: (pp as { pricingCards?: unknown[] })?.pricingCards?.length ?? 0,
        firstCardCtaText: (pp as { pricingCards?: Array<{ ctaText?: string }> })?.pricingCards?.[0]?.ctaText,
      } : null,
      token: process.env.SANITY_API_TOKEN ? 'SET' : 'NOT SET',
    })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
