import React from 'react'

interface Pillar {
  _key?: string
  icon?: string
  title: string
  body?: string
}

interface CredibilityPanelProps {
  headline?: string
  accentWords?: string[]
  pillars?: Pillar[]
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

const DEFAULT_PILLARS: Pillar[] = [
  { title: 'Wall Street Hedge Fund Founder', body: 'Built by practitioners who traded at the institutional level.' },
  { title: 'University Professor Endorsed', body: 'Methodology validated by quantitative finance academics.' },
  { title: 'Quantitative Models & Research Driven', body: 'Every signal backed by rigorous statistical research.' },
]

const CREDIBILITY_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663412681205/kxdTaP7F9zvuZsQRYFvgTd/gs-credibility-visual-RzNuy8npjKv7PVdKwYjtUr.png'

export default function CredibilityPanel({
  headline = 'Built On Expert Foundations.',
  accentWords = ['Expert Foundations.'],
  pillars = DEFAULT_PILLARS,
  imageUrl,
}: CredibilityPanelProps) {
  const img = imageUrl || CREDIBILITY_IMG
  return (
    <section className="gs-panel overflow-hidden">
      <div className="flex flex-col lg:flex-row" style={{ minHeight: '320px' }}>

        {/* LEFT: Headline + pillars — always first (top on mobile) */}
        <div className="flex flex-col justify-center p-8 lg:p-10 xl:p-12 lg:w-[55%] flex-shrink-0">
          <p className="section-label mb-4">Credibility</p>
          <h2 style={{ fontSize: 'clamp(1.75rem,2.5vw,2.25rem)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em', color: '#fff', marginBottom: '2rem' }}>
            {highlight(headline, accentWords ?? [])}
          </h2>
          {pillars && pillars.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
              {pillars.map((p, i) => (
                <div key={p._key ?? i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', flex: '1 1 120px', maxWidth: '160px' }}>
                  <div style={{ width: '3rem', height: '3rem', borderRadius: '0.5rem', background: 'rgba(201,162,74,0.1)', border: '1px solid rgba(201,162,74,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '1.25rem' }}>{p.icon ?? '◈'}</span>
                  </div>
                  <p style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#fff', lineHeight: 1.4 }}>{p.title}</p>
                  {p.body && (
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginTop: '0.25rem' }}>{p.body}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT: Visual — below on mobile */}
        <div className="relative overflow-hidden" style={{ flex: 1, minHeight: '240px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img} alt="" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '5rem', background: 'linear-gradient(to right, #090B12, transparent)', pointerEvents: 'none' }} />
        </div>

      </div>
    </section>
  )
}
