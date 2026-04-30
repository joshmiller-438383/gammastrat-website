'use client'

import Image from 'next/image'

interface WhyDifferentPanelProps {
  headline?: string
  accentWords?: string[]
  drivers?: string[] | string
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

const DRIVERS = [
  { icon: '◈', label: 'Options Pricing' },
  { icon: '◉', label: 'Dealer Positioning' },
  { icon: '◎', label: 'Volatility Structure' },
  { icon: '⊙', label: 'Probability Distribution' },
]

export default function WhyDifferentPanel({
  headline = 'We Focus On What Moves Markets.',
  accentWords = ['Moves Markets.'],
  drivers,
  imageUrl,
}: WhyDifferentPanelProps) {
  const driverList = Array.isArray(drivers)
    ? drivers
    : drivers
      ? drivers.split('\n').filter(Boolean).map(d => d.trim())
      : DRIVERS.map(d => d.label)

  return (
    <section className="gs-panel relative overflow-hidden min-h-[400px] flex flex-col lg:flex-row">
      {/* Background glow — gold */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(201,162,39,0.2) 0%, transparent 70%)' }} />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full blur-2xl opacity-15"
          style={{ background: 'radial-gradient(circle, rgba(201,162,39,0.15) 0%, transparent 70%)' }} />
      </div>

      {/* Left: Copy */}
      <div className="relative z-10 flex flex-col justify-center p-8 lg:p-12 lg:w-[45%]">
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
          <span className="text-xs font-semibold tracking-widest uppercase text-[#C9A227]">Why Different</span>
        </div>

        <h2 className="text-3xl lg:text-4xl font-bold leading-[1.15] tracking-tight text-white mb-6">
          {highlightAccent(headline, accentWords ?? [])}
        </h2>

        <div className="flex flex-col gap-3">
          {driverList.map((driver, i) => {
            const iconData = DRIVERS[i] ?? { icon: '◆' }
            return (
              <div key={i} className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0"
                  style={{ background: 'rgba(201,162,39,0.1)', border: '1px solid rgba(201,162,39,0.25)', color: '#C9A227' }}>
                  {iconData.icon}
                </div>
                <span className="text-sm text-[#AAB4C3] group-hover:text-white transition-colors">
                  {driver}
                </span>
              </div>
            )
          })}
        </div>

        {/* Flow arrow indicator — gold gradient */}
        <div className="mt-8 flex items-center gap-3">
          <div className="flex-1 h-px"
            style={{ background: 'linear-gradient(to right, rgba(201,162,39,0.6), rgba(232,197,71,0.4))' }} />
          <div className="text-xs text-[#AAB4C3]/60 uppercase tracking-widest">→ Edge</div>
        </div>
      </div>

      {/* Right: Visual */}
      <div className="relative lg:w-[55%] min-h-[280px] lg:min-h-0 overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt="Options data flow visualization"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, rgba(201,162,39,0.04) 0%, rgba(201,162,39,0.01) 100%)' }}>
            <div className="text-[#AAB4C3]/30 text-sm">Flow Visual</div>
          </div>
        )}
        {/* Left fade */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0C0F18] to-transparent pointer-events-none" />

        {/* Overlay labels */}
        <div className="absolute bottom-8 right-8 flex flex-col gap-2 text-right">
          <div className="text-xs text-[#AAB4C3]/60 uppercase tracking-widest">POSITIONING</div>
          <div className="text-xs text-[#AAB4C3]/40">(The Cause)</div>
        </div>
        <div className="absolute top-8 right-8 flex flex-col gap-2 text-right">
          <div className="text-xs text-[#AAB4C3]/60 uppercase tracking-widest">PRICE</div>
          <div className="text-xs text-[#AAB4C3]/40">(The Effect)</div>
        </div>
      </div>
    </section>
  )
}
