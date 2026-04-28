import { NextRequest, NextResponse } from 'next/server'

const SHOPIFY_DOMAIN = 'gammastrat.myshopify.com'

// Variant IDs mapped to plan names
const PLAN_VARIANTS: Record<string, string> = {
  gamma: '48103900610801',
  basic: '48103900446961',
  'free-trial': '48103900414193',
  free: '48103900414193',
}

export async function POST(req: NextRequest) {
  try {
    const { planId, variantId: directVariantId } = await req.json()

    const variantId = directVariantId || PLAN_VARIANTS[planId?.toLowerCase()]

    if (!variantId) {
      return NextResponse.json({ error: 'Invalid plan' }, { status: 400 })
    }

    // Use Shopify cart permalink — generates a real checkout session
    const checkoutUrl = `https://${SHOPIFY_DOMAIN}/cart/${variantId}:1?channel=buy_button`

    return NextResponse.json({ checkoutUrl })
  } catch (err) {
    console.error('Shopify checkout error:', err)
    return NextResponse.json({ error: 'Failed to create checkout' }, { status: 500 })
  }
}
