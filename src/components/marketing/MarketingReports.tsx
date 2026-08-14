interface ReportTier {
  groupClass: string
  headClass?: string
  name: string
  plan: string
  nameStyle?: React.CSSProperties
  sub: string
  cta: string
  ctaStyle?: React.CSSProperties
  reports: { label: string; terminal?: boolean; style?: React.CSSProperties }[]
}

const TIERS: ReportTier[] = [
  {
    groupClass: 'trial',
    headClass: 'trial',
    name: 'FREE TRIAL',
    plan: 'free_trial',
    sub: '5 REPORTS · 2-WEEK EXPIRY · A DELIBERATE TASTE OF PAID CONTENT',
    cta: 'START FREE →',
    reports: [
      { label: 'Strategy Consensus' },
      { label: 'Sentiment Gauge' },
      { label: 'Daily Options Activity' },
      { label: 'Alpha Terminal', terminal: true },
      { label: 'Alpha Summary' },
    ],
  },
  {
    groupClass: 'alpha',
    headClass: 'alpha',
    name: 'ALPHA',
    plan: 'basic',
    sub: 'ADDS 2 — 7 REPORTS TOTAL',
    cta: 'GO ALPHA →',
    reports: [
      { label: 'Daily Comprehensive Summary' },
      { label: 'Options Probability Dashboard' },
    ],
  },
  {
    groupClass: 'delta',
    headClass: 'delta',
    name: 'DELTA',
    plan: 'basic',
    sub: 'ADDS 6 — 13 REPORTS TOTAL',
    cta: 'GO DELTA →',
    ctaStyle: { color: 'var(--delta)' },
    reports: [
      { label: 'Market Risk Reward Analysis' },
      { label: 'Volatility Curve' },
      { label: 'Daily Volatility State' },
      { label: 'Strategy Scoreboard' },
      { label: 'Delta Summary' },
      { label: 'Delta Terminal', terminal: true },
    ],
  },
  {
    groupClass: 'gamma',
    headClass: 'gamma',
    name: 'GAMMA',
    plan: 'gamma',
    sub: 'ADDS 11 — 24 REPORTS TOTAL + ALL FUTURE REPORTS',
    cta: 'GO GAMMA →',
    ctaStyle: { color: 'var(--gold)' },
    reports: [
      { label: 'Volatility Risk Premium' },
      { label: 'Signal Confidence' },
      { label: 'Ticker Watchlist' },
      { label: 'Bullish Bearish Momentum' },
      { label: 'Calls Vs Puts Index' },
      { label: 'Ticker Sentiment' },
      { label: 'Directional Conviction' },
      { label: 'Strategy Ticker Combo' },
      { label: 'Demand Heatmap' },
      { label: 'Gamma Summary' },
      { label: 'Gamma Terminal', terminal: true },
    ],
  },
  {
    groupClass: 'dpt',
    name: 'DEALER MAP',
    plan: 'gamma',
    nameStyle: { color: 'var(--dptl)' },
    sub: 'DEALER POSITIONING DAILY · ~80 TICKERS · ALPHA +$300/YR · DELTA +$200/YR · INCLUDED WITH GAMMA',
    cta: 'ADD IT →',
    ctaStyle: { color: 'var(--dptl)' },
    reports: [
      {
        label: 'Dealer Positioning Daily',
        terminal: true,
        style: { borderLeftColor: 'var(--dpt)' },
      },
    ],
  },
]

import MarketingCheckoutButton from '@/components/marketing/MarketingCheckoutButton'

interface MarketingReportsProps {
  ctaUrl?: string
  samplesUrl?: string
}

export default function MarketingReports({
  samplesUrl = '#terminals',
}: MarketingReportsProps) {
  return (
    <section id="reports">
      <div className="wrap">
        <div className="slabel rise">
          <span className="n">04</span>THE REPORT SUITE
        </div>
        <h2 className="rise">Published Every Trading Day, Before the Open.</h2>
        <p className="lede rise">
          Every tier is cumulative — each includes everything below it. The board reads the way the
          product ladder does: start free, climb to the full desk.
        </p>

        <div className="board rise">
          <div className="bh">
            <span className="t">GAMMASTRAT DAILY REPORT SUITE</span>
            <span className="s">GROUPED BY TIER · CUMULATIVE</span>
          </div>

          {TIERS.map((tier) => (
            <div className={`tiergroup ${tier.groupClass}`} key={tier.name}>
              <div className={`tg-head${tier.headClass ? ` ${tier.headClass}` : ''}`}>
                <span className="tn" style={tier.nameStyle}>
                  {tier.name}
                </span>
                <span className="tsub">{tier.sub}</span>
                <MarketingCheckoutButton
                  plan={tier.plan}
                  className="cta mono"
                  style={{
                    ...tier.ctaStyle,
                    background: 'transparent',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                  }}
                >
                  {tier.cta}
                </MarketingCheckoutButton>
              </div>
              <div className="rgrid">
                {tier.reports.map((report) => (
                  <div
                    className={`rname${report.terminal ? ' term' : ''}`}
                    key={report.label}
                    style={report.style}
                  >
                    {report.label}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="samplebar rise">
          <p>
            <b>Judge the research before you subscribe.</b> Recent sample reports are open to read —
            see exactly what lands on the desk each morning.
          </p>
          <a className="btn ghost" href={samplesUrl}>
            VIEW SAMPLE REPORTS<span className="ar">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
