import Image from 'next/image'

interface CredibilityPillar {
  _key?: string
  title: string
  description?: string
  body?: string  // Sanity uses 'body' field
  icon?: string
}

interface CredibilityPanelProps {
  headline?: string
  accentWords?: string[]
  pillars?: CredibilityPillar[]
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

const DEFAULT_PILLARS: CredibilityPillar[] = [
  { title: 'Wall Street Hedge Fund Founder', icon: '🏛️' },
  { title: 'University Professor Endorsed', icon: '🎓' },
  { title: 'Quantitative Models & Research Driven', icon: '🔬' },
]

export default function CredibilityPanel({
  headline = 'Built On Expert Foundations.',
  accentWords = ['Expert Foundations.'],
  pillars = DEFAULT_PILLARS,
  imageUrl,
}: CredibilityPanelProps) {
  return (
    <section className="gs-panel relative overflow-hidden flex flex-col lg:flex-row min-h-[300px]">
      {/* Left: Image */}
      {imageUrl && (
        <div className="relative lg:w-[30%] min-h-[180px] lg:min-h-0 overflow-hidden flex-shrink-0">
          <Image
            src={imageUrl}
            alt="Credibility visual"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 30vw"
          />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#090B12] to-transparent pointer-events-none" />
        </div>
      )}

      {/* Right: Content */}
      <div className="flex-1 flex flex-col justify-center p-8 lg:p-10">
        <div className="mb-4">
          <span className="section-label">Credibility</span>
        </div>

        <h2 className="text-[1.75rem] lg:text-[2rem] font-bold leading-[1.15] tracking-tight text-white mb-8">
          {highlightAccent(headline, accentWords ?? [])}
        </h2>

        {pillars && pillars.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <div key={pillar._key ?? i} className="flex flex-col items-center text-center gap-3">
                {/* Icon circle */}
                <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl"
                  style={{ background: 'rgba(201,162,74,0.1)', border: '1px solid rgba(201,162,74,0.25)' }}>
                  {pillar.icon ?? '◈'}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white leading-snug">{pillar.title}</p>
                  {(pillar.description || pillar.body) && (
                    <p className="text-xs text-[var(--text-secondary)] mt-1 leading-relaxed">
                      {pillar.description ?? pillar.body}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
