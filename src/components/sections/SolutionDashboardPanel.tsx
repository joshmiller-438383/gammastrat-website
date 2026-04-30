import Image from 'next/image'
import Link from 'next/link'

interface SolutionDashboardPanelProps {
  headline?: string
  accentWords?: string[]
  body?: string
  ctaText?: string
  ctaUrl?: string
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

export default function SolutionDashboardPanel({
  headline = 'See The Market Like Institutions Do.',
  accentWords = ['Like Institutions Do.'],
  body = 'GammaStrat translates complex options data into clear, actionable intelligence so you can stop guessing and start executing.',
  ctaText,
  ctaUrl,
  imageUrl,
}: SolutionDashboardPanelProps) {
  return (
    <section className="gs-panel relative overflow-hidden flex flex-col lg:flex-row min-h-[340px]">
      {/* Left: Copy */}
      <div className="relative z-10 flex flex-col justify-center p-8 lg:p-10 xl:p-12 lg:w-[38%] flex-shrink-0">
        <div className="mb-4">
          <span className="section-label">The Solution</span>
        </div>

        <h2 className="text-[1.75rem] lg:text-[2rem] xl:text-[2.25rem] font-bold leading-[1.15] tracking-tight text-white mb-5">
          {highlightAccent(headline, accentWords ?? [])}
        </h2>

        {body && (
          <p className="text-sm lg:text-base text-[var(--text-secondary)] leading-relaxed max-w-[300px] mb-6">
            {body}
          </p>
        )}

        {ctaText && ctaUrl && (
          <Link href={ctaUrl} className="btn-gold text-xs font-bold uppercase tracking-widest px-5 py-3 self-start">
            {ctaText}
          </Link>
        )}
      </div>

      {/* Right: Dashboard screenshot */}
      <div className="relative flex-1 min-h-[260px] lg:min-h-0 overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt="GammaStrat dashboard — options analytics"
            fill
            className="object-cover object-left-top"
            sizes="(max-width: 1024px) 100vw, 62vw"
          />
        ) : (
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, rgba(201,162,74,0.04) 0%, rgba(201,162,74,0.01) 100%)' }} />
        )}
        {/* Left fade */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#090B12] to-transparent pointer-events-none" />
      </div>
    </section>
  )
}
