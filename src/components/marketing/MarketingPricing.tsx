'use client'

import { useEffect, useState } from 'react'
import MarketingCheckoutButton from '@/components/marketing/MarketingCheckoutButton'
import { type BillingInterval, formatUsd } from '@/lib/marketingBilling'

interface PaidPricing {
  monthly: number
  yearly: number
  yearlySave: number
}

interface PricingCard {
  className: string
  plan: string
  ribbon?: string
  title: string
  subtitle: string
  paid?: PaidPricing
  amount?: React.ReactNode
  alt?: React.ReactNode
  vals: React.ReactNode[]
  features: { text: React.ReactNode; plus?: boolean }[]
  ctaLabel: string
  ctaClass: string
  addon?: {
    included?: boolean
    plan?: string
    ariaLabel: string
    tag: string
    title: React.ReactNode
    sub: string
  }
}

const STEPS = [
  {
    n: 'STEP 01',
    title: 'Start Your Trial',
    body: "Create your account and today's five trial reports — including the Alpha Terminal — are on your screen immediately.",
  },
  {
    n: 'STEP 02',
    title: 'Read the Desk',
    body: 'Fourteen days of the real daily product, every trading day before the open. Judge the research on its substance.',
  },
  {
    n: 'STEP 03',
    title: 'Choose Your Tier',
    body: 'Stay on Alpha, or step up to Delta or Gamma. Tiers are cumulative — the desk grows, nothing resets.',
  },
] as const

