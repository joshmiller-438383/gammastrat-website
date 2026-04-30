import Link from 'next/link'

interface FinalCTAPanelProps {
  headline?: string
  accentWords?: string[]
  subheadline?: string
  buttonText?: string
  buttonUrl?: string
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

export default function FinalCTAPanel({
  headline = 'Gain The Edge. Stay Ahead.',
  accentWords = ['Gain The Edge.'],
  subheadline = 'Institutional intelligence. Delivered daily.',
  buttonText = 'Start Your Edge',
  buttonUrl = '/subscribe',
  imageUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663412681205/kxdTaP7F9zvuZsQRYFvgTd/gs-cta-visual-C2G6APswUQ8A9orhFGSsLF.png',
}: FinalCTAPanelProps) {
  return (
    <section className="gs-panel overflow-hidden">
      <div className="flex flex-col lg:flex-row" style={{ minHeight: '300px' }}>

        {/* LEFT: Copy + CTA — always first (top on mobile) */}
        <div className="flex flex-col justify-center p-8 lg:p-10 xl:p-12 lg:w-[55%] flex-shrink-0">
          <h2 style={{ fontSize: 'clamp(2rem,3vw,2.75rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#fff', marginBottom: '0.75rem' }}>
            {highlight(headline, accentWords ?? [])}
          </h2>
          {subheadline && (
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>
              {subheadline}
            </p>
          )}
          {buttonText && buttonUrl && (
            <div>
              <Link href={buttonUrl} className="btn-gold text-xs font-bold uppercase tracking-widest px-6 py-3 inline-block">
                {buttonText}
              </Link>
            </div>
          )}
        </div>

        {/* RIGHT: GS logo / visual — below on mobile */}
        <div style={{ position: 'relative', flex: 1, minHeight: '240px' }}>
          {imageUrl ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imageUrl} alt="" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
              <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '5rem', background: 'linear-gradient(to right, #090B12, transparent)', pointerEvents: 'none' }} />
            </>
          ) : (
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(201,162,74,0.12) 0%, transparent 70%)' }} />
          )}
        </div>

      </div>
    </section>
  )
}
