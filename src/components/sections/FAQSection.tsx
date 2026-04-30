'use client'
import { useState } from 'react'

interface SanityFAQItem {
  _key: string
  question: string
  answer: string
}

interface FAQSectionProps {
  headline?: string
  subtitle?: string
  items?: SanityFAQItem[]
}

// Hardcoded fallback FAQ items (used when Sanity has no data yet)
const DEFAULT_FAQS: SanityFAQItem[] = [
  {
    _key: 'faq1',
    question: 'What exactly is GammaStrat?',
    answer: 'GammaStrat is an institutional-grade options intelligence platform that analyzes gamma positioning, volatility structure, and probability distributions to identify where the market is likely to move — before price moves.',
  },
  {
    _key: 'faq2',
    question: 'Who is this for?',
    answer: 'Serious traders:\n\n• SPX / index options traders\n• Volatility traders\n• Premium sellers / spread traders\n• Traders who want positioning data, not just price charts',
  },
  {
    _key: 'faq3',
    question: 'How is this different from typical trading tools?',
    answer: 'Most tools show price, indicators, and lagging signals.\n\nGammaStrat shows dealer positioning, gamma exposure, volatility mispricing, and probability edge.\n\nYou see what drives price — not just price itself.',
  },
  {
    _key: 'faq4',
    question: 'Do I need to trade options to use this?',
    answer: 'No — but you\'ll get the most value if you do.\n\nFutures and directional traders can still use gamma levels, volatility structure, and positioning data to improve entries, exits, and bias.',
  },
  {
    _key: 'faq5',
    question: 'How often are reports updated?',
    answer: 'Daily.\n\nEach report reflects:\n• Latest options positioning\n• Current volatility conditions\n• Updated probability rankings',
  },
  {
    _key: 'faq6',
    question: 'What kind of edge does this give?',
    answer: 'GammaStrat helps you:\n• Identify high-probability setups\n• Avoid crowded trades\n• Trade with positioning, not against it\n• Understand volatility regimes',
  },
  {
    _key: 'faq7',
    question: 'Is this beginner-friendly?',
    answer: 'Yes — but it\'s built for serious traders. GammaStrat is designed for traders who want to understand positioning, volatility, and probability at a deeper level.\n\nThat said, we provide clear guidance on how to interpret each report — including what matters, how to read the signals, and how to apply them in real trades. You don\'t need to be an expert in options theory to start — but you will think like one very quickly.',
  },
  {
    _key: 'faq8',
    question: 'Can I see a sample before subscribing?',
    answer: 'Yes — sample reports are available directly on the homepage.',
  },
  {
    _key: 'faq9',
    question: 'What markets does this cover?',
    answer: 'Primarily:\n• SPX\n• QQQ\n• Major equities\n• Volatility products (VIX, VVIX)',
  },
  {
    _key: 'faq10',
    question: 'How quickly can I start using it?',
    answer: 'Immediately after subscribing.\n\nYou\'ll get access to:\n• Full report library\n• Daily updates\n• All analytics dashboards',
  },
]

// Render plain text answer with bullet points and line breaks
function renderAnswer(text: string) {
  const lines = text.split('\n')
  return (
    <div className="space-y-2">
      {lines.map((line, i) => {
        if (!line.trim()) return null
        if (line.startsWith('•') || line.startsWith('-')) {
          return (
            <div key={i} className="flex items-start gap-2">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-[#C9A24A] flex-shrink-0" />
              <span>{line.replace(/^[•\-]\s*/, '')}</span>
            </div>
          )
        }
        return <p key={i}>{line}</p>
      })}
    </div>
  )
}

function FAQItem({ item, isOpen, onToggle }: { item: SanityFAQItem; isOpen: boolean; onToggle: () => void }) {
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
        <div className="px-5 sm:px-6 pb-5 text-sm text-[#A7ADBB] leading-relaxed">
          {renderAnswer(item.answer)}
        </div>
      </div>
    </div>
  )
}

export default function FAQSection({ headline, subtitle, items }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const toggle = (i: number) => setOpenIndex(prev => (prev === i ? null : i))

  const faqs = (items && items.length > 0) ? items : DEFAULT_FAQS
  const title = headline || 'Frequently Asked Questions'
  const sub = subtitle || 'Everything you need to know before you start trading with edge.'

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
          {[0, 30, 60, 90, 120].map((offset, i) => (
            <path
              key={i}
              d={`M 480 ${100 + offset} Q 320 ${200 + offset} 240 ${300 + offset} Q 160 ${400 + offset} 0 ${500 + offset}`}
              stroke="#C9A24A"
              strokeWidth="1.5"
              fill="none"
            />
          ))}
          {[240, 280, 320, 360].map((y, i) => (
            <circle key={i} cx={240 + i * 20} cy={y} r="2" fill="#C9A24A" />
          ))}
        </svg>
      </div>

      <div className="relative max-w-[900px] mx-auto px-5 sm:px-8">
        {/* Section header */}
        <div className="mb-12 sm:mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-[#C9A24A] font-medium mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            {title.includes('Questions') ? (
              <>
                {title.replace('Questions', '').trim()}{' '}
                <span className="text-[#C9A24A]">Questions</span>
              </>
            ) : (
              title
            )}
          </h2>
          <p className="mt-3 text-[#A7ADBB] text-base max-w-xl">{sub}</p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((item, i) => (
            <FAQItem
              key={item._key || i}
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
