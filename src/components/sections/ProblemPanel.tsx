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

function highlight(text: string, words: string[]): React.ReactNode {
  if (!words?.length) return text
  const pattern = new RegExp(`(${words.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi')
  return text.split(pattern).map((part, i) =>
    words.some(w => w.toLowerCase() === part.toLowerCase())
      ? <span key={i} className="gradient-text">{part}</span>
      : part
  )
}

const DEFAULT_POINTS: ProblemPoint[] = [
  { label: 'No Positioning' },
  { label: 'Mispriced Volatility' },
  { label: 'Unknown Risk' },
]

export default function ProblemPanel({
  headline = 'Trading Blind Is Expensive.',
  accentWords = ['Is Expensive.'],
  body = 'Most traders focus on price. Professionals focus on positioning. Without gamma data, volatility structure, and dealer exposure, you are trading blind.',
  points = DEFAULT_POINTS,
  imageUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663412681205/kxdTaP7F9zvuZsQRYFvgTd/gs-problem-visual-fuBJRSNchp5Cmztz3DSGUH.png',
}: ProblemPanelProps) {
  return (
    <section
      className="gs-panel overflow-hidden"
      style={{ position: 'relative', minHeight: '380px' }}
    >
      {/* Full-bleed background image */}
      {imageUrl && (
        // eslint-disable-next-line @next/next/no-img-element
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
            objectPosition: 'center right',
          }}
        />
      )}

      {/* Dark overlay — heavy bottom-left, lighter top-right */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top right, rgba(9,11,18,0.92) 0%, rgba(9,11,18,0.6) 50%, rgba(9,11,18,0.15) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Content layer */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: '380px',
          padding: '2rem 2.5rem',
        }}
      >
        {/* Risk labels — top right */}
        {points && points.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
            {points.map((pt, i) => (
              <div
                key={pt._key ?? i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.375rem 0.75rem',
                  borderRadius: '0.25rem',
                  background: 'rgba(0,0,0,0.45)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <span
                  style={{
                    width: '0.375rem',
                    height: '0.375rem',
                    borderRadius: '50%',
                    background: 'var(--gold)',
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.85)',
                  }}
                >
                  {pt.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Headline + body — bottom left */}
        <div style={{ marginTop: 'auto' }}>
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#fff',
              marginBottom: '0.75rem',
            }}
          >
            {highlight(headline, accentWords ?? [])}
          </h2>
          {body && (
            <p
              style={{
                fontSize: '0.9375rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                maxWidth: '280px',
              }}
            >
              {body}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