const CARDS: PricingCard[] = [
  {
    className: 'trial',
    plan: 'free_trial',
    title: 'FREE TRIAL',
    subtitle: 'A DELIBERATE TASTE OF PAID CONTENT',
    amount: 'FREE',
    alt: 'Two weeks. Full daily cadence.',
    vals: ['\u00a0'],
    features: [
      { text: 'Strategy Consensus' },
      { text: 'Sentiment Gauge' },
      { text: 'Daily Options Activity' },
      { text: <><b>Alpha Terminal</b> — the real product, not a demo</> },
      { text: 'Alpha Summary' },
    ],
    ctaLabel: 'Start Free Trial',
    ctaClass: 'btn',
  },
  {
    className: 'alpha',
    plan: 'alpha',
    title: 'ALPHA',
    subtitle: 'THE BASE DESK',
    paid: { monthly: 79, yearly: 900, yearlySave: 48 },
    vals: ['7 REPORTS · ALPHA TERMINAL INCLUDED'],
    features: [
      { text: 'Strategy Consensus' },
      { text: 'Sentiment Gauge' },
      { text: 'Daily Options Activity' },
      { text: 'Alpha Summary' },
      { text: 'Daily Comprehensive Summary' },
      { text: 'Options Probability Dashboard' },
      { text: <><b>Alpha Terminal</b> (interactive desk view)</> },
      { text: <>Daily &ldquo;State of the Markets&rdquo; Newsletter (delivered via email)</> },
    ],
    ctaLabel: 'Go Alpha',
    ctaClass: 'btn ghost',
    addon: {
      plan: 'gamma',
      ariaLabel: 'Add Dealer Positioning Daily to Alpha for 300 dollars a year',
      tag: 'DEALER MAP',
      title: <>Add it for <b>$300<span style={{ fontFamily: 'var(--mono)', fontSize: 11, fontWeight: 400 }}> / year</span></b></>,
      sub: '~80 TICKERS · GEX-BY-STRIKE · DAILY',
    },
  },
  {
    className: 'delta',
    plan: 'delta',
    title: 'DELTA',
    subtitle: 'THE VOLATILITY DESK',
    paid: { monthly: 135, yearly: 1500, yearlySave: 120 },
    vals: [
      '13 REPORTS · DELTA TERMINAL INCLUDED',
      <span key="td" style={{ color: 'var(--purple)' }}>★ INCLUDES TRADEABLE DISLOCATION SIGNALS</span>,
    ],
    features: [
      { text: 'Everything in Alpha' },
      { text: 'Market Risk Reward Analysis', plus: true },
      { text: 'Volatility Curve', plus: true },
      { text: 'Daily Volatility State', plus: true },
      { text: 'Strategy Scoreboard with ★ TD Signals', plus: true },
      { text: 'Delta Summary', plus: true },
      { text: <b>Delta Terminal</b>, plus: true },
      { text: <>Daily &ldquo;State of the Markets&rdquo; Newsletter (delivered via email)</> },
    ],
    ctaLabel: 'Go Delta',
    ctaClass: 'btn ghost',
    addon: {
      plan: 'gamma',
      ariaLabel: 'Add Dealer Positioning Daily to Delta for 200 dollars a year',
      tag: 'DEALER MAP',
      title: <>Add it for <b>$200<span style={{ fontFamily: 'var(--mono)', fontSize: 11, fontWeight: 400 }}> / year</span></b></>,
      sub: '~80 TICKERS · GEX-BY-STRIKE · DAILY',
    },
  },
  {
    className: 'gamma',
    plan: 'gamma',
    ribbon: '★ FULL ACCESS',
    title: 'GAMMA',
    subtitle: 'THE FULL DESK',
    paid: { monthly: 170, yearly: 1900, yearlySave: 140 },
    vals: ['24 REPORTS + ALL FUTURE · GAMMA TERMINAL INCLUDED'],
    features: [
      { text: 'Everything in Alpha and Delta' },
      { text: <>Volatility Risk Premium &amp; Signal Confidence</>, plus: true },
      { text: 'Ticker Watchlist, Sentiment, Momentum', plus: true },
      { text: <>Demand Heatmap &amp; Probability Surface</>, plus: true },
      { text: <>Sector Wall &amp; Directional Conviction</>, plus: true },
      { text: <><b>Gamma Terminal</b> (full 80-ticker desk)</>, plus: true },
      { text: <><b>Dealer Positioning Daily</b> — included free</>, plus: true },
      { text: 'Every future report, at no added cost', plus: true },
      { text: <>Daily &ldquo;State of the Markets&rdquo; Newsletter (delivered via email)</> },
    ],
    ctaLabel: 'Go Gamma',
    ctaClass: 'btn gold',
    addon: {
      included: true,
      ariaLabel: 'Dealer Positioning Daily is included with Gamma',
      tag: 'INCLUDED',
      title: <><b>Included free</b> — no extra cost</>,
      sub: '~80 TICKERS · GEX-BY-STRIKE · DAILY',
    },
  },
]

function cardAmount(card: PricingCard, billing: BillingInterval): React.ReactNode {
  if (!card.paid) return card.amount
  if (billing === 'year') {
    return (
      <>
        ${formatUsd(card.paid.yearly)}
        <span> / YEAR</span>
      </>
    )
  }
  return (
    <>
      ${card.paid.monthly}
      <span> / MONTH</span>
    </>
  )
}

function cardSaveLine(card: PricingCard, billing: BillingInterval): React.ReactNode | null {
  if (!card.paid || billing !== 'year') return null
  return (
    <>
      Billed annually · <span className="sv">save ${card.paid.yearlySave}</span>
    </>
  )
}

interface MarketingPricingProps {
  /** @deprecated Checkout uses members Stripe API; kept for call-site compat */
  ctaUrl?: string
}

