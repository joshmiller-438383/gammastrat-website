const STATS = [
  { value: 24, label: 'DAILY REPORTS' },
  { value: 4, label: 'INTERACTIVE TERMINALS' },
  { value: 80, prefix: '~', label: 'TICKERS COVERED' },
  { value: 14, suffix: ' DAYS', label: 'FREE TRIAL' },
] as const

function statDisplay(stat: (typeof STATS)[number]) {
  const prefix = 'prefix' in stat ? stat.prefix : ''
  const suffix = 'suffix' in stat ? stat.suffix : ''
  return `${prefix}${stat.value}${suffix}`
}

export default function MarketingStatsBand() {
  return (
    <div className="statsband" aria-label="GammaStrat at a glance">
      <div className="row">
        {STATS.map((stat) => (
          <div className="stat" key={stat.label}>
            <div
              className="sv"
              data-count={stat.value}
              data-prefix={'prefix' in stat ? stat.prefix : undefined}
              data-suffix={'suffix' in stat ? stat.suffix : undefined}
            >
              {statDisplay(stat)}
            </div>
            <div className="sk">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
