export const dynamic = "force-dynamic"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ShopifyCheckoutModal from '@/components/ShopifyCheckoutModal'
import { client } from '../../../sanity/client'
import Disclaimer from '@/components/sections/Disclaimer'

// ─── Shopify variant IDs ──────────────────────────────────────────────────────
const SHOPIFY_VARIANTS: Record<string, { variantId: string; planId: string }> = {
  Gamma:        { variantId: '48103900610801', planId: 'gamma' },
  Basic:        { variantId: '48103900446961', planId: 'basic' },
  'Free Trial': { variantId: '48103900414193', planId: 'free-trial' },
  Free:         { variantId: '48103900414193', planId: 'free-trial' },
}

// ─── Static plan definitions (spec-driven) ───────────────────────────────────
const PLANS = [
  {
    id: 'free',
    name: 'Free',
    subtitle: 'Experience the Edge',
    price: '$0',
    period: '',
    description: 'Get full access to a rotating selection of GammaStrat\'s most powerful reports — and see how positioning and volatility actually drive the market.',
    features: [
      'Full access to Daily Options Market Insights',
      'Full access to a rotating high-impact report (DOPR Overlap, Spreads, or VRP & Squeeze)',
      'Real-time positioning and volatility signals',
      'Sample trade frameworks and commentary',
      'Designed to show you how the edge works',
    ],
    ctaText: 'Start Free',
    microCopy: 'Includes full access to selected reports — no watered-down previews',
    highlight: false,
    badge: null,
  },
  {
    id: 'basic',
    name: 'Basic',
    subtitle: 'Understand the Market with Positioning & Volatility',
    price: '$49',
    period: '/mo',
    description: 'For traders who want consistent clarity on positioning, volatility, and market structure.',
    features: [
      'Daily Options Market Insights (SPX, QQQ, GLD)',
      'VIX & VVIX Term Structure Reports',
      'Core volatility structure + skew analysis',
      'Key levels, term structure, and positioning breakdowns',
      'Daily trader commentary',
      'Includes 7-day Edge Trial',
    ],
    ctaText: 'Start Your Edge Trial',
    microCopy: null,
    highlight: false,
    badge: null,
  },
  {
    id: 'gamma',
    name: 'Gamma',
    subtitle: 'Trade With Positioning, Not Guesswork',
    price: '$175',
    period: '/mo',
    description: 'Unlock the full GammaStrat system — combining positioning, spreads, volatility mispricing, and signal alignment.',
    features: [
      'Everything in Basic, plus:',
      'DOPR Overlap Analysis',
      'DOPR Spreads Analysis',
      'Recommended / Filtered Tickers',
      'Volatility Risk Premium & Squeeze Memorandum',
      'Bullish / bearish setup identification',
      'Probability-ranked trade structures',
      'Cross-framework signal alignment',
      'Volatility mispricing detection',
      'Full report library access',
      'Advanced analytical frameworks',
      'Includes 7-day Edge Trial',
    ],
    ctaText: 'Start Full Access Trial',
    microCopy: 'Most traders upgrade here once they see the difference',
    highlight: true,
    badge: 'Most Popular',
  },
]

// ─── Comparison table data ────────────────────────────────────────────────────
const COMPARISON_ROWS = [
  { feature: 'Daily Market Insights',       free: true,      basic: true,      gamma: true },
  { feature: 'VIX / VVIX Term Structure',   free: false,     basic: true,      gamma: true },
  { feature: 'Rotating Advanced Report',    free: true,      basic: false,     gamma: true },
  { feature: 'DOPR Overlap Analysis',       free: 'Limited', basic: false,     gamma: true },
  { feature: 'DOPR Spreads Analysis',       free: 'Limited', basic: false,     gamma: true },
  { feature: 'VRP & Squeeze',               free: 'Limited', basic: false,     gamma: true },
  { feature: 'Recommended Tickers',         free: false,     basic: false,     gamma: true },
  { feature: 'Full Report Library',         free: false,     basic: false,     gamma: true },
  { feature: 'Advanced Frameworks',         free: false,     basic: false,     gamma: true },
]