export default function MarketingPricing(_props: MarketingPricingProps = {}) {
  const [billing, setBilling] = useState<BillingInterval>('month')
  const visibleCards = billing === 'year' ? CARDS.filter((card) => card.paid) : CARDS

  // Pricing cards mount/toggle after scroll animations init — ensure they stay visible.
  useEffect(() => {
    document.querySelectorAll('#pricing .pcard.rise').forEach((el) => el.classList.add('in'))
  }, [billing, visibleCards.length])

  return (
    <>
      <section id="pricing" className="pricing">
        <div className="wrap">
          <div className="slabel rise">
            <span className="n">06</span>PRICING
          </div>
          <h2 className="rise">Start Free. Scale When You&apos;re Ready.</h2>
          <p className="lede rise">
            Every tier is cumulative and includes its terminal. Gamma holds everything — all reports,
            all tickers, and every report we publish in the future, at no added cost.
          </p>

          <div className="steps">
            {STEPS.map((step) => (
              <div className="stepc rise" key={step.n}>
                <div className="sno">{step.n}</div>
                <h4>{step.title}</h4>
                <p>{step.body}</p>
              </div>
            ))}
          </div>

          <div className="billing-toggle-wrap rise in">
            <div className="billing-toggle" role="group" aria-label="Billing interval">
              <button
                type="button"
                className={`billing-toggle__btn${billing === 'month' ? ' is-active' : ''}`}
                aria-pressed={billing === 'month'}
                onClick={() => setBilling('month')}
              >
                Monthly
              </button>
              <button
                type="button"
                className={`billing-toggle__btn${billing === 'year' ? ' is-active' : ''}`}
                aria-pressed={billing === 'year'}
                onClick={() => setBilling('year')}
              >
                Yearly
              </button>
            </div>
            {billing === 'year' && (
              <p className="billing-note">
                Free trial is available on monthly billing — switch to Monthly to start a trial.
              </p>
            )}
          </div>

          <div className={`pgrid${billing === 'year' ? ' pgrid--three' : ''}`}>
            {visibleCards.map((card) => (
              <div className={`pcard ${card.className} rise in`} key={card.title}>
                {card.ribbon && <div className="ribbon">{card.ribbon}</div>}
                <div className="pt">{card.title}</div>
                <div className="ps">{card.subtitle}</div>
                <div className="amt">{cardAmount(card, billing)}</div>
                {card.alt && <div className="alt">{card.alt}</div>}
                {cardSaveLine(card, billing) && (
                  <div className="yrline">{cardSaveLine(card, billing)}</div>
                )}
                {card.vals.map((val, i) => (
                  <div className="val" key={i}>
                    {val}
                  </div>
                ))}
                <hr />
                <ul>
                  {card.features.map((f, i) => (
                    <li className={f.plus ? 'plus' : undefined} key={i}>
                      {f.text}
                    </li>
                  ))}
                </ul>
                <div className="pcard-cta">
                  <MarketingCheckoutButton
                    plan={card.plan}
                    billing={card.paid ? billing : 'month'}
                    className={card.ctaClass}
                  >
                    {card.ctaLabel}
                    {card.ctaClass === 'btn' && <span className="ar">→</span>}
                  </MarketingCheckoutButton>
                  <div className="pcard-cta__slot">
                    {card.addon &&
                      (card.addon.included ? (
                        <div className="addon-box inc" aria-label={card.addon.ariaLabel}>
                          <span className="abk">
                            <span className="abtag">{card.addon.tag}</span>
                            DEALER POSITIONING DAILY
                          </span>
                          <div className="abt">{card.addon.title}</div>
                          <div className="abs">{card.addon.sub}</div>
                        </div>
                      ) : (
                        <div className="addon-box" aria-label={card.addon.ariaLabel}>
                          <span className="abk">
                            <span className="abtag">{card.addon.tag}</span>
                            DEALER POSITIONING DAILY
                          </span>
                          <div className="abt">{card.addon.title}</div>
                          <div className="abs">{card.addon.sub}</div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pnote rise">
            ALPHA: 3-MONTH MINIMUM ON MONTHLY BILLING · ALL ANNUAL PLANS BILLED UPFRONT · CANCEL
            ANYTIME
          </div>
          <div className="pnote-legal rise">
            SUBSCRIPTIONS BUY RESEARCH, NOT INVESTMENT ADVICE — FULL DISCLOSURE IN THE FOOTER
          </div>
        </div>
      </section>
      <div className="glowline" aria-hidden="true" />
    </>
  )
}
