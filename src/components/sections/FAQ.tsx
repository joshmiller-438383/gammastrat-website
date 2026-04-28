'use client'
import { useState } from 'react'

interface FAQItem {
  _id?: string
  question?: string
  answer?: string
  q?: string
  a?: string
}

interface FAQProps {
  items?: FAQItem[]
}

const defaultFaqs = [
  { q: 'How do I start my free trial?', a: 'Simply click "Start Free Trial", create your account, and access all features immediately. No credit card required for the first 14 days.' },
  { q: 'Is my payment data protected?', a: 'All transactions use bank-level encryption and we never store your payment details. All payments are processed securely through Stripe.' },
  { q: 'Is there support for new traders?', a: 'Absolutely. We offer live chat support, an extensive academy with beginner courses, and a community forum where experienced traders share insights.' },
  { q: 'Which plans can I choose from?', a: 'We offer Starter (free), Pro ($49/mth), and Elite ($149/mth) plans. All paid plans include a 14-day free trial.' },
  { q: 'Can I cancel my plan anytime?', a: 'Yes, you can cancel at any time with no cancellation fees. Your access continues until the end of your current billing period.' },
  { q: 'How do I unlock premium tools?', a: 'Premium tools are available on Pro and Elite plans. Upgrade anytime from your account dashboard to instantly unlock advanced analytics.' },
]

export default function FAQ({ items }: FAQProps) {
  const [open, setOpen] = useState<number | null>(null)

  const faqs = items && items.length > 0
    ? items.map(item => ({ q: item.question || item.q || '', a: item.answer || item.a || '' }))
    : defaultFaqs

  return (
    <section className="py-24 bg-[#0D0F12]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Frequently asked questions</h2>
          <p className="text-white/50">Quick answers to your top platform questions.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-white/8 rounded-xl bg-[#141720] hover:border-white/15 transition-all">
              <button className="w-full text-left p-5 flex items-start gap-3" onClick={() => setOpen(open === i ? null : i)}>
                <div className="w-7 h-7 rounded-full bg-[#2DD4BF]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-[#2DD4BF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white leading-snug">{faq.q}</p>
                  {open === i && <p className="text-sm text-white/55 mt-2 leading-relaxed">{faq.a}</p>}
                </div>
                <svg className={`w-4 h-4 text-white/30 flex-shrink-0 mt-0.5 transition-transform ${open === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            {['J', 'M', 'S'].map((l, i) => (
              <div key={i} className={`w-9 h-9 rounded-full bg-[#C9A227]/20 border-2 border-[#0D0F12] flex items-center justify-center ${i > 0 ? '-ml-3' : ''}`}>
                <span className="text-[#C9A227] text-xs font-bold">{l}</span>
              </div>
            ))}
          </div>
          <p className="text-sm font-semibold text-white mb-1">Still have questions?</p>
          <p className="text-sm text-white/40 mb-5">Reach out to our support team.</p>
          <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold bg-[#2DD4BF] hover:bg-[#22b8a6] text-[#0D0F12] px-6 py-2.5 rounded-md transition-all">Support</a>
        </div>
      </div>
    </section>
  )
}
