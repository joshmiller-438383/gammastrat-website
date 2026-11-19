import MarketingCheckoutButton from '@/components/marketing/MarketingCheckoutButton'
import {
  DELTA_TIER_REPORTS,
  GAMMA_TIER_REPORTS,
  REPORT_COUNTS,
  TRIAL_AND_ALPHA_REPORTS,
} from '@/lib/marketingReportCatalog'
import { MARKETING_ROUTES } from '@/lib/marketingRoutes'

interface ReportTier {
  groupClass: string
  headClass?: string
  name: string
  plan: string
  nameStyle?: React.CSSProperties
  sub: string
  tierNote?: string
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
    sub: `${REPORT_COUNTS.trialAndAlpha} REPORTS · 2-WEEK EXPIRY · A DELIBERATE TASTE OF PAID CONTENT`,
    cta: 'START FREE →',
    reports: [...TRIAL_AND_ALPHA_REPORTS],
  },
  {
    groupClass: 'alpha',
    headClass: 'alpha',
    name: 'ALPHA',
    plan: 'alpha',
    sub: `${REPORT_COUNTS.trialAndAlpha} REPORTS TOTAL`,
    cta: 'GO ALPHA →',
    reports: [...TRIAL_AND_ALPHA_REPORTS],
  },
  {
    groupClass: 'delta',
    headClass: 'delta',
    name: 'DELTA',
    plan: 'delta',
    sub: `ADDS ${DELTA_TIER_REPORTS.length} · ${REPORT_COUNTS.deltaTotal} REPORTS TOTAL`,
    tierNote: 'ALL ALPHA MATERIALS ARE INCLUDED IN THE DELTA SUBSCRIPTION TIER',
    cta: 'GO DELTA →',
    ctaStyle: { color: 'var(--delta)' },
    reports: [...DELTA_TIER_REPORTS],
  },
  {
    groupClass: 'gamma',
    headClass: 'gamma',
    name: 'GAMMA',
    plan: 'gamma',
    sub: `ADDS ${GAMMA_TIER_REPORTS.length} · ${REPORT_COUNTS.gammaTotal} REPORTS TOTAL + ALL FUTURE REPORTS`,
    tierNote: 'ALL ALPHA MATERIALS ARE INCLUDED IN THE GAMMA SUBSCRIPTION TIER',
    cta: 'GO GAMMA →',
    ctaStyle: { color: 'var(--gold)' },
    reports: [...GAMMA_TIER_REPORTS],
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

interface MarketingReportsProps {
  ctaUrl?: string
}

export default function MarketingReports(_props: MarketingReportsProps = {}) {
  return (
    <section id="reports">
      <div className="wrap">
        <div className="slabel rise">
          <span className="n">03</span>THE REPORT SUITE
        </div>
        <h1 className="rise">
          Published every trading day, <em>before the open.</em>
        </h1>
        <p className="lede rise">
          Alpha is the basic GammaStrat subscription tier and is designed to get you trading immediately. Delta
          takes your trading knowledge to the next level, adding detailed volatility analytics to the Alpha
          reporting suite. Gamma is the all-inclusive, comprehensive trading suite. It includes everything in
          Alpha and Delta, plus next level analytics, ticker classifications and trading signals. Learn to trade
          the markets the way we trade them.
        </p>
        <p className="lede rise" style={{ marginTop: 14 }}>
          Each subscription tier provides you with institutional quality research reports, convenient reporting
          summaries, and a sophisticated, easy-to-interpret dashboard terminal. The reports and dashboard terminal
          suites are designed so that busy people can develop an informed trading view in just a few minutes each
          morning.
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
              {tier.tierNote ? <p className="tier-note">{tier.tierNote}</p> : null}
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
      </div>
    </section>
  )
}