async function getHomepageDisclaimer() {
  try {
    const hp = await client.fetch(`*[_type == "homepage"][0]{ disclaimerText, disclaimerVisible }`)
    return hp
  } catch { return null }
}

// ─── Cell renderer ────────────────────────────────────────────────────────────
function Cell({ value, isGamma }: { value: boolean | string; isGamma?: boolean }) {
  if (value === true) {
    return (
      <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${isGamma ? 'bg-[#C9A24A]/20' : 'bg-white/8'}`}>
        <svg className={`w-3.5 h-3.5 ${isGamma ? 'text-[#C9A24A]' : 'text-white/60'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
    )
  }
  if (value === false) {
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/4">
        <svg className="w-3 h-3 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </span>
    )
  }
  // string like "Limited"
  return <span className="text-xs text-[#C9A24A]/70 font-medium">{value}</span>
}

export default async function PlansPage() {
  const hp = await getHomepageDisclaimer()

  return (
    <main style={{ background: '#05070B', minHeight: '100vh' }}>
      <Navbar />

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="pt-36 pb-16 sm:pt-40 sm:pb-20 text-center px-5">
        <div className="max-w-[760px] mx-auto">
          <p className="text-xs uppercase tracking-[0.22em] text-[#C9A24A] font-semibold mb-4">Plans & Pricing</p>
          <h1 className="text-4xl sm:text-5xl md:text-[52px] font-bold text-white leading-tight mb-5">
            Choose Your Level of{' '}
            <span className="text-[#C9A24A]">Edge</span>
          </h1>
          <p className="text-[#A7ADBB] text-base sm:text-lg max-w-[560px] mx-auto leading-relaxed mb-8">
            From core market insight to full positioning and volatility frameworks — access the reports that reveal what the market is really doing.
          </p>
          <a
            href="#pricing-cards"
            className="inline-block bg-[#C9A24A] text-black font-semibold text-sm px-7 py-3.5 rounded-lg hover:bg-[#D4AF5C] hover:scale-[1.02] transition-all duration-200 shadow-[0_0_20px_rgba(201,162,74,0.25)]"
          >
            Start Your 7-Day Edge Trial
          </a>
        </div>
      </section>

      {/* ── 2. PRICING CARDS ────────────────────────────────────────────────── */}
      <section id="pricing-cards" className="py-16 sm:py-20 px-5">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-start">
            {PLANS.map((plan) => {
              const shopify = SHOPIFY_VARIANTS[plan.name] || { variantId: undefined, planId: plan.id }
              const isGamma = plan.highlight

              return (
                <div
                  key={plan.id}
                  className={`relative flex flex-col rounded-[14px] border transition-all duration-300
                    ${isGamma
                      ? 'border-[#C9A24A]/50 bg-[#090B12] shadow-[0_0_40px_rgba(201,162,74,0.10)] scale-[1.03] md:scale-[1.05] z-10'
                      : 'border-white/8 bg-[#090B12] hover:border-white/15'
                    }`}
                  style={{ padding: '28px 30px 32px' }}
                >
                  {/* Gold glow overlay for Gamma */}
                  {isGamma && (
                    <div className="absolute inset-0 rounded-[14px] pointer-events-none"
                      style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(201,162,74,0.06) 0%, transparent 70%)' }}
                    />
                  )}

                  {/* Badge */}
                  {plan.badge && (
                    <div className="absolute -top-3.5 right-5">
                      <span className="bg-[#C9A24A] text-black text-[11px] font-bold px-3 py-1 rounded-full tracking-wide uppercase">
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  {/* 1. Plan name */}
                  <h2 className={`text-xl sm:text-2xl font-bold mb-1 ${isGamma ? 'text-[#C9A24A]' : 'text-white'}`}>
                    {plan.name}
                  </h2>

                  {/* 2. Subtitle */}
                  <p className="text-[13px] text-[#A7ADBB] leading-snug mb-4" style={{ minHeight: '2.5rem' }}>
                    {plan.subtitle}
                  </p>

                  {/* 3. Price */}
                  <div className="flex items-end gap-1 mb-4">
                    <span className="text-4xl sm:text-5xl font-bold text-white tracking-tight">{plan.price}</span>
                    {plan.period && <span className="text-[#A7ADBB] text-base mb-1.5">{plan.period}</span>}
                  </div>

                  {/* Divider */}
                  <div className={`w-full h-px mb-5 ${isGamma ? 'bg-[#C9A24A]/20' : 'bg-white/8'}`} />

                  {/* Description */}
                  <p className="text-[13px] text-[#A7ADBB] leading-relaxed mb-5">{plan.description}</p>

                  {/* 4. Feature list */}
                  <ul className="space-y-2.5 mb-7 flex-1">
                    {plan.features.map((f, i) => {
                      const isHeader = f.startsWith('Everything in')
                      return (
                        <li key={i} className={`flex items-start gap-2.5 text-[13px] leading-snug ${isHeader ? 'text-white font-semibold' : 'text-[#A7ADBB]'}`}>
                          {!isHeader && (
                            <span className={`flex-shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center
                              ${isGamma ? 'bg-[#C9A24A]/15' : 'bg-white/8'}`}>
                              <svg className={`w-2.5 h-2.5 ${isGamma ? 'text-[#C9A24A]' : 'text-white/50'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                          )}
                          {isHeader && (
                            <span className="flex-shrink-0 mt-0.5 w-4 h-4" />
                          )}
                          {f}
                        </li>
                      )
                    })}
                  </ul>

                  {/* 5. CTA button */}
                  <ShopifyCheckoutModal
                    planId={shopify.planId}
                    variantId={shopify.variantId}
                    ctaText={plan.ctaText}
                    highlight={isGamma}
                  />

                  {/* 6. Micro copy */}
                  {plan.microCopy && (
                    <p className="mt-3 text-center text-[11px] text-[#A7ADBB]/60 leading-snug">
                      {plan.microCopy}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 3. COMPARISON TABLE ─────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-5">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.22em] text-[#C9A24A] font-semibold mb-3">Compare Plans</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Compare Access</h2>
          </div>

          {/* Scrollable wrapper on mobile */}
          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full min-w-[560px] border-collapse">
              <thead>
                <tr>
                  <th className="text-left text-sm font-semibold text-[#A7ADBB] pb-4 pr-4 w-[40%]">Feature</th>
                  <th className="text-center text-sm font-semibold text-white pb-4 px-3 w-[20%]">Free</th>
                  <th className="text-center text-sm font-semibold text-white pb-4 px-3 w-[20%]">Basic</th>
                  <th className="text-center text-sm font-bold text-[#C9A24A] pb-4 px-3 w-[20%]">
                    Gamma ✦
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-t ${i % 2 === 0 ? 'bg-white/[0.015]' : ''}`}
                    style={{ borderColor: 'rgba(255,255,255,0.06)' }}
                  >
                    <td className="text-sm text-[#A7ADBB] py-3.5 pr-4">{row.feature}</td>
                    <td className="text-center py-3.5 px-3">
                      <Cell value={row.free} />
                    </td>
                    <td className="text-center py-3.5 px-3">
                      <Cell value={row.basic} />
                    </td>
                    <td className="text-center py-3.5 px-3">
                      <Cell value={row.gamma} isGamma />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 4. POSITIONING SECTION ──────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-5">
        <div className="max-w-[1200px] mx-auto">
          <div className="rounded-2xl border border-white/8 bg-[#090B12] p-8 sm:p-12 md:p-14 grid md:grid-cols-2 gap-10 items-center">
            {/* Left: copy */}
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#C9A24A] font-semibold mb-4">Why GammaStrat?</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-6">
                Most traders focus on price.<br />
                <span className="text-[#C9A24A]">Professionals focus on positioning.</span>
              </h2>
              <p className="text-[#A7ADBB] text-sm sm:text-base leading-relaxed mb-6">
                GammaStrat reveals what price alone cannot show you — so you can stop reacting to the market and start trading with it.
              </p>
              <ul className="space-y-3">
                {[
                  'Where dealers are positioned',
                  'Where volatility is mispriced',
                  'Where probabilities are in your favor',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24A] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: visual stat blocks */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Gamma Exposure', value: '+2.17B', sub: 'Bullish', color: '#C9A24A' },
                { label: 'Volatility Regime', value: 'Elevated', sub: 'Risk On', color: '#E8D5A3' },
                { label: 'IV Rank (SPX)', value: '68', sub: 'High', color: '#C9A24A' },
                { label: 'Positioning Edge', value: 'Active', sub: 'Full Access', color: '#E8D5A3' },
              ].map((stat, i) => (
                <div key={i} className="rounded-xl border border-white/8 bg-[#05070B] p-4 sm:p-5">
                  <p className="text-[11px] uppercase tracking-widest text-[#A7ADBB]/60 mb-2">{stat.label}</p>
                  <p className="text-xl sm:text-2xl font-bold" style={{ color: stat.color }}>{stat.value}</p>
                  <p className="text-[11px] text-[#A7ADBB]/50 mt-1">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. DECISION HELPER ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-5">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-5">
            {/* Start with Basic */}
            <div className="rounded-2xl border border-white/8 bg-[#090B12] p-8">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-5">
                <span className="text-lg">◈</span>
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#A7ADBB]/60 font-semibold mb-2">Not Sure Where to Start?</p>
              <h3 className="text-xl font-bold text-white mb-4">Start with Basic.</h3>
              <p className="text-[#A7ADBB] text-sm leading-relaxed">
                It gives you the full daily view of positioning and volatility — the foundation for understanding how the market is actually moving.
              </p>
            </div>

            {/* Upgrade to Gamma */}
            <div className="rounded-2xl border border-[#C9A24A]/25 bg-[#090B12] p-8 relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at 100% 0%, rgba(201,162,74,0.05) 0%, transparent 60%)' }}
              />
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#C9A24A]/10 flex items-center justify-center mb-5">
                  <span className="text-lg text-[#C9A24A]">◉</span>
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#C9A24A]/70 font-semibold mb-2">Ready for Full Edge?</p>
                <h3 className="text-xl font-bold text-white mb-4">Upgrade to Gamma.</h3>
                <p className="text-[#A7ADBB] text-sm leading-relaxed">
                  When you're ready for tradeable setups and full signal alignment — Gamma gives you the complete system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. TRIAL SECTION ────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-5">
        <div className="max-w-[1200px] mx-auto">
          <div
            className="rounded-2xl border border-[#C9A24A]/20 text-center py-16 sm:py-20 px-6 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #090B12 0%, #0D0F16 100%)' }}
          >
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(201,162,74,0.07) 0%, transparent 65%)' }}
            />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.22em] text-[#C9A24A] font-semibold mb-4">Risk-Free</p>
              <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-white mb-4 leading-tight">
                7-Day Edge Trial
              </h2>
              <p className="text-[#A7ADBB] text-base sm:text-lg max-w-[480px] mx-auto mb-2 leading-relaxed">
                Experience GammaStrat risk-free. See exactly how institutional options intelligence changes how you read and trade the market.
              </p>
              <p className="text-[#A7ADBB]/50 text-sm mb-10">Cancel anytime.</p>
              <a
                href="#pricing-cards"
                className="inline-block bg-[#C9A24A] text-black font-bold text-sm px-8 py-4 rounded-lg hover:bg-[#D4AF5C] hover:scale-[1.02] transition-all duration-200 shadow-[0_0_30px_rgba(201,162,74,0.3)]"
              >
                Start Your 7-Day Edge Trial
              </a>
            </div>
          </div>
        </div>
      </section>

      <Disclaimer
        text={hp?.disclaimerText}
        visible={hp?.disclaimerVisible}
      />
      <Footer />
    </main>
  )
}
