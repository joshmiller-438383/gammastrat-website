'use client'

import Image from 'next/image'
import Link from 'next/link'

interface FinalCTAPanelProps {
  headline?: string
  accentWords?: string[]
  subheadline?: string
  buttonText?: string
  buttonUrl?: string
  imageUrl?: string
}

function highlightAccent(text: string, accentWords: string[]): React.ReactNode {
  if (!accentWords || accentWords.length === 0) return text
  const pattern = new RegExp(`(${accentWords.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi')
  const parts = text.split(pattern)
  return parts.map((part, i) => {
    const isAccent = accentWords.some(w => w.toLowerCase() === part.toLowerCase())
    return isAccent ? (
      <span key={i} className="gradient-text">{part}</span>
    ) : (
      part
    )
  })
}

export default function FinalCTAPanel({
  headline = 'Gain The Edge. Stay Ahead.',
  accentWords = ['The Edge.'],
  subheadline = 'Institutional intelligence. Delivered daily.',
  buttonText = 'Start Your Edge',
  buttonUrl = '/subscribe',
  imageUrl,
}: FinalCTAPanelProps) {
  return (
    <section className="gs-panel relative overflow-hidden min-h-[380px]">
      {/* Deep glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-radial-glow opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-glow blur-3xl opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-violet-glow blur-2xl opacity-20" />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 p-8 lg:p-14">
        {/* Left: Copy */}
        <div className="flex flex-col items-start lg:max-w-[55%]">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-brand animate-pulse" />
            <span className="text-xs font-semibold tracking-widest uppercase text-blue-brand">Ready to Start</span>
          </div>

          <h2 className="text-4xl lg:text-5xl xl:text-[52px] font-bold leading-[1.1] tracking-tight text-white mb-4">
            {highlightAccent(headline, accentWords ?? [])}
          </h2>

          {subheadline && (
            <p className="text-base text-dark-muted mb-8">{subheadline}</p>
          )}

          {buttonText && buttonUrl && (
            <Link
              href={buttonUrl}
              className="btn-glow inline-flex items-center justify-center px-8 py-4 rounded-lg text-sm font-semibold text-white uppercase tracking-wider"
            >
              {buttonText}
            </Link>
          )}
        </div>

        {/* Right: Visual */}
        {imageUrl && (
          <div className="relative w-full lg:w-72 h-64 lg:h-72 flex-shrink-0">
            <Image
              src={imageUrl}
              alt="GammaStrat target visualization"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 288px"
            />
          </div>
        )}

        {/* Decorative rings if no image */}
        {!imageUrl && (
          <div className="relative w-64 h-64 flex-shrink-0 hidden lg:flex items-center justify-center">
            {[1, 2, 3].map((ring) => (
              <div
                key={ring}
                className="absolute rounded-full border border-blue-brand/20"
                style={{
                  width: `${ring * 80}px`,
                  height: `${ring * 80}px`,
                }}
              />
            ))}
            {/* Center GS mark */}
            <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-brand flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg tracking-tight">GS</span>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
