import Image from 'next/image'

interface ReportItem {
  _key?: string
  title: string
  description?: string
  icon?: string
  image?: { asset?: { url?: string } }
}

interface ReportsGridProps {
  headline?: string
  subheadline?: string
  items?: ReportItem[]
  imageUrl?: string
}

const ICON_MAP: Record<string, string> = {
  dopr: '📊',
  volatility: '📈',
  relative: '⚖️',
  signal: '📡',
  filtered: '🔍',
  mood: '🎯',
  vix: '📉',
  regime: '🌐',
  insights: '💡',
}

function getIcon(title: string, icon?: string): string {
  if (icon) return icon
  const lower = title.toLowerCase()
  for (const [key, emoji] of Object.entries(ICON_MAP)) {
    if (lower.includes(key)) return emoji
  }
  return '📋'
}

export default function ReportsGrid({
  headline = 'Every Report You Need to Trade With Edge',
  subheadline = 'Institutional-grade options intelligence, delivered daily.',
  items,
  imageUrl,
}: ReportsGridProps) {
  const defaultItems: ReportItem[] = [
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

  const reportItems = (items && items.length > 0) ? items : defaultItems

  return (
    <section className="py-4">
      {/* Section header */}
      <div className="gs-panel p-8 lg:p-10 mb-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
              <span className="text-xs font-semibold tracking-widest uppercase text-[#C9A227]">Reports Library</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight text-white mb-2">
              {headline}
            </h2>
            {subheadline && (
              <p className="text-base text-[#AAB4C3]">{subheadline}</p>
            )}
          </div>
          {imageUrl && (
            <div className="relative w-full lg:w-64 h-32 lg:h-24 rounded-xl overflow-hidden flex-shrink-0">
              <Image
                src={imageUrl}
                alt="Reports visualization"
                fill
                className="object-cover"
                sizes="256px"
              />
            </div>
          )}
        </div>
      </div>

      {/* Report cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {reportItems.map((item, i) => (
          <div
            key={item._key ?? i}
            className="gs-panel p-5 flex flex-col gap-3 transition-all duration-200 group"
            style={{ borderColor: 'rgba(255,255,255,0.08)' }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(201,162,39,0.3)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
          >
            {/* Icon or image */}
            {item.image?.asset?.url ? (
              <div className="relative w-full h-28 rounded-lg overflow-hidden mb-1">
                <Image
                  src={item.image.asset.url}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            ) : (
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
                style={{ background: 'rgba(201,162,39,0.1)', border: '1px solid rgba(201,162,39,0.2)' }}>
                {getIcon(item.title, item.icon)}
              </div>
            )}

            <div>
              <h3 className="text-sm font-semibold text-white leading-tight mb-1.5 group-hover:text-[#C9A227] transition-colors">
                {item.title}
              </h3>
              {item.description && (
                <p className="text-xs text-[#AAB4C3] leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
