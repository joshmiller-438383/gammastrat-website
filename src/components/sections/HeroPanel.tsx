import Link from 'next/link'

const HERO_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663412681205/kxdTaP7F9zvuZsQRYFvgTd/gs-hero-visual-5wRzAepj5DhW7kS6y88QbT.png'

interface HeroPanelProps {
  badge?: string
  headline?: string
  accentWords?: string[]
  description?: string
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
  imageUrl,
}: HeroPanelProps) {
  const img = imageUrl || HERO_IMG
  return (
    <section className="gs-panel overflow-hidden">
      {/* CSS grid: equal 50/50 columns on lg+, single column on mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: '420px' }}>

        {/* LEFT: Copy */}
        <div className="flex flex-col justify-center p-8 lg:p-10 xl:p-12 order-1">
          {badge && <p className="section-label mb-5">{badge}</p>}
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

        {/* RIGHT: Image — goes below on mobile */}
        <div className="relative order-2 overflow-hidden" style={{ minHeight: '280px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img}
            alt=""
            aria-hidden="true"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
          />
          <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '5rem', background: 'linear-gradient(to right, #090B12, transparent)', pointerEvents: 'none' }} />
        </div>

      </div>
    </section>
  )
}
