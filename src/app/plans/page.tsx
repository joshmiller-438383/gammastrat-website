export const dynamic = "force-dynamic"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LogoStrip from '@/components/sections/LogoStrip'
import Contact from '@/components/sections/Contact'
import Link from 'next/link'
import { client, queries } from '../../../sanity/client'

interface Plan {
  _id: string
  name: string
  price: string
  period: string
  billing: string
  features: string[]
  highlight: boolean
  ctaText: string
  shopifyVariantId?: string
  order: number
}

const fallbackPlans: Plan[] = [
  { _id: 'plan-starter', name: 'Starter', price: '$0', period: '/mth', billing: 'Free forever.', highlight: false, ctaText: 'Get started free', order: 1, features: ['Basic options scanner', '5 watchlist symbols', 'Daily market summary', 'Community access', 'Mobile app access'] },
  { _id: 'plan-pro', name: 'Pro', price: '$49', period: '/mth', billing: 'Billed annually. $59 month-to-month.', highlight: true, ctaText: 'Start free trial', order: 2, features: ['Everything in Starter', 'Real-time gamma exposure data', 'Unlimited watchlist symbols', 'AI-powered trade alerts', 'Options flow scanner', 'Dark pool activity feed', 'Priority email support'] },
  { _id: 'plan-elite', name: 'Elite', price: '$149', period: '/mth', billing: 'Billed annually. $179 month-to-month.', highlight: false, ctaText: 'Contact sales', order: 3, features: ['Everything in Pro', 'Institutional-grade data feeds', 'Custom alert configurations', 'API access (10k calls/day)', '1-on-1 onboarding session', 'Dedicated account manager', 'White-glove support 24/7'] },
]

const planIcons: Record<string, string> = { Starter: '⚡', Pro: '◈', Elite: '◉' }

async function getPlans(): Promise<Plan[]> {
  try {
    const plans = await client.fetch<Plan[]>(queries.plans)
    return plans && plans.length > 0 ? plans : fallbackPlans
  } catch { return fallbackPlans }
}

export default async function PlansPage() {
  const plans = await getPlans()
  return (
    <main>
      <Navbar />
      <section className="pt-32 pb-20 bg-[#0D0F12]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold text-[#2DD4BF] uppercase tracking-widest mb-3">Pricing</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-xl leading-tight">Simple pricing. Free trial. Get started.</h1>
          <p className="text-white/50 text-base max-w-md leading-relaxed">Choose the plan that fits your trading style. Start free, upgrade anytime, cancel whenever.</p>
        </div>
      </section>
      <section className="pb-24 bg-[#0D0F12]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
            {plans.map((plan) => (
              <div key={plan._id} className={`relative rounded-2xl border p-8 flex flex-col transition-all duration-300 hover:border-white/20 ${plan.highlight ? 'border-[#2DD4BF]/40 bg-[#141720] shadow-[0_0_40px_rgba(45,212,191,0.08)]' : 'border-white/8 bg-[#141720]'}`}>
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-[#2DD4BF] text-[#0D0F12] text-xs font-bold px-3 py-1 rounded-full">Most Popular</span>
                  </div>
                )}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-5 text-lg ${plan.highlight ? 'bg-[#2DD4BF]/15' : 'bg-white/5'}`}>
                  <span className={plan.highlight ? 'text-[#2DD4BF]' : 'text-white/40'}>{planIcons[plan.name] || '◆'}</span>
                </div>
                <p className="text-sm font-semibold text-white/60 mb-2">{plan.name} plan</p>
                <div className="flex items-end gap-0.5 mb-1">
                  <span className="text-5xl font-bold text-white tracking-tight">{plan.price}</span>
                  <span className="text-lg text-white/50 mb-1">{plan.period}</span>
                </div>
                <p className="text-xs text-white/35 mb-7">{plan.billing}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {(plan.features || []).map((f, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-white/70">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.highlight ? 'bg-[#2DD4BF]/20' : 'bg-white/10'}`}>
                        <svg className={`w-2.5 h-2.5 ${plan.highlight ? 'text-[#2DD4BF]' : 'text-white/50'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href={plan.shopifyVariantId ? `https://checkout.gammastrat.com/cart/${plan.shopifyVariantId}:1` : '/contact'} className={`w-full text-center py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${plan.highlight ? 'bg-[#2DD4BF] hover:bg-[#22b8a6] text-[#0D0F12]' : 'bg-white/8 hover:bg-white/15 text-white border border-white/10'}`}>
                  {plan.ctaText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <LogoStrip />
      <Contact />
      <Footer />
    </main>
  )
}
