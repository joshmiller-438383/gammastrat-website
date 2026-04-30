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

function highlight(text: string, words: string[]): React.ReactNode {
  if (!words?.length) return text
  const pattern = new RegExp(`(${words.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi')
  return text.split(pattern).map((part, i) =>
    words.some(w => w.toLowerCase() === part.toLowerCase())
      ? <span key={i} className="gradient-text">{part}</span>
      : part
  )
}

export default function HeroPanel({
  badge = 'Institutional Options Intelligence',
  headline = 'See What the Options Market Is Pricing Before Price Moves',
  accentWords = ['Options Market'],
  description = 'Institutional-grade options intelligence revealing gamma positioning, volatility mispricings, and probability edge across SPX, QQQ, and the most liquid names.',
  ctaPrimaryText = 'Start Your Edge',
  ctaPrimaryUrl = '/subscribe',
  ctaSecondaryText = 'View Sample Report',
  ctaSecondaryUrl = '/reports',
  imageUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663412681205/kxdTaP7F9zvuZsQRYFvgTd/gs-hero-visual-5wRzAepj5DhW7kS6y88QbT.png',
}: HeroPanelProps) {
  return (
    <section className="gs-panel overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* LEFT: Copy — always first on mobile */}
        <div className="flex flex-col justify-center p-8 lg:p-10 xl:p-12 lg:w-[52%] flex-shrink-0">
          {badge && (
            <p className="section-label mb-5">{badge}</p>
          )}
          <h1 className="text-[2rem] lg:text-[2.5rem] xl:text-[2.75rem] font-bold leading-[1.1] tracking-tight text-white mb-5">
            {highlight(headline, accentWords ?? [])}
          </h1>
          {description && (
            <p className="text-sm lg:text-base text-[var(--text-secondary)] leading-relaxed mb-8 max-w-[340px]">
              {description}
            </p>
          )}
          <div className="flex flex-wrap gap-3">
            {ctaPrimaryText && ctaPrimaryUrl && (
              <Link href={ctaPrimaryUrl} className="btn-gold text-xs font-bold uppercase tracking-widest px-5 py-3">
                {ctaPrimaryText}
              </Link>
            )}
            {ctaSecondaryText && ctaSecondaryUrl && (
              <Link href={ctaSecondaryUrl} className="btn-outline-gold text-xs font-bold uppercase tracking-widest px-5 py-3">
                {ctaSecondaryText}
              </Link>
            )}
          </div>
        </div>

        {/* RIGHT: Image — goes below text on mobile */}
        <div className="relative flex-1 min-h-[260px] lg:min-h-[380px] overflow-hidden">
          {imageUrl ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageUrl}
                alt=""
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
              {/* Fade left edge into panel bg */}
              <div
                style={{
                  position: 'absolute',
                  top: 0, bottom: 0, left: 0,
                  width: '6rem',
                  background: 'linear-gradient(to right, #090B12, transparent)',
                  pointerEvents: 'none',
                }}
              />
            </>
          ) : (
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(201,162,74,0.08) 0%, rgba(201,162,74,0.02) 100%)',
              }}
            />
          )}
        </div>
      </div>
    </section>
  )
}
