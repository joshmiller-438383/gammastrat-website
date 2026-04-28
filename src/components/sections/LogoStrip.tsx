const logos = [
  'StackEd Lab', 'Magnolia', 'Powersurge', 'Warpspeed', 'Leapyear', 'EasyTrade',
  'StackEd Lab', 'Magnolia', 'Powersurge', 'Warpspeed', 'Leapyear', 'EasyTrade',
]

export default function LogoStrip() {
  return (
    <section className="py-10 border-y border-white/5 bg-[#0D0F12]">
      <p className="text-center text-xs text-white/30 uppercase tracking-widest mb-6">
        Trusted by 4,000+ companies
      </p>
      <div className="ticker-wrap">
        <div className="ticker-inner">
          {logos.concat(logos).map((name, i) => (
            <div
              key={i}
              className="inline-flex items-center mx-8 text-white/30 hover:text-white/60 transition-colors cursor-default"
            >
              <div className="w-5 h-5 rounded bg-white/10 mr-2 flex items-center justify-center">
                <span className="text-[8px] font-bold text-white/40">{name[0]}</span>
              </div>
              <span className="text-sm font-medium whitespace-nowrap">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
