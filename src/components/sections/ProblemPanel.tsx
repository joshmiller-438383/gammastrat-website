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
      <div className="problem-content">
        {/* LEFT: Headline + body */}
        <div className="problem-text">
          <h2 className="problem-headline">
            {highlight(headline, accentWords ?? [])}
          </h2>
          {body && <p className="problem-body">{body}</p>}
        </div>

        {/* RIGHT: Risk labels */}
        {points && points.length > 0 && (
          <div className="problem-labels">
            {points.map((pt, i) => (
              <div key={pt._key ?? i} className="problem-label-pill">
                <span className="problem-label-dot" />
                <span className="problem-label-text">{pt.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        .problem-content {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          min-height: 420px;
          padding: 2.5rem 3rem;
          gap: 2rem;
        }
        .problem-text { flex: 0 1 45%; max-width: 360px; }
        .problem-headline {
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: #fff;
          margin-bottom: 0.875rem;
        }
        .problem-body { font-size: 0.9375rem; color: rgba(255,255,255,0.65); line-height: 1.6; }
        .problem-labels {
          flex: 0 0 auto;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.625rem;
          padding-bottom: 0.25rem;
          min-width: 0;
        }
        .problem-label-pill {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 0.875rem;
          border-radius: 0.25rem;
          background: rgba(0,0,0,0.55);
          border: 1px solid rgba(255,255,255,0.14);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          white-space: nowrap;
        }
        .problem-label-dot {
          width: 0.4rem;
          height: 0.4rem;
          border-radius: 50%;
          background: #C9A24A;
          flex-shrink: 0;
        }
        .problem-label-text {
          font-size: 0.6875rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.9);
        }
        @media (max-width: 640px) {
          .problem-content {
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-end;
            padding: 1.75rem 1.25rem;
            gap: 1.25rem;
            min-height: 460px;
          }
          .problem-text { flex: none; max-width: 100%; }
          .problem-headline { font-size: 1.625rem; }
          .problem-body { font-size: 0.875rem; }
          .problem-labels {
            align-items: flex-start;
            width: 100%;
          }
          .problem-label-pill { white-space: normal; }
          .problem-label-text { font-size: 0.625rem; letter-spacing: 0.08em; }
        }
      `}</style>
    </section>
  )
}
