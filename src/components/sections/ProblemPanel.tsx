'use client'

import Image from 'next/image'

interface ProblemPoint {
  _key?: string
  label: string
}

interface ProblemPanelProps {
  headline?: string
  accentWords?: string[]
  body?: string
  points?: ProblemPoint[]
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

export default function ProblemPanel({
  headline = 'Trading Blind Is Expensive.',
  accentWords = ['Is Expensive.'],
  body = 'Most traders focus on price. Professionals focus on positioning.',
  points = [
    { label: 'No Positioning Data' },
    { label: 'Mispriced Volatility' },
    { label: 'Unknown Risk Exposure' },
  ],
  imageUrl,
}: ProblemPanelProps) {
  return (
    <section className="gs-panel relative overflow-hidden min-h-[400px] flex flex-col">
      {/* Background image */}
      {imageUrl && (
        <div className="absolute inset-0">
          <Image
            src={imageUrl}
            alt="Trading blind risk visualization"
            fill
            className="object-cover object-center opacity-40"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0C0F18]/90 via-[#0C0F18]/60 to-transparent" />
        </div>
      )}

      {/* Subtle dark glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-red-900/10 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full p-8 lg:p-10">
        <div>
          <h2 className="text-3xl lg:text-4xl xl:text-[40px] font-bold leading-[1.15] tracking-tight text-white mb-4">
            {highlightAccent(headline, accentWords ?? [])}
          </h2>
          {body && (
            <p className="text-base text-[#AAB4C3] leading-relaxed mb-6 max-w-xs">
              {body}
            </p>
          )}
        </div>

        {points && points.length > 0 && (
          <div className="flex flex-col gap-2 mt-auto">
            {points.map((point, i) => (
              <div
                key={point._key ?? i}
                className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-white/5 border border-white/8"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-red-400/70 flex-shrink-0" />
                <span className="text-sm text-[#AAB4C3]">{point.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
