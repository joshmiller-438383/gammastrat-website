'use client'

import Image from 'next/image'

interface SolutionDashboardPanelProps {
  headline?: string
  accentWords?: string[]
  body?: string
  imageUrl?: string
}

function highlightAccent(text: string, accentWords: string[]): React.ReactNode {
  if (!accentWords || accentWords.length === 0) return text
  const pattern = new RegExp(`(${accentWords.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi')
  const parts = text.split(pattern)
  return parts.map((part, i) => {
    const isAccent = accentWords.some(w => w.toLowerCase() === part.toLowerCase())
    return isAccent ? (
      <span key={i} className="gradient-text">{part}</span>
    ) : (
      part
    )
  })
}

const METRICS = [
  { label: 'GAMMA EXPOSURE', value: '+2.17B', sub: 'Bullish', color: 'text-[#C9A227]' },
  { label: 'VOLATILITY REGIME', value: 'Elevated', sub: null, color: 'text-[#E8C547]' },
  { label: 'IV RANK (SPX)', value: '68', sub: null, color: 'text-white' },
  { label: 'MARKET MOOD', value: 'RISK ON', sub: null, color: 'text-emerald-400' },
]

export default function SolutionDashboardPanel({
  headline = 'See The Market Like Institutions Do.',
  accentWords = ['Like Institutions Do.'],
  body = 'GammaStrat translates complex options data into clear, actionable intelligence so you can stop guessing and start executing.',
  imageUrl,
}: SolutionDashboardPanelProps) {
  return (
    <section className="gs-panel relative overflow-hidden">
      {/* Background glow — gold */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(201,162,39,0.2) 0%, transparent 70%)' }} />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row gap-0">
        {/* Left: Copy + metrics */}
        <div className="flex flex-col justify-center p-8 lg:p-12 lg:w-[38%]">
          <h2 className="text-3xl lg:text-4xl font-bold leading-[1.15] tracking-tight text-white mb-4">
            {highlightAccent(headline, accentWords ?? [])}
          </h2>
          {body && (
            <p className="text-base text-[#AAB4C3] leading-relaxed mb-8 max-w-sm">
              {body}
            </p>
          )}

          {/* Mini metric cards */}
          <div className="grid grid-cols-2 gap-3">
            {METRICS.map((m) => (
              <div key={m.label} className="px-4 py-3 rounded-lg bg-white/5 border border-white/8">
                <div className="text-[10px] font-semibold tracking-widest uppercase text-[#AAB4C3]/60 mb-1">
                  {m.label}
                </div>
                <div className={`text-lg font-bold ${m.color}`}>{m.value}</div>
                {m.sub && <div className="text-xs text-[#AAB4C3]/60">{m.sub}</div>}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Dashboard visual */}
        <div className="relative lg:w-[62%] min-h-[320px] lg:min-h-[480px] overflow-hidden">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt="GammaStrat institutional analytics dashboard"
              fill
              className="object-cover object-left-top"
              sizes="(max-width: 1024px) 100vw, 62vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, rgba(201,162,39,0.04) 0%, rgba(201,162,39,0.01) 100%)' }}>
              <div className="text-[#AAB4C3]/30 text-sm">Dashboard Visual</div>
            </div>
          )}
          {/* Left fade */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0C0F18] to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
