'use client'
import { useState } from 'react'

interface TestimonialItem {
  _id?: string
  quote: string
  body: string
  name: string
  title: string
  stars: number
}

interface TestimonialProps {
  items?: TestimonialItem[]
}

const defaultTestimonials: TestimonialItem[] = [
  { quote: 'Objective data drives my trading edge.', body: 'AI-powered analytics help me identify high-probability trades and act with precision. The platform insights cut through market noise, letting me focus on actionable data and make confident decisions.', name: 'Jordan Avery', title: 'Options Trader, Chicago', stars: 5 },
  { quote: 'The gamma exposure data is unlike anything else.', body: 'GammaStrat gives me a real edge on expiration days. The dealer positioning data alone has transformed how I approach 0DTE trades. Absolutely essential for serious options traders.', name: 'Marcus Chen', title: 'Prop Trader, New York', stars: 5 },
  { quote: 'Finally, institutional-grade tools for retail traders.', body: 'I used to rely on expensive Bloomberg terminals. GammaStrat gives me the same quality data at a fraction of the cost. The real-time alerts have saved me from several bad trades.', name: 'Sarah Mitchell', title: 'Independent Investor', stars: 5 },
]

export default function Testimonial({ items }: TestimonialProps) {
  const testimonials = items && items.length > 0 ? items : defaultTestimonials
  const [active, setActive] = useState(0)
  const t = testimonials[active] || testimonials[0]

  return (
    <section className="py-24 bg-[#0D0F12]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text */}
          <div className="flex-1 max-w-lg">
            <div className="flex mb-4">
              {Array.from({ length: t.stars || 5 }).map((_, i) => (
                <span key={i} className="text-[#C9A227] text-lg">★</span>
              ))}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">
              &ldquo;{t.quote}&rdquo;
            </h3>
            <p className="text-white/60 text-base leading-relaxed mb-6">{t.body}</p>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-[#C9A227]/20 flex items-center justify-center">
                <span className="text-[#C9A227] font-bold text-sm">{t.name[0]}</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">→ {t.name}</p>
                <p className="text-xs text-white/40">{t.title}</p>
              </div>
            </div>
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === active ? 'bg-[#C9A227] w-6' : 'bg-white/20'}`}
                />
              ))}
            </div>
          </div>
          {/* Image */}
          <div className="flex-1 w-full lg:max-w-lg">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80"
                alt="Trader at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F12]/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
