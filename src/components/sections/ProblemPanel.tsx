import Image from 'next/image'

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

export default function ProblemPanel({
  headline = 'Trading Blind Is Expensive.',
  accentWords = ['Is Expensive.'],
  body = 'Most traders focus on price. Professionals focus on positioning.',
  points = [
    { label: 'No Positioning' },
    { label: 'Mispriced Volatility' },
    { label: 'Unknown Risk' },
  ],
  imageUrl,
}: ProblemPanelProps) {
  return (
    <section className="gs-panel relative overflow-hidden min-h-[380px] flex flex-col">
      {/* Full-bleed background image */}
      {imageUrl && (
        <div className="absolute inset-0">
          <Image
            src={imageUrl}
            alt="Trading blind — lighthouse in storm"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          {/* Gradient: heavy at bottom-left, lighter top-right */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#090B12] via-[#090B12]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090B12]/80 via-transparent to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between flex-1 p-8 lg:p-10">
        {/* Risk labels — top right, matching blueprint */}
        {points && points.length > 0 && (
          <div className="flex flex-col items-end gap-2 self-end">
            {points.map((point, i) => (
              <div
                key={point._key ?? i}
                className="flex items-center gap-2 px-3 py-1.5 rounded bg-black/40 border border-white/10 backdrop-blur-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold-muted)] flex-shrink-0" />
                <span className="text-xs text-[var(--text-secondary)] font-medium uppercase tracking-wide">{point.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* Headline + body — bottom left */}
        <div className="mt-auto">
          <h2 className="text-[1.75rem] lg:text-[2rem] xl:text-[2.25rem] font-bold leading-[1.15] tracking-tight text-white mb-3">
            {highlightAccent(headline, accentWords ?? [])}
          </h2>
          {body && (
            <p className="text-sm lg:text-base text-[var(--text-secondary)] leading-relaxed max-w-[260px]">
              {body}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
