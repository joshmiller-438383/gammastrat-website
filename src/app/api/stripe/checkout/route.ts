import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

// Price IDs (test mode — swap for live IDs when going live)
const STRIPE_PRICES: Record<string, string> = {
  free_trial: 'price_1TSIjNR6Ac0MCpIq3uAexnH7',
  basic:      'price_1TSIjIR6Ac0MCpIqp5hG6lwF',
  gamma:      'price_1TSIjLR6Ac0MCpIqHPVaOCbC',
}

export async function POST(req: NextRequest) {
  // Initialize Stripe lazily inside the handler so build-time env check is skipped
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2025-04-30.basil' as any,
  })

  try {
    const { planId } = await req.json()
    const priceId = STRIPE_PRICES[planId]

    if (!priceId) {
      return NextResponse.json({ error: 'Invalid plan' }, { status: 400 })
    }

    const origin = req.headers.get('origin') || 'https://www.gammastrat.com'

    const sessionParams: Stripe.Checkout.SessionCreateParams = {
      mode: 'subscription',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${origin}/plans?checkout=success`,
      cancel_url:  `${origin}/plans`,
      allow_promotion_codes: true,
      billing_address_collection: 'auto',
      metadata: { planId },
    }

    if (planId === 'free_trial') {
      sessionParams.subscription_data = {
        trial_period_days: 7,
        metadata: { planId },
      }
    } else {
      sessionParams.subscription_data = { metadata: { planId } }
    }

    const session = await stripe.checkout.sessions.create(sessionParams)
    return NextResponse.json({ checkoutUrl: session.url })
  } catch (err: any) {
    console.error('Stripe checkout error:', err)
    return NextResponse.json({ error: err.message || 'Failed to create checkout' }, { status: 500 })
  }
}
