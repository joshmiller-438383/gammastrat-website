import React from 'react'

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
  { label: 'No Positioning Data' },
  { label: 'Mispriced Volatility' },
  { label: 'Unknown Risk Exposure' },
]

const PROBLEM_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663412681205/kxdTaP7F9zvuZsQRYFvgTd/gs-problem-visual-fuBJRSNchp5Cmztz3DSGUH.png'

export default function ProblemPanel({
  headline = 'Trading Blind Is Expensive.',
  accentWords = ['Is Expensive.'],
  body = 'Most traders focus on price. Professionals focus on positioning. Without gamma data, volatility structure, and dealer exposure, you are trading blind.',
  points = DEFAULT_POINTS,
  imageUrl,
}: ProblemPanelProps) {
  const img = imageUrl || PROBLEM_IMG
  return (
    <section
      className="gs-panel overflow-hidden"
      style={{ position: 'relative', minHeight: '420px' }}
    >
      {/* Full-bleed background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={img}
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

      {/* Dark gradient overlay — heavy on left, fades to transparent on right */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(9,11,18,0.88) 0%, rgba(9,11,18,0.55) 45%, rgba(9,11,18,0.15) 100%)',
          pointerEvents: 'none',
        }}
      />
      {/* Additional bottom gradient to ensure text legibility */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(9,11,18,0.6) 0%, transparent 50%)',
          pointerEvents: 'none',
        }}
      />

      {/* Content layer — 2-column: text left, labels right */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          minHeight: '420px',
          padding: '2.5rem 3rem',
          gap: '2rem',
        }}
      >
        {/* LEFT: Headline + body — anchored to bottom-left */}
        <div style={{ flex: '0 1 45%', maxWidth: '360px' }}>
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#fff',
              marginBottom: '0.875rem',
            }}
          >
            {highlight(headline, accentWords ?? [])}
          </h2>
          {body && (
            <p
              style={{
                fontSize: '0.9375rem',
                color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.6,
              }}
            >
              {body}
            </p>
          )}
        </div>

        {/* RIGHT: Risk labels — stacked, right-aligned, vertically centered */}
        {points && points.length > 0 && (
          <div
            style={{
              flex: '0 0 auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: '0.625rem',
              paddingBottom: '0.25rem',
            }}
          >
            {points.map((pt, i) => (
              <div
                key={pt._key ?? i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.4rem 0.875rem',
                  borderRadius: '0.25rem',
                  background: 'rgba(0,0,0,0.5)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  backdropFilter: 'blur(4px)',
                  WebkitBackdropFilter: 'blur(4px)',
                }}
              >
                <span
                  style={{
                    width: '0.4rem',
                    height: '0.4rem',
                    borderRadius: '50%',
                    background: 'var(--gold)',
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.9)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {pt.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
