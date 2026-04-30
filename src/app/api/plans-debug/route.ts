import { NextResponse } from 'next/server'
import { client, queries } from '../../../../sanity/client'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    // Run exact same fetch as plans page
    const pp = await client.fetch(queries.plansPage, {}, { cache: 'no-store' }).catch((e: Error) => {
      return { _fetchError: e.message }
    })

    return NextResponse.json({
      pp_is_null: pp === null,
      pp_type: typeof pp,
      pp_has_pricing_cards: !!(pp as { pricingCards?: unknown[] })?.pricingCards,
      pp_pricing_cards_length: (pp as { pricingCards?: unknown[] })?.pricingCards?.length ?? 'N/A',
      pp_first_card: (pp as { pricingCards?: Array<{ planId?: string; ctaText?: string }> })?.pricingCards?.[0] ?? null,
      pp_fetch_error: (pp as { _fetchError?: string })?._fetchError ?? null,
      token_set: !!process.env.SANITY_API_TOKEN,
      token_length: process.env.SANITY_API_TOKEN?.length ?? 0,
    }, {
      headers: { 'Cache-Control': 'no-store' }
    })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
