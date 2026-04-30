import Link from 'next/link'

interface SolutionDashboardPanelProps {
  headline?: string
  accentWords?: string[]
  body?: string
  ctaText?: string
  ctaUrl?: string
  imageUrl?: string
}

function highlight(text: string, words: string[]): React.ReactNode {
  if (!words?.length) return text
  const pattern = new RegExp(`(${words.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi')
  return text.split(pattern).map((part, i) =>
    words.some(w => w.toLowerCase() === part.toLowerCase())
      ? <span key={i} className="gradient-text">{part}</span>
      : part
  )
}

export default function SolutionDashboardPanel({
  headline = 'See The Market Like Institutions Do.',
  accentWords = ['Like Institutions Do.'],
  body = 'GammaStrat translates complex options data into clear, actionable intelligence so you can stop guessing and start executing with conviction.',
  ctaText,
  ctaUrl,
  imageUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663412681205/kxdTaP7F9zvuZsQRYFvgTd/gs-solution-visual-SPiRWkpn7pbR88JrjfGaWr.png',
}: SolutionDashboardPanelProps) {
  return (
    <section className="gs-panel overflow-hidden">
      {/* flex-col on mobile → flex-row on lg */}
      <div className="flex flex-col lg:flex-row" style={{ minHeight: '340px' }}>

        {/* LEFT: Copy — always first (top on mobile) */}
        <div className="flex flex-col justify-center p-8 lg:p-10 xl:p-12 lg:w-[38%] flex-shrink-0">
          <p className="section-label mb-4">The Solution</p>
          <h2 style={{ fontSize: 'clamp(1.75rem,2.5vw,2.25rem)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em', color: '#fff', marginBottom: '1.25rem' }}>
            {highlight(headline, accentWords ?? [])}
          </h2>
          {body && (
            <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.65, maxWidth: '300px', marginBottom: ctaText ? '1.5rem' : 0 }}>
              {body}
            </p>
          )}
          {ctaText && ctaUrl && (
            <Link href={ctaUrl} className="btn-gold text-xs font-bold uppercase tracking-widest px-5 py-3 self-start inline-block">
              {ctaText}
            </Link>
          )}
        </div>

        {/* RIGHT: Dashboard screenshot — below on mobile */}
        <div style={{ position: 'relative', flex: 1, minHeight: '280px' }}>
          {imageUrl ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imageUrl} alt="" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'left top' }} />
              <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '5rem', background: 'linear-gradient(to right, #090B12, transparent)', pointerEvents: 'none' }} />
            </>
          ) : (
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(201,162,74,0.06) 0%, rgba(201,162,74,0.02) 100%)' }} />
          )}
        </div>

      </div>
    </section>
  )
}
