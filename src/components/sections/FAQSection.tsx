'use client'
import { useState } from 'react'

interface FAQItem {
  question: string
  answer: React.ReactNode
}

const DEFAULT_FAQS: FAQItem[] = [
  {
    question: 'What exactly is GammaStrat?',
    answer: (
      <p>
        GammaStrat is an institutional-grade options intelligence platform that analyzes gamma
        positioning, volatility structure, and probability distributions to identify where the
        market is likely to move — before price moves.
      </p>
    ),
  },
  {
    question: 'Who is this for?',
    answer: (
      <>
        <p className="mb-3">Serious traders:</p>
        <ul className="space-y-1.5">
          {['SPX / index options traders', 'Volatility traders', 'Premium sellers / spread traders', 'Traders who want positioning data, not just price charts'].map(item => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-[#C9A24A] flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    question: 'How is this different from typical trading tools?',
    answer: (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">
          <div className="rounded-lg bg-white/3 border border-white/6 p-4">
            <p className="text-xs uppercase tracking-widest text-white/40 mb-2">Most tools show</p>
            {['Price', 'Indicators', 'Lagging signals'].map(item => (
              <p key={item} className="text-sm text-white/60 py-0.5">— {item}</p>
            ))}
          </div>
          <div className="rounded-lg bg-[#C9A24A]/8 border border-[#C9A24A]/20 p-4">
            <p className="text-xs uppercase tracking-widest text-[#C9A24A]/70 mb-2">GammaStrat shows</p>
            {['Dealer positioning', 'Gamma exposure', 'Volatility mispricing', 'Probability edge'].map(item => (
              <p key={item} className="text-sm text-white/80 py-0.5">+ {item}</p>
            ))}
          </div>
        </div>
        <p className="text-white/60 text-sm mt-3">You see what drives price — not just price itself.</p>
      </>
    ),
  },
  {
    question: 'Do I need to trade options to use this?',
    answer: (
      <>
        <p className="mb-3">No — but you'll get the most value if you do.</p>
        <p className="mb-2">Futures and directional traders can still use:</p>
        <ul className="space-y-1.5 mb-3">
          {['Gamma levels', 'Volatility structure', 'Positioning data'].map(item => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-[#C9A24A] flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>To improve entries, exits, and bias.</p>
      </>
    ),
  },
  {
    question: 'How often are reports updated?',
    answer: (
      <>
        <p className="mb-3 text-[#C9A24A] font-medium">Daily.</p>
        <p className="mb-2">Each report reflects:</p>
        <ul className="space-y-1.5">
          {['Latest options positioning', 'Current volatility conditions', 'Updated probability rankings'].map(item => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-[#C9A24A] flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    question: 'What kind of edge does this give?',
    answer: (
      <>
        <p className="mb-2">GammaStrat helps you:</p>
        <ul className="space-y-1.5">
          {['Identify high-probability setups', 'Avoid crowded trades', 'Trade with positioning, not against it', 'Understand volatility regimes'].map(item => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-[#C9A24A] flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    question: 'Is this beginner-friendly?',
    answer: (
      <p>
        Yes — but it's built for serious traders. GammaStrat is designed for traders who want to
        understand positioning, volatility, and probability at a deeper level. That said, we provide
        clear guidance on how to interpret each report — including what matters, how to read the
        signals, and how to apply them in real trades. You don't need to be an expert in options
        theory to start — but you will think like one very quickly.
      </p>
    ),
  },
  {
    question: 'Can I see a sample before subscribing?',
    answer: <p>Yes — sample reports are available directly on the homepage.</p>,
  },
  {
    question: 'What markets does this cover?',
    answer: (
      <>
        <p className="mb-2">Primarily:</p>
        <ul className="space-y-1.5">
          {['SPX', 'QQQ', 'Major equities', 'Volatility products (VIX, VVIX)'].map(item => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-[#C9A24A] flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    question: 'How quickly can I start using it?',
    answer: (
      <>
        <p className="mb-3 text-[#C9A24A] font-medium">Immediately after subscribing.</p>
        <p className="mb-2">You'll get access to:</p>
        <ul className="space-y-1.5">
          {['Full report library', 'Daily updates', 'All analytics dashboards'].map(item => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-[#C9A24A] flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
]

function FAQItem({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      className={`rounded-xl border transition-all duration-200 cursor-pointer overflow-hidden
        ${isOpen
          ? 'bg-[#0F1218] border-[#C9A24A]/30 shadow-[0_0_20px_rgba(201,162,74,0.06)]'
          : 'bg-[#090B12] border-white/8 hover:border-white/15 hover:bg-[#0C0E15]'
        }`}
      onClick={onToggle}
    >
      {/* Question row */}
      <div className="flex items-center justify-between gap-4 px-5 sm:px-6 py-5">
        <h3 className={`text-sm sm:text-base font-medium leading-snug transition-colors duration-200
          ${isOpen ? 'text-[#C9A24A]' : 'text-white/90'}`}>
          {item.question}
        </h3>
        {/* Chevron */}
        <div className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-250
          ${isOpen ? 'border-[#C9A24A]/40 bg-[#C9A24A]/10' : 'border-white/15 bg-white/3'}`}>
          <svg
            className={`w-3 h-3 transition-transform duration-250 ${isOpen ? 'rotate-180 text-[#C9A24A]' : 'text-white/50'}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Answer — smooth height animation via max-height */}
      <div
        className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
      >
        <div className="px-5 sm:px-6 pb-5 text-sm text-[#A7ADBB] leading-relaxed space-y-2">
          {item.answer}
        </div>
      </div>
    </div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(prev => (prev === i ? null : i))

  return (
    <section
      id="faq"
      className="relative w-full py-20 sm:py-24"
      style={{ background: '#05070B' }}
    >
      {/* Decorative background: subtle gold gamma curve lines (desktop only) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block" aria-hidden>
        <svg
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[480px] opacity-[0.04]"
          viewBox="0 0 480 600" fill="none"
        >
          {/* Gamma distribution curves */}
          {[0, 30, 60, 90, 120].map((offset, i) => (
            <path
              key={i}
              d={`M 480 ${100 + offset} Q 320 ${200 + offset} 240 ${300 + offset} Q 160 ${400 + offset} 0 ${500 + offset}`}
              stroke="#C9A24A"
              strokeWidth="1.5"
              fill="none"
            />
          ))}
          {/* Signal dots */}
          {[240, 280, 320, 360].map((y, i) => (
            <circle key={i} cx={240 + i * 20} cy={y} r="2" fill="#C9A24A" />
          ))}
        </svg>
      </div>

      <div className="relative max-w-[900px] mx-auto px-5 sm:px-8">
        {/* Section header */}
        <div className="mb-12 sm:mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-[#C9A24A] font-medium mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Frequently Asked <span className="text-[#C9A24A]">Questions</span>
          </h2>
          <p className="mt-3 text-[#A7ADBB] text-base max-w-xl">
            Everything you need to know before you start trading with edge.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {DEFAULT_FAQS.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
