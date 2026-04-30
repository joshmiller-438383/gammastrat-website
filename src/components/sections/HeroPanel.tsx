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
  badge,
  headline = 'See What the Options Market Is Pricing Before Price Moves',
  accentWords = ['Options Market'],
  description = 'Institutional-grade options intelligence revealing gamma positioning, volatility mispricings, and probability edge.',
  ctaPrimaryText = 'Start Your Edge',
  ctaPrimaryUrl = '/subscribe',
  ctaSecondaryText = 'View Sample Report',
  ctaSecondaryUrl = '/reports',
  imageUrl,
}: HeroPanelProps) {
  return (
    <section className="gs-panel relative overflow-hidden min-h-[380px] flex flex-col lg:flex-row">
      {/* Left: Copy — always on top of image on mobile, side-by-side on desktop */}
      <div className="relative z-10 flex flex-col justify-center p-8 lg:p-10 xl:p-12 lg:w-[52%] flex-shrink-0">
        {badge && (
          <div className="mb-5">
            <span className="section-label">{badge}</span>
          </div>
        )}

        <h1 className="text-[2rem] lg:text-[2.5rem] xl:text-[2.75rem] font-bold leading-[1.1] tracking-tight text-white mb-5">
          {highlightAccent(headline, accentWords ?? [])}
        </h1>

        {description && (
          <p className="text-sm lg:text-base text-[var(--text-secondary)] leading-relaxed mb-8 max-w-[340px]">
            {description}
          </p>
        )}

        <div className="flex flex-wrap gap-3">
          {ctaPrimaryText && ctaPrimaryUrl && (
            <Link
              href={ctaPrimaryUrl}
              className="btn-gold text-xs font-bold uppercase tracking-widest px-5 py-3"
            >
              {ctaPrimaryText}
            </Link>
          )}
          {ctaSecondaryText && ctaSecondaryUrl && (
            <Link
              href={ctaSecondaryUrl}
              className="btn-outline-gold text-xs font-bold uppercase tracking-widest px-5 py-3"
            >
              {ctaSecondaryText}
            </Link>
          )}
        </div>
      </div>

      {/* Right: Visual */}
      <div className="relative flex-1 min-h-[240px] lg:min-h-0 overflow-hidden">
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
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, rgba(201,162,74,0.06) 0%, rgba(201,162,74,0.02) 100%)' }} />
        )}
        {/* Left fade so text panel blends into image */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#090B12] to-transparent pointer-events-none" />
      </div>
    </section>
  )
}
