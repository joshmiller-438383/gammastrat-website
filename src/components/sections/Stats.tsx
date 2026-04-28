const stats = [
  { value: '99.99%', label: 'Uptime', sub: 'Continuous platform reliability' },
  { value: '0.2s', label: 'Order speed', sub: 'Lightning-fast signal execution' },
  { value: '1.2M+', label: 'Volume', sub: 'Contracts analyzed every day' },
  { value: '4,000+', label: 'Coverage', sub: 'Equities and ETFs monitored' },
]

export default function Stats() {
  return (
    <section className="py-24 bg-[#0A0C0F]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Performance you can trust.</h2>
        <p className="text-white/50 text-base mb-16 max-w-xl mx-auto">
          Institutional-grade speed, uptime, and coverage for confident, data-driven trading decisions.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-left">
              <p className="text-4xl md:text-5xl font-bold text-white mb-1 tracking-tight">{s.value}</p>
              <p className="text-sm font-semibold text-white/80 mb-1">{s.label}</p>
              <p className="text-xs text-white/40 leading-relaxed">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
