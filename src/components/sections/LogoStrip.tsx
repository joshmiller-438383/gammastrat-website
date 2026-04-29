interface SanityImage {
  asset?: { url: string }
}

interface LogoItem {
  name: string
  logo?: SanityImage
}

const defaultLogos: LogoItem[] = [
  { name: 'StackEd Lab' },
  { name: 'Magnolia' },
  { name: 'Powersurge' },
  { name: 'Warpspeed' },
  { name: 'Leapyear' },
  { name: 'EasyTrade' },
]

interface LogoStripProps {
  label?: string
  items?: LogoItem[]
}

export default function LogoStrip({
  label = 'Trusted by 4,000+ companies',
  items,
}: LogoStripProps) {
  const logos = items && items.length > 0 ? items : defaultLogos
  const ticker = [...logos, ...logos, ...logos, ...logos]

  return (
    <section className="py-10 border-y border-white/5 bg-[#0D0F12]">
      <p className="text-center text-xs text-white/30 uppercase tracking-widest mb-6">
        {label}
      </p>
      <div className="ticker-wrap">
        <div className="ticker-inner">
          {ticker.map((item, i) => (
            <div
              key={i}
              className="inline-flex items-center mx-8 text-white/30 hover:text-white/60 transition-colors cursor-default"
            >
              {item.logo?.asset?.url ? (
                <img
                  src={item.logo.asset.url}
                  alt={item.name}
                  className="h-6 w-auto object-contain opacity-40 hover:opacity-70 transition-opacity mr-2"
                />
              ) : (
                <>
                  <div className="w-5 h-5 rounded bg-white/10 mr-2 flex items-center justify-center">
                    <span className="text-[8px] font-bold text-white/40">{item.name[0]}</span>
                  </div>
                  <span className="text-sm font-medium whitespace-nowrap">{item.name}</span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
