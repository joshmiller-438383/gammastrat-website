const features = [
  {
    tag: 'Smart Alerts',
    title: 'Instant alerts. Automate analytics.',
    description: 'Real-time notifications powered by AI that identify high-probability setups before they happen.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80',
  },
  {
    tag: 'Edge Tools',
    title: 'Scanners. Calculators. Edge revealed.',
    description: 'Professional-grade tools that surface actionable data and quantify your trading edge with precision.',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&q=80',
  },
  {
    tag: 'Education',
    title: 'Courses for every trader level.',
    description: 'From options basics to advanced gamma strategies — structured learning paths for every skill level.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80',
  },
]

export default function Features() {
  return (
    <section id="solutions" className="py-24 bg-[#0D0F12]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs font-semibold text-[#2DD4BF] uppercase tracking-widest mb-3">Solutions</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Data-driven options. Smarter trades.
        </h2>
        <p className="text-white/50 text-base mb-12 max-w-xl">
          AI insights for high-probability trades. Make informed decisions and outperform with confidence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="group relative rounded-xl overflow-hidden border border-white/8 bg-[#141720] hover:border-white/20 transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={f.image}
                  alt={f.title}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              {/* Content */}
              <div className="p-5">
                <p className="text-xs font-semibold text-[#2DD4BF] uppercase tracking-wider mb-2">{f.tag}</p>
                <h3 className="text-base font-semibold text-white mb-2 leading-snug">{f.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
