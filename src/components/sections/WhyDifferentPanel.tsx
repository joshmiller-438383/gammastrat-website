import Image from 'next/image'

// Sanity stores whyDrivers as string[] but we also support {label} objects
type WhyDriver = string | { _key?: string; label: string; icon?: string }

interface WhyDifferentPanelProps {
  headline?: string
  accentWords?: string[]
  drivers?: WhyDriver[]
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

function getDriverLabel(d: WhyDriver): string {
  return typeof d === 'string' ? d : d.label
}

const DEFAULT_DRIVERS: WhyDriver[] = [
  'Options Pricing',
  'Dealer Positioning',
  'Volatility Structure',
  'Probability Distribution',
]

export default function WhyDifferentPanel({
  headline = 'We Focus On What Moves Markets.',
  accentWords = ['Moves Markets.'],
  drivers = DEFAULT_DRIVERS,
  imageUrl,
}: WhyDifferentPanelProps) {
  return (
    <section className="gs-panel relative overflow-hidden flex flex-col lg:flex-row min-h-[320px]">
      {/* Left: Copy + drivers */}
      <div className="relative z-10 flex flex-col justify-center p-8 lg:p-10 xl:p-12 lg:w-[45%] flex-shrink-0">
        <div className="mb-4">
          <span className="section-label">Why Different</span>
        </div>

        <h2 className="text-[1.75rem] lg:text-[2rem] xl:text-[2.25rem] font-bold leading-[1.15] tracking-tight text-white mb-6">
          {highlightAccent(headline, accentWords ?? [])}
        </h2>

        {drivers && drivers.length > 0 && (
          <div className="flex flex-col gap-2.5">
            {drivers.map((driver, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-7 h-7 rounded flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(201,162,74,0.12)', border: '1px solid rgba(201,162,74,0.2)' }}>
                  <span className="text-xs text-[var(--gold)]">◈</span>
                </div>
                <span className="text-sm font-medium text-[var(--text-secondary)]">{getDriverLabel(driver)}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Right: Visual with PRICE / POSITIONING labels */}
      <div className="relative flex-1 min-h-[240px] lg:min-h-0 overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt="Why Different — options market forces visualization"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
        ) : (
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, rgba(201,162,74,0.06) 0%, rgba(201,162,74,0.02) 100%)' }} />
        )}
        {/* Left fade */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#090B12] to-transparent pointer-events-none" />

        {/* Blueprint labels: PRICE (top right) and POSITIONING (bottom right) */}
        <div className="absolute top-6 right-6 text-right">
          <div className="text-xs font-bold text-white/70 uppercase tracking-widest">PRICE</div>
          <div className="text-[10px] text-[var(--text-secondary)]">(The Effect)</div>
        </div>
        <div className="absolute bottom-6 right-6 text-right">
          <div className="text-xs font-bold text-[var(--gold)] uppercase tracking-widest">POSITIONING</div>
          <div className="text-[10px] text-[var(--text-secondary)]">(The Cause)</div>
        </div>
      </div>
    </section>
  )
}
