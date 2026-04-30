'use client'
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
  { title: 'Options Market Insights', description: 'Daily analysis of SPX, QQQ, and GLO with skew, pin risk, and positioning.' },
]

export default function ReportsGrid({
  headline = 'Every Report You Need to Trade With Edge',
  subheadline = 'Institutional-grade options intelligence, delivered daily before market open.',
  items = DEFAULT_ITEMS,
  imageUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663412681205/kxdTaP7F9zvuZsQRYFvgTd/gs-reports-visual-b2qGMjd34hNXD49gnnqLLs.png',
}: ReportsGridProps) {
  return (
    <section className="gs-panel overflow-hidden">
      <div className="flex flex-col lg:flex-row" style={{ minHeight: '420px' }}>

        {/* LEFT: Section image — shows below content on mobile */}
        <div
          className="order-2 lg:order-1"
          style={{ position: 'relative', width: '100%', minHeight: '220px', flexShrink: 0 }}
        >
          {/* On lg screens, fix width to ~28% */}
          <style>{`@media (min-width: 1024px) { .reports-img-col { width: 28% !important; min-height: unset !important; } }`}</style>
          <div className="reports-img-col" style={{ position: 'relative', width: '100%', height: '100%', minHeight: '220px' }}>
            {imageUrl ? (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={imageUrl} alt="" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '4rem', background: 'linear-gradient(to left, #090B12, transparent)', pointerEvents: 'none' }} />
              </>
            ) : (
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(201,162,74,0.06) 0%, rgba(201,162,74,0.02) 100%)' }} />
            )}
          </div>
        </div>

        {/* RIGHT: Header + grid — always first on mobile */}
        <div className="order-1 lg:order-2 flex flex-col justify-center p-8 lg:p-10 flex-1">
          <p className="section-label mb-3">Daily Intelligence</p>
          <h2 style={{ fontSize: 'clamp(1.5rem,2.2vw,2rem)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em', color: '#fff', marginBottom: '0.5rem' }}>
            {headline}
          </h2>
          {subheadline && (
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {subheadline}
            </p>
          )}
          {/* 4-column grid matching blueprint */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '0.75rem' }}>
            {items?.map((item, i) => (
              <div
                key={item._key ?? i}
                style={{
                  padding: '0.875rem 1rem',
                  borderRadius: '0.375rem',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(201,162,74,0.15)',
                }}
              >
                <p style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#fff', lineHeight: 1.3, marginBottom: '0.375rem' }}>
                  {item.title}
                </p>
                {item.description && (
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
