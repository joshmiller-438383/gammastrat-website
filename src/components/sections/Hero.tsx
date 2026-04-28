'use client'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-[#0D0F12]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D0F12] via-[#0D0F12] to-[#0a1628] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C9A227]/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20">
        {/* Top row: text left, image right */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10">
          {/* Left: Text */}
          <div className="flex-1 max-w-xl">
            <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">
              Trusted by 2.5M+ traders
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Data-driven options.<br />
              <span className="text-white">Smarter trades.</span>
            </h1>
            <p className="text-base text-white/60 leading-relaxed mb-8 max-w-md">
              Powering confident decisions with AI analytics for active options traders and investors.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="#demo"
                className="flex items-center gap-2 text-sm text-white/70 border border-white/20 hover:border-white/40 px-4 py-2.5 rounded-md transition-all"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Demo
              </Link>
              <Link
                href="/plans"
                className="flex items-center gap-2 text-sm font-semibold bg-[#2DD4BF] hover:bg-[#22b8a6] text-[#0D0F12] px-5 py-2.5 rounded-md transition-all duration-200"
              >
                Start free trial
              </Link>
            </div>
          </div>

          {/* Right: Hero image */}
          <div className="flex-1 w-full lg:max-w-2xl">
            <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#141720] aspect-video">
              <img
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80"
                alt="Trading analytics dashboard"
                className="w-full h-full object-cover opacity-80"
              />
              {/* Video overlay controls */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer">
                  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              {/* Bottom bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex items-center gap-3">
                <div className="flex items-center gap-2 text-xs text-white/60">
                  <span>⏮</span>
                  <span>▶</span>
                  <span>⏭</span>
                  <div className="flex-1 h-0.5 bg-white/20 rounded-full mx-2">
                    <div className="w-1/3 h-full bg-[#C9A227] rounded-full" />
                  </div>
                  <span>HD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
