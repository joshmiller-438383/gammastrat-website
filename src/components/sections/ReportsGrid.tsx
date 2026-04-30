interface ReportItem {
  _key?: string
  title: string
  description?: string
  icon?: string
}

interface ReportsGridProps {
  headline?: string
  subheadline?: string
  items?: ReportItem[]
  imageUrl?: string
}

const DEFAULT_ITEMS: ReportItem[] = [
  { title: 'DOPR Spreads Analysis', description: 'Highest probability options spreads ranked by market expectations.' },
  { title: 'Volatility Risk Premium & Squeeze', description: 'Identify volatility mispricings and premium opportunities.' },
  { title: 'Relative Value & Positioning', description: 'Spot rare dislocations in how the market is pricing probability.' },
  { title: 'Signal Strength Rankings', description: 'Rank the best directional and market-neutral opportunities.' },
  { title: 'Filtered Tickers', description: 'Find tickers with aligned signals across multiple frameworks.' },
  { title: 'Market Mood Gauge', description: 'Instant read on the current gamma and volatility regime.' },
  { title: 'VIX & VVIX Term Structure', description: 'See forward volatility expectations across maturities.' },
  { title: 'Volatility Regime Report', description: 'Understand the current market environment and what it means for your trades.' },
  { title: 'Options Market Insights', description: 'Daily analysis of SPX, QQQ, and GLD with skew, pin risk, and positioning.' },
]

const REPORTS_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663412681205/kxdTaP7F9zvuZsQRYFvgTd/gs-reports-visual-b2qGMjd34hNXD49gnnqLLs.png'

export default function ReportsGrid({
  headline = 'Every Report You Need to Trade With Edge',
  subheadline = 'Institutional-grade options intelligence, delivered daily before market open.',
  items = DEFAULT_ITEMS,
  imageUrl,
}: ReportsGridProps) {
  const img = imageUrl || REPORTS_IMG
  return (
    <section className="gs-panel overflow-hidden">
      {/*
        Desktop: image 28% left | cards 72% right
        Mobile: cards on top, image below
        We use flex so we can use order to swap on mobile without CSS grid order issues
      */}
      <div className="flex flex-col lg:flex-row" style={{ minHeight: '420px' }}>

        {/* CARDS — first in DOM so they show on top on mobile */}
        <div className="flex flex-col justify-center p-8 lg:p-10 lg:order-2" style={{ flex: '1 1 72%' }}>
          <p className="section-label mb-3">Daily Intelligence</p>
          <h2 style={{ fontSize: 'clamp(1.5rem,2.2vw,2rem)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em', color: '#fff', marginBottom: '0.5rem' }}>
            {headline}
          </h2>
          {subheadline && (
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {subheadline}
            </p>
          )}
          {/* 4-column card grid matching blueprint */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(148px, 1fr))', gap: '0.625rem' }}>
            {items?.map((item, i) => (
              <div
                key={item._key ?? i}
                style={{
                  padding: '0.75rem 0.875rem',
                  borderRadius: '0.375rem',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(201,162,74,0.15)',
                }}
              >
                <p style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#fff', lineHeight: 1.3, marginBottom: '0.25rem' }}>
                  {item.title}
                </p>
                {item.description && (
                  <p style={{ fontSize: '0.6875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* IMAGE — second in DOM, shown below cards on mobile, left on desktop */}
        <div
          className="relative overflow-hidden lg:order-1"
          style={{ flex: '0 0 28%', minHeight: '220px' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img}
            alt=""
            aria-hidden="true"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
          />
          <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '4rem', background: 'linear-gradient(to left, #090B12, transparent)', pointerEvents: 'none' }} />
        </div>

      </div>
    </section>
  )
}
