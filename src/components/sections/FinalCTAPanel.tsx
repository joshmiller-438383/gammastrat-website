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
  accentWords = ['Stay Ahead.'],
  subheadline = 'Institutional intelligence. Delivered daily.',
  buttonText = 'Start Your Edge',
  buttonUrl = '/subscribe',
  imageUrl,
}: FinalCTAPanelProps) {
  return (
    <section className="gs-panel relative overflow-hidden flex flex-col lg:flex-row min-h-[280px]">
      {/* Left: Copy */}
      <div className="relative z-10 flex flex-col justify-center p-8 lg:p-10 xl:p-12 lg:w-[55%] flex-shrink-0">
        <h2 className="text-[1.75rem] lg:text-[2rem] xl:text-[2.5rem] font-bold leading-[1.15] tracking-tight text-white mb-4">
          {highlightAccent(headline, accentWords ?? [])}
        </h2>

        {subheadline && (
          <p className="text-sm lg:text-base text-[var(--text-secondary)] leading-relaxed mb-8">
            {subheadline}
          </p>
        )}

        {buttonText && buttonUrl && (
          <Link href={buttonUrl} className="btn-gold text-xs font-bold uppercase tracking-widest px-6 py-3.5 self-start">
            {buttonText}
          </Link>
        )}
      </div>

      {/* Right: Visual — GammaStrat logo / orbit graphic */}
      <div className="relative flex-1 min-h-[200px] lg:min-h-0 overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt="GammaStrat — gain the edge"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center"
            style={{ background: 'radial-gradient(circle at center, rgba(201,162,74,0.15) 0%, transparent 70%)' }}>
            <div className="w-24 h-24 rounded-full border-2 border-[var(--gold-border)] flex items-center justify-center">
              <span className="text-[var(--gold)] text-3xl font-bold">GS</span>
            </div>
          </div>
        )}
        {/* Left fade */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#090B12] to-transparent pointer-events-none" />
      </div>
    </section>
  )
}
