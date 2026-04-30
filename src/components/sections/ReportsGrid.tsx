'use client'

import Image from 'next/image'
import { useState } from 'react'

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

export default function ReportsGrid({
  headline = 'What You Get Every Morning.',
  subheadline,
  items,
  imageUrl,
}: ReportsGridProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const reportItems = (items && items.length > 0) ? items : DEFAULT_ITEMS

  return (
    <section className="gs-panel relative overflow-hidden flex flex-col lg:flex-row min-h-[340px]">
      {/* Left: Image panel */}
      <div className="relative lg:w-[35%] min-h-[200px] lg:min-h-0 overflow-hidden flex-shrink-0">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt="GammaStrat daily reports"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 35vw"
          />
        ) : (
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, rgba(201,162,74,0.06) 0%, rgba(201,162,74,0.02) 100%)' }} />
        )}
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#090B12] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#090B12] to-transparent pointer-events-none lg:hidden" />
      </div>

      {/* Right: Report cards grid */}
      <div className="flex-1 flex flex-col justify-center p-6 lg:p-8">
        {headline && (
          <div className="mb-5">
            <span className="section-label mb-2 block">Daily Intelligence</span>
            <h2 className="text-xl lg:text-2xl font-bold text-white">{headline}</h2>
            {subheadline && (
              <p className="text-sm text-[var(--text-secondary)] mt-1">{subheadline}</p>
            )}
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
          {reportItems.map((item, i) => (
            <div
              key={item._key ?? i}
              className="rounded-lg p-3 border transition-all duration-200 cursor-default"
              style={{
                background: hoveredIndex === i ? 'rgba(201,162,74,0.08)' : 'rgba(255,255,255,0.03)',
                borderColor: hoveredIndex === i ? 'rgba(201,162,74,0.3)' : 'rgba(255,255,255,0.07)',
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h3 className="text-xs font-semibold text-white mb-1.5 leading-tight">{item.title}</h3>
              {item.description && (
                <p className="text-[11px] text-[var(--text-secondary)] leading-snug">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
