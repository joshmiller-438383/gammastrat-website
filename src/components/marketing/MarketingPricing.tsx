import MarketingCheckoutButton from '@/components/marketing/MarketingCheckoutButton'

interface PricingCard {
  className: string
  plan: string
  ribbon?: string
  title: string
  subtitle: string
  amount: React.ReactNode
  alt?: React.ReactNode
  yearLine?: React.ReactNode
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
    plan: 'basic',
    title: 'ALPHA',
    subtitle: 'THE BASE DESK',
    amount: <>$90<span> / MONTH</span></>,
    yearLine: <>or <b>$1,000 / year</b> · <span className="sv">save $80</span></>,
    vals: ['7 REPORTS · ALPHA TERMINAL INCLUDED'],
    features: [
      { text: 'Strategy Consensus' },
      { text: 'Sentiment Gauge' },
      { text: 'Daily Options Activity' },
      { text: 'Alpha Summary' },
      { text: 'Daily Comprehensive Summary' },
      { text: 'Options Probability Dashboard' },
      { text: <><b>Alpha Terminal</b> (interactive desk view)</> },
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
    plan: 'basic',
    title: 'DELTA',
    subtitle: 'THE VOLATILITY DESK',
    amount: <>$135<span> / MONTH</span></>,
    yearLine: <>or <b>$1,500 / year</b> · <span className="sv">save $120</span></>,
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
    amount: <>$180<span> / MONTH</span></>,
    yearLine: <>or <b>$2,000 / year</b> · <span className="sv">save $160</span></>,
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

interface MarketingPricingProps {
  /** @deprecated Checkout uses members Stripe API; kept for call-site compat */
  ctaUrl?: string
}

export default function MarketingPricing(_props: MarketingPricingProps = {}) {
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

          <div className="pgrid">
            {CARDS.map((card) => (
              <div className={`pcard ${card.className} rise`} key={card.title}>
                {card.ribbon && <div className="ribbon">{card.ribbon}</div>}
                <div className="pt">{card.title}</div>
                <div className="ps">{card.subtitle}</div>
                <div className="amt">{card.amount}</div>
                {card.alt && <div className="alt">{card.alt}</div>}
                {card.yearLine && <div className="yrline">{card.yearLine}</div>}
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
                  <MarketingCheckoutButton plan={card.plan} className={card.ctaClass}>
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
                        <MarketingCheckoutButton
                          plan={card.addon.plan || 'gamma'}
                          className="addon-box"
                          ariaLabel={card.addon.ariaLabel}
                        >
                          <span className="abk">
                            <span className="abtag">{card.addon.tag}</span>
                            DEALER POSITIONING DAILY
                          </span>
                          <div className="abt">{card.addon.title}</div>
                          <div className="abs">{card.addon.sub}</div>
                        </MarketingCheckoutButton>
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
