'use client'

import Image from 'next/image'
import Link from 'next/link'

interface HeroPanelProps {
  badge?: string
  headline?: string
  accentWords?: string[]
  description?: string
  trustLine?: string
  ctaPrimaryText?: string
  ctaPrimaryUrl?: string
  ctaSecondaryText?: string
  ctaSecondaryUrl?: string
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

export default function HeroPanel({
  badge = 'Institutional Options Intelligence',
  headline = 'See What the Options Market Is Pricing Before Price Moves',
  accentWords = ['Options Market'],
  description = 'Institutional-grade options intelligence revealing gamma positioning, volatility mispricings, and probability edge.',
  trustLine = 'Used by serious options traders, volatility specialists, and SPX/index traders.',
  ctaPrimaryText = 'Start Your Edge',
  ctaPrimaryUrl = '/subscribe',
  ctaSecondaryText = 'View Reports',
  ctaSecondaryUrl = '/reports',
  imageUrl,
}: HeroPanelProps) {
  return (
    <section className="gs-panel relative overflow-hidden min-h-[520px] flex flex-col lg:flex-row">
      {/* Radial glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-radial-glow opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-glow blur-3xl opacity-20" />
      </div>

      {/* Left: Copy */}
      <div className="relative z-10 flex flex-col justify-center p-8 lg:p-12 lg:w-[52%]">
        {badge && (
          <div className="inline-flex items-center gap-2 mb-6 self-start">
            <span className="w-2 h-2 rounded-full bg-blue-brand animate-pulse" />
            <span className="text-xs font-semibold tracking-widest uppercase text-blue-brand">
              {badge}
            </span>
          </div>
        )}

        <h1 className="text-4xl lg:text-5xl xl:text-[52px] font-bold leading-[1.1] tracking-tight text-white mb-6">
          {highlightAccent(headline, accentWords ?? [])}
        </h1>

        {description && (
          <p className="text-base lg:text-lg text-dark-muted leading-relaxed mb-8 max-w-md">
            {description}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          {ctaPrimaryText && ctaPrimaryUrl && (
            <Link
              href={ctaPrimaryUrl}
              className="btn-glow inline-flex items-center justify-center px-7 py-3.5 rounded-lg text-sm font-semibold text-white"
            >
              {ctaPrimaryText}
            </Link>
          )}
          {ctaSecondaryText && ctaSecondaryUrl && (
            <Link
              href={ctaSecondaryUrl}
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg text-sm font-semibold text-white border border-white/15 bg-white/5 hover:bg-white/10 transition-colors"
            >
              {ctaSecondaryText}
            </Link>
          )}
        </div>

        {trustLine && (
          <p className="text-xs text-dark-muted/70 leading-relaxed max-w-sm">
            {trustLine}
          </p>
        )}
      </div>

      {/* Right: Visual */}
      <div className="relative lg:w-[48%] min-h-[280px] lg:min-h-0 overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt="GammaStrat options market visualization"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 1024px) 100vw, 48vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-brand/10 to-violet-brand/10 flex items-center justify-center">
            <div className="text-dark-muted/30 text-sm">Visual</div>
          </div>
        )}
        {/* Fade overlay on left edge */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gs-card to-transparent pointer-events-none" />
      </div>
    </section>
  )
}
