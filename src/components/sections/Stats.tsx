interface StatItem {
  value: string
  label: string
  sub?: string
}

interface StatsProps {
  headline?: string
  subheadline?: string
  items?: StatItem[]
}

const defaultStats: StatItem[] = [
  { value: '99.99%', label: 'Uptime',      sub: 'Continuous platform reliability' },
  { value: '0.2s',   label: 'Order speed', sub: 'Lightning-fast signal execution' },
  { value: '1.2M+',  label: 'Volume',      sub: 'Contracts analyzed every day' },
  { value: '4,000+', label: 'Coverage',    sub: 'Equities and ETFs monitored' },
]

export default function Stats({
  headline = 'Performance you can trust.',
  subheadline = 'Institutional-grade speed, uptime, and coverage for confident, data-driven trading decisions.',
  items,
}: StatsProps) {
  const stats = items && items.length > 0 ? items : defaultStats

  return (
    <section className="py-24 bg-[#0A0C0F]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{headline}</h2>
        <p className="text-white/50 text-base mb-16 max-w-xl mx-auto">
          {subheadline}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-left">
              <p className="text-4xl md:text-5xl font-bold text-white mb-1 tracking-tight">{s.value}</p>
              <p className="text-sm font-semibold text-white/80 mb-1">{s.label}</p>
              {s.sub && <p className="text-xs text-white/40 leading-relaxed">{s.sub}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
