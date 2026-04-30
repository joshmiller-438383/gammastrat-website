'use client'
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
      ? <span key={i} style={{ color: '#C9A24A' }}>{part}</span>
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
    <section className="gs-panel relative overflow-hidden" style={{ minHeight: '420px' }}>
      {/* Full-bleed background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={img}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Left-heavy dark gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to right, rgba(9,11,18,0.92) 0%, rgba(9,11,18,0.6) 45%, rgba(9,11,18,0.18) 100%)' }}
      />
      {/* Bottom gradient for text legibility */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(9,11,18,0.65) 0%, transparent 55%)' }}
      />

      {/* Content layer — stacks vertically on mobile, row on sm+ */}
      <div
        className="relative z-10 flex flex-col sm:flex-row sm:items-end sm:justify-between"
        style={{
          minHeight: '420px',
          padding: 'clamp(1.5rem, 4vw, 2.5rem) clamp(1.25rem, 4vw, 3rem)',
          gap: '1.5rem',
          boxSizing: 'border-box',
          width: '100%',
        }}
      >
        {/* LEFT: Headline + body */}
        <div style={{ flex: '0 1 auto', maxWidth: '360px', minWidth: 0 }}>
          <h2
            style={{
              fontSize: 'clamp(1.625rem, 3.5vw, 2.5rem)',
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
            <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>
              {body}
            </p>
          )}
        </div>

        {/* Labels — left-aligned on mobile, right-aligned on sm+ */}
        {points && points.length > 0 && (
          <div
            className="flex flex-col items-start sm:items-end"
            style={{ gap: '0.625rem', flexShrink: 0, maxWidth: '100%' }}
          >
            {points.map((pt, i) => (
              <div
                key={pt._key ?? i}
                className="flex items-center"
                style={{
                  gap: '0.5rem',
                  padding: '0.4rem 0.875rem',
                  borderRadius: '0.25rem',
                  background: 'rgba(0,0,0,0.55)',
                  border: '1px solid rgba(255,255,255,0.14)',
                  backdropFilter: 'blur(4px)',
                  WebkitBackdropFilter: 'blur(4px)',
                  maxWidth: 'min(280px, calc(100vw - 2.5rem))',
                }}
              >
                <span
                  style={{
                    width: '0.4rem',
                    height: '0.4rem',
                    borderRadius: '50%',
                    background: '#C9A24A',
                    flexShrink: 0,
                    display: 'inline-block',
                  }}
                />
                <span
                  style={{
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.9)',
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
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
