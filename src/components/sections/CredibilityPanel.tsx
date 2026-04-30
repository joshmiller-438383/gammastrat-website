'use client'

import Image from 'next/image'

interface CredibilityPillar {
  _key?: string
  icon?: string
  title: string
  body?: string
}

interface CredibilityPanelProps {
  headline?: string
  accentWords?: string[]
  pillars?: CredibilityPillar[]
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

const DEFAULT_PILLARS: CredibilityPillar[] = [
  {
    icon: '🏛',
    title: 'Wall Street Hedge Fund Founder',
    body: 'Built on frameworks developed and tested in institutional trading environments.',
  },
  {
    icon: '🎓',
    title: 'University Professor Endorsed',
    body: 'Methodology validated by academic research in derivatives and market microstructure.',
  },
  {
    icon: '⚙️',
    title: 'Quantitative Models & Research Driven',
    body: 'Every signal is backed by rigorous quantitative analysis, not opinion or guesswork.',
  },
]

export default function CredibilityPanel({
  headline = 'Built On Expert Foundations.',
  accentWords = ['Expert Foundations.'],
  pillars,
  imageUrl,
}: CredibilityPanelProps) {
  const pillarList = (pillars && pillars.length > 0) ? pillars : DEFAULT_PILLARS

  return (
    <section className="gs-panel relative overflow-hidden">
      {/* Background glow — gold */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(201,162,39,0.2) 0%, transparent 70%)' }} />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row gap-0">
        {/* Left: Copy */}
        <div className="flex flex-col justify-center p-8 lg:p-12 lg:w-[45%]">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C9A227]">Credibility</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold leading-[1.15] tracking-tight text-white mb-8">
            {highlightAccent(headline, accentWords ?? [])}
          </h2>

          {/* Pillars */}
          <div className="flex flex-col gap-5">
            {pillarList.map((pillar, i) => (
              <div key={pillar._key ?? i} className="flex gap-4 group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: 'rgba(201,162,39,0.1)', border: '1px solid rgba(201,162,39,0.25)' }}>
                  {pillar.icon ?? '◆'}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-[#C9A227] transition-colors">
                    {pillar.title}
                  </h3>
                  {pillar.body && (
                    <p className="text-xs text-[#AAB4C3] leading-relaxed">{pillar.body}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Visual */}
        <div className="relative lg:w-[55%] min-h-[280px] lg:min-h-[400px] overflow-hidden">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt="GammaStrat credibility and expertise"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, rgba(201,162,39,0.04) 0%, rgba(201,162,39,0.01) 100%)' }}>
              <div className="text-[#AAB4C3]/30 text-sm">Credibility Visual</div>
            </div>
          )}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0C0F18] to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
