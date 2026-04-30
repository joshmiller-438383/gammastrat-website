export const dynamic = "force-dynamic"
import Footer from '@/components/Footer'
import ShopifyCheckoutModal from '@/components/ShopifyCheckoutModal'
import { client, queries } from '../../../sanity/client'
import Disclaimer from '@/components/sections/Disclaimer'

// ─── Shopify variant IDs ──────────────────────────────────────────────────────
const SHOPIFY_VARIANTS: Record<string, { variantId: string; planId: string }> = {
  gamma:      { variantId: '48103900610801', planId: 'gamma' },
  basic:      { variantId: '48103900446961', planId: 'basic' },
  free:       { variantId: '48103900414193', planId: 'free-trial' },
  'free-trial': { variantId: '48103900414193', planId: 'free-trial' },
}

// ─── Hardcoded fallbacks ──────────────────────────────────────────────────────
const DEFAULT_PLANS = [
  {
    planId: 'free',
    name: 'Free',
    subtitle: 'Experience the Edge',
    price: '$0',
    period: '',
    description: "Get full access to a rotating selection of GammaStrat's most powerful reports — and see how positioning and volatility actually drive the market.",
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
    planId: 'basic',
    name: 'Basic',
    subtitle: 'Understand the Market with Positioning & Volatility',
    price: '$84',
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
    planId: 'gamma',
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

const DEFAULT_TABLE_ROWS = [
  { feature: 'Daily Market Insights',       freeValue: 'true',     basicValue: 'true',    gammaValue: 'true' },
  { feature: 'VIX / VVIX Term Structure',   freeValue: 'false',    basicValue: 'true',    gammaValue: 'true' },
  { feature: 'Rotating Advanced Report',    freeValue: 'true',     basicValue: 'false',   gammaValue: 'true' },
  { feature: 'DOPR Overlap Analysis',       freeValue: 'Limited',  basicValue: 'false',   gammaValue: 'true' },
  { feature: 'DOPR Spreads Analysis',       freeValue: 'Limited',  basicValue: 'false',   gammaValue: 'true' },
  { feature: 'VRP & Squeeze',               freeValue: 'Limited',  basicValue: 'false',   gammaValue: 'true' },
  { feature: 'Recommended Tickers',         freeValue: 'false',    basicValue: 'false',   gammaValue: 'true' },
  { feature: 'Full Report Library',         freeValue: 'false',    basicValue: 'false',   gammaValue: 'true' },
  { feature: 'Advanced Frameworks',         freeValue: 'false',    basicValue: 'false',   gammaValue: 'true' },
]

const DEFAULT_STATS = [
  { label: 'Gamma Exposure',    value: '+2.17B',   sub: 'Bullish' },
  { label: 'Volatility Regime', value: 'Elevated', sub: 'Risk On' },
  { label: 'IV Rank (SPX)',     value: '68',       sub: 'High' },
  { label: 'Positioning Edge',  value: 'Active',   sub: 'Full Access' },
]

const DEFAULT_BULLETS = [
  'Where dealers are positioned',
  'Where volatility is mispriced',
  'Where probabilities are in your favor',
]

// ─── Cell renderer ────────────────────────────────────────────────────────────
function Cell({ value, isGamma }: { value: string; isGamma?: boolean }) {
  if (value === 'true') {
    return (
      <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${isGamma ? 'bg-[#C9A24A]/20' : 'bg-white/8'}`}>
        <svg className={`w-3.5 h-3.5 ${isGamma ? 'text-[#C9A24A]' : 'text-white/60'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
    )
  }
  if (value === 'false') {
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/4">
        <svg className="w-3 h-3 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </span>
    )
  }
  return <span className="text-xs text-[#C9A24A]/70 font-medium">{value}</span>
}

export default async function PlansPage() {
  const [pp, hp] = await Promise.all([
    client.fetch(queries.plansPage, {}, { cache: 'no-store' }).catch(() => null),
    client.fetch(`*[_type == "homepage"][0]{ disclaimerText, disclaimerVisible }`, {}, { cache: 'no-store' }).catch(() => null),
  ])

  // DEBUG: log what Sanity returned
  console.log('[plans-page] pp:', JSON.stringify({ pp_null: pp === null, cards: pp?.pricingCards?.map((c: {planId?: string; ctaText?: string}) => ({ planId: c.planId, ctaText: c.ctaText })) }))

  // Merge Sanity data with fallbacks
  const hero = {
    badge:       pp?.heroBadge       ?? 'Plans & Pricing',
    headline:    pp?.heroHeadline    ?? 'Choose Your Level of Edge',
    accentWord:  pp?.heroAccentWord  ?? 'Edge',
    subheadline: pp?.heroSubheadline ?? 'From core market insight to full positioning and volatility frameworks — access the reports that reveal what the market is really doing.',
    ctaText:     pp?.heroCtaText     ?? 'Start Your 7-Day Edge Trial',
  }

  const plans = (pp?.pricingCards?.length ? pp.pricingCards : DEFAULT_PLANS) as typeof DEFAULT_PLANS

  const tableHeadline = pp?.tableHeadline ?? 'Compare Access'
  const tableBadge    = pp?.tableBadge    ?? 'Compare Plans'
  const tableRows     = (pp?.tableRows?.length ? pp.tableRows : DEFAULT_TABLE_ROWS) as typeof DEFAULT_TABLE_ROWS

  const pos = {
    badge:      pp?.positioningBadge      ?? 'Why GammaStrat?',
    headline:   pp?.positioningHeadline   ?? 'Most traders focus on price.',
    headline2:  pp?.positioningHeadline2  ?? 'Professionals focus on positioning.',
    body:       pp?.positioningBody       ?? 'GammaStrat reveals what price alone cannot show you — so you can stop reacting to the market and start trading with it.',
    bullets:    (pp?.positioningBullets?.length ? pp.positioningBullets : DEFAULT_BULLETS) as string[],
    stats:      (pp?.positioningStats?.length   ? pp.positioningStats   : DEFAULT_STATS)   as typeof DEFAULT_STATS,
  }

  const dec = {
    c1Badge:    pp?.decisionCard1Badge    ?? 'Not Sure Where to Start?',
    c1Headline: pp?.decisionCard1Headline ?? 'Start with Basic.',
    c1Body:     pp?.decisionCard1Body     ?? 'It gives you the full daily view of positioning and volatility — the foundation for understanding how the market is actually moving.',
    c2Badge:    pp?.decisionCard2Badge    ?? 'Ready for Full Edge?',
    c2Headline: pp?.decisionCard2Headline ?? 'Upgrade to Gamma.',
    c2Body:     pp?.decisionCard2Body     ?? "When you're ready for tradeable setups and full signal alignment — Gamma gives you the complete system.",
  }

  const trial = {
    badge:      pp?.trialBadge      ?? 'Risk-Free',
    headline:   pp?.trialHeadline   ?? '7-Day Edge Trial',
    body:       pp?.trialBody       ?? 'Experience GammaStrat risk-free. See exactly how institutional options intelligence changes how you read and trade the market.',
    cancelText: pp?.trialCancelText ?? 'Cancel anytime.',
    ctaText:    pp?.trialCtaText    ?? 'Start Your 7-Day Edge Trial',
  }

  return (
    <main style={{ background: '#05070B', minHeight: '100vh' }}>
      {/* DEBUG: remove after testing */}
      <div id="__sanity_debug" style={{ display: 'none' }} data-pp={JSON.stringify({ null: pp === null, cards: (pp as {pricingCards?: Array<{planId?: string; ctaText?: string}>})?.pricingCards?.map((c) => ({ id: c.planId, cta: c.ctaText })) })} />
      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="pt-16 pb-16 sm:pt-20 sm:pb-20 text-center px-5">
        <div className="max-w-[760px] mx-auto">
          <p className="text-xs uppercase tracking-[0.22em] text-[#C9A24A] font-semibold mb-4">{hero.badge}</p>
          <h1 className="text-4xl sm:text-5xl md:text-[52px] font-bold text-white leading-tight mb-5">
            {hero.accentWord
              ? hero.headline.replace(hero.accentWord, '|||').split('|||').map((part: string, i: number, arr: string[]) =>
                  i < arr.length - 1
                    ? <span key={i}>{part}<span className="text-[#C9A24A]">{hero.accentWord}</span></span>
                    : <span key={i}>{part}</span>
                )
              : hero.headline
            }
          </h1>
          <p className="text-[#A7ADBB] text-base sm:text-lg max-w-[560px] mx-auto leading-relaxed mb-8">
            {hero.subheadline}
          </p>
          <a
            href="#pricing-cards"
            className="inline-block bg-[#C9A24A] text-black font-semibold text-sm px-7 py-3.5 rounded-lg hover:bg-[#D4AF5C] hover:scale-[1.02] transition-all duration-200 shadow-[0_0_20px_rgba(201,162,74,0.25)]"
          >
            {hero.ctaText}
          </a>
        </div>
      </section>

      {/* ── 2. PRICING CARDS ────────────────────────────────────────────────── */}
      <section id="pricing-cards" className="py-16 sm:py-20 px-5">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-start">
            {plans.map((plan) => {
              const shopify = SHOPIFY_VARIANTS[plan.planId] || SHOPIFY_VARIANTS['free']
              const isGamma = plan.highlight

              return (
                <div
                  key={plan.planId}
                  className={`relative flex flex-col rounded-[14px] border transition-all duration-300
                    ${isGamma
                      ? 'border-[#C9A24A]/50 bg-[#090B12] shadow-[0_0_40px_rgba(201,162,74,0.10)] scale-[1.03] md:scale-[1.05] z-10'
                      : 'border-white/8 bg-[#090B12] hover:border-white/15'
                    }`}
                  style={{ padding: '28px 30px 32px' }}
                >
                  {isGamma && (
                    <div className="absolute inset-0 rounded-[14px] pointer-events-none"
                      style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(201,162,74,0.06) 0%, transparent 70%)' }}
                    />
                  )}

                  {plan.badge && (
                    <div className="absolute -top-3.5 right-5">
                      <span className="bg-[#C9A24A] text-black text-[11px] font-bold px-3 py-1 rounded-full tracking-wide uppercase">
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <h2 className={`text-xl sm:text-2xl font-bold mb-1 ${isGamma ? 'text-[#C9A24A]' : 'text-white'}`}>
                    {plan.name}
                  </h2>

                  <p className="text-[13px] text-[#A7ADBB] leading-snug mb-4" style={{ minHeight: '2.5rem' }}>
                    {plan.subtitle}
                  </p>

                  <div className="flex items-end gap-1 mb-4">
                    <span className="text-4xl sm:text-5xl font-bold text-white tracking-tight">{plan.price}</span>
                    {plan.period && <span className="text-[#A7ADBB] text-base mb-1.5">{plan.period}</span>}
                  </div>

                  <div className={`w-full h-px mb-5 ${isGamma ? 'bg-[#C9A24A]/20' : 'bg-white/8'}`} />

                  <p className="text-[13px] text-[#A7ADBB] leading-relaxed mb-5">{plan.description}</p>

                  <ul className="space-y-2.5 mb-7 flex-1">
                    {(plan.features ?? []).map((f: string, i: number) => {
                      const isHeader = f.startsWith('Everything in')
                      return (
                        <li key={i} className={`flex items-start gap-2.5 text-[13px] leading-snug ${isHeader ? 'text-white font-semibold' : 'text-[#A7ADBB]'}`}>
                          {!isHeader && (
                            <span className={`flex-shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center ${isGamma ? 'bg-[#C9A24A]/15' : 'bg-white/8'}`}>
                              <svg className={`w-2.5 h-2.5 ${isGamma ? 'text-[#C9A24A]' : 'text-white/50'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                          )}
                          {isHeader && <span className="flex-shrink-0 mt-0.5 w-4 h-4" />}
                          {f}
                        </li>
                      )
                    })}
                  </ul>

                  <ShopifyCheckoutModal
                    planId={shopify.planId}
                    variantId={shopify.variantId}
                    ctaText={plan.ctaText}
                    highlight={isGamma}
                  />

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
            <p className="text-xs uppercase tracking-[0.22em] text-[#C9A24A] font-semibold mb-3">{tableBadge}</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">{tableHeadline}</h2>
          </div>
          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full min-w-[560px] border-collapse">
              <thead>
                <tr>
                  <th className="text-left text-sm font-semibold text-[#A7ADBB] pb-4 pr-4 w-[40%]">Feature</th>
                  <th className="text-center text-sm font-semibold text-white pb-4 px-3 w-[20%]">Free</th>
                  <th className="text-center text-sm font-semibold text-white pb-4 px-3 w-[20%]">Basic</th>
                  <th className="text-center text-sm font-bold text-[#C9A24A] pb-4 px-3 w-[20%]">Gamma ✦</th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, i) => (
                  <tr key={i} className={`border-t ${i % 2 === 0 ? 'bg-white/[0.015]' : ''}`} style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                    <td className="text-sm text-[#A7ADBB] py-3.5 pr-4">{row.feature}</td>
                    <td className="text-center py-3.5 px-3"><Cell value={row.freeValue} /></td>
                    <td className="text-center py-3.5 px-3"><Cell value={row.basicValue} /></td>
                    <td className="text-center py-3.5 px-3"><Cell value={row.gammaValue} isGamma /></td>
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
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#C9A24A] font-semibold mb-4">{pos.badge}</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-6">
                {pos.headline}<br />
                <span className="text-[#C9A24A]">{pos.headline2}</span>
              </h2>
              <p className="text-[#A7ADBB] text-sm sm:text-base leading-relaxed mb-6">{pos.body}</p>
              <ul className="space-y-3">
                {pos.bullets.map((item: string, i: number) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24A] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {pos.stats.map((stat, i) => (
                <div key={i} className="rounded-xl border border-white/8 bg-[#05070B] p-4 sm:p-5">
                  <p className="text-[11px] uppercase tracking-widest text-[#A7ADBB]/60 mb-2">{stat.label}</p>
                  <p className="text-xl sm:text-2xl font-bold text-[#C9A24A]">{stat.value}</p>
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
            <div className="rounded-2xl border border-white/8 bg-[#090B12] p-8">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-5">
                <span className="text-lg">◈</span>
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#A7ADBB]/60 font-semibold mb-2">{dec.c1Badge}</p>
              <h3 className="text-xl font-bold text-white mb-4">{dec.c1Headline}</h3>
              <p className="text-[#A7ADBB] text-sm leading-relaxed">{dec.c1Body}</p>
            </div>
            <div className="rounded-2xl border border-[#C9A24A]/25 bg-[#090B12] p-8 relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at 100% 0%, rgba(201,162,74,0.05) 0%, transparent 60%)' }}
              />
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#C9A24A]/10 flex items-center justify-center mb-5">
                  <span className="text-lg text-[#C9A24A]">◉</span>
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#C9A24A]/70 font-semibold mb-2">{dec.c2Badge}</p>
                <h3 className="text-xl font-bold text-white mb-4">{dec.c2Headline}</h3>
                <p className="text-[#A7ADBB] text-sm leading-relaxed">{dec.c2Body}</p>
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
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(201,162,74,0.07) 0%, transparent 65%)' }}
            />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.22em] text-[#C9A24A] font-semibold mb-4">{trial.badge}</p>
              <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-white mb-4 leading-tight">
                {trial.headline}
              </h2>
              <p className="text-[#A7ADBB] text-base sm:text-lg max-w-[480px] mx-auto mb-2 leading-relaxed">
                {trial.body}
              </p>
              <p className="text-[#A7ADBB]/50 text-sm mb-10">{trial.cancelText}</p>
              <a
                href="#pricing-cards"
                className="inline-block bg-[#C9A24A] text-black font-bold text-sm px-8 py-4 rounded-lg hover:bg-[#D4AF5C] hover:scale-[1.02] transition-all duration-200 shadow-[0_0_30px_rgba(201,162,74,0.3)]"
              >
                {trial.ctaText}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Disclaimer text={hp?.disclaimerText} visible={hp?.disclaimerVisible} />
      <Footer />
    </main>
  )
}
