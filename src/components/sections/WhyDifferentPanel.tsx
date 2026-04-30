interface WhyDifferentPanelProps {
  headline?: string
  accentWords?: string[]
  drivers?: string[] | { _key?: string; label?: string; text?: string }[]
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

const DEFAULT_DRIVERS = [
  'Options Pricing',
  'Dealer Positioning',
  'Volatility Structure',
  'Probability Distribution',
]

function getDriverLabel(d: string | { _key?: string; label?: string; text?: string }): string {
  if (typeof d === 'string') return d
  return d.label ?? d.text ?? ''
}

export default function WhyDifferentPanel({
  headline = 'We Focus On What Moves Markets.',
  accentWords = ['Moves Markets.'],
  drivers = DEFAULT_DRIVERS,
  imageUrl = 'https://cdn.sanity.io/images/fa41e7wa/production/2ff011d2d64e218535464b4f9193ef53729ce259-645x344.png',
}: WhyDifferentPanelProps) {
  return (
    <section className="gs-panel overflow-hidden">
      <div className="flex flex-col lg:flex-row" style={{ minHeight: '360px' }}>

        {/* LEFT: Copy + drivers — always first (top on mobile) */}
        <div className="flex flex-col justify-center p-8 lg:p-10 xl:p-12 lg:w-[50%] flex-shrink-0">
          <p className="section-label mb-4">Why Different</p>
          <h2 style={{ fontSize: 'clamp(1.75rem,2.5vw,2.25rem)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em', color: '#fff', marginBottom: '1.5rem' }}>
            {highlight(headline, accentWords ?? [])}
          </h2>
          {drivers && drivers.length > 0 && (
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {drivers.map((d, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                  <span style={{ width: '1.25rem', height: '1.25rem', borderRadius: '0.25rem', background: 'rgba(201,162,74,0.15)', border: '1px solid rgba(201,162,74,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ width: '0.375rem', height: '0.375rem', borderRadius: '50%', background: 'var(--gold)' }} />
                  </span>
                  <span style={{ fontSize: '0.9375rem', color: '#fff', fontWeight: 500 }}>{getDriverLabel(d)}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* RIGHT: Visual — below on mobile */}
        <div style={{ position: 'relative', flex: 1, minHeight: '260px' }}>
          {imageUrl ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imageUrl} alt="" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
              {/* Left fade */}
              <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '5rem', background: 'linear-gradient(to right, #090B12, transparent)', pointerEvents: 'none' }} />
              {/* Price/Positioning labels overlay */}
              <div style={{ position: 'absolute', top: '50%', right: '1.5rem', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: '4rem', alignItems: 'flex-end' }}>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>PRICE</p>
                  <p style={{ fontSize: '0.625rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em' }}>(The Effect)</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)' }}>POSITIONING</p>
                  <p style={{ fontSize: '0.625rem', color: 'rgba(201,162,74,0.6)', letterSpacing: '0.05em' }}>(The Cause)</p>
                </div>
              </div>
            </>
          ) : (
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center right, rgba(201,162,74,0.12) 0%, transparent 70%)' }} />
          )}
        </div>

      </div>
    </section>
  )
}
