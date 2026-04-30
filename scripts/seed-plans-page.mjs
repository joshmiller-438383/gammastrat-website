/**
 * Seed the plansPage singleton document in Sanity with all default content.
 * Run: node scripts/seed-plans-page.mjs
 */
import { createClient } from '@sanity/client'
import { readFileSync } from 'fs'

// Read token from .env.local
const envLocal = readFileSync('.env.local', 'utf8')
const tokenLine = envLocal.split('\n').find(l => l.startsWith('SANITY_API_TOKEN='))
const token = tokenLine ? tokenLine.split('=').slice(1).join('=').trim() : ''

if (!token) {
  console.error('No SANITY_API_TOKEN found in .env.local')
  process.exit(1)
}

const client = createClient({
  projectId: 'fa41e7wa',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token,
})

const doc = {
  _id: 'plansPage',
  _type: 'plansPage',

  // ── HERO ──────────────────────────────────────────────────────────────────
  heroBadge: 'Plans & Pricing',
  heroHeadline: 'Choose Your Level of Edge',
  heroAccentWord: 'Edge',
  heroSubheadline: 'From core market insight to full positioning and volatility frameworks — access the reports that reveal what the market is really doing.',
  heroCtaText: 'Start Your 7-Day Edge Trial',

  // ── PRICING CARDS ─────────────────────────────────────────────────────────
  pricingCards: [
    {
      _key: 'free',
      _type: 'pricingCard',
      planId: 'free',
      name: 'Free',
      subtitle: 'Experience the Edge',
      price: '$0',
      period: '',
      description: "Get full access to a rotating selection of GammaStrat's most powerful reports — and see how positioning and volatility actually drive the market.",
      badge: null,
      highlight: false,
      features: [
        'Full access to Daily Options Market Insights',
        'Full access to a rotating high-impact report (DOPR Overlap, Spreads, or VRP & Squeeze)',
        'Real-time positioning and volatility signals',
        'Sample trade frameworks and commentary',
        'Designed to show you how the edge works',
      ],
      ctaText: 'Start Free',
      microCopy: 'Includes full access to selected reports — no watered-down previews',
    },
    {
      _key: 'basic',
      _type: 'pricingCard',
      planId: 'basic',
      name: 'Basic',
      subtitle: 'Understand the Market with Positioning & Volatility',
      price: '$84',
      period: '/mo',
      description: 'For traders who want consistent clarity on positioning, volatility, and market structure.',
      badge: null,
      highlight: false,
      features: [
        'Daily Options Market Insights (SPX, QQQ, GLD)',
        'VIX & VVIX Term Structure Reports',
        'Core volatility structure + skew analysis',
        'Key levels, term structure, and positioning breakdowns',
        'Daily trader commentary',
        'Includes 7-day Edge Trial',
      ],
      ctaText: 'Start Your Edge Trial',
      microCopy: '',
    },
    {
      _key: 'gamma',
      _type: 'pricingCard',
      planId: 'gamma',
      name: 'Gamma',
      subtitle: 'Trade With Positioning, Not Guesswork',
      price: '$175',
      period: '/mo',
      description: 'Unlock the full GammaStrat system — combining positioning, spreads, volatility mispricing, and signal alignment.',
      badge: 'Most Popular',
      highlight: true,
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
    },
  ],

  // ── COMPARISON TABLE ──────────────────────────────────────────────────────
  tableHeadline: 'Compare Access',
  tableBadge: 'Compare Plans',
  tableRows: [
    { _key: 'row1', _type: 'tableRow', feature: 'Daily Market Insights',     freeValue: 'true',    basicValue: 'true',  gammaValue: 'true' },
    { _key: 'row2', _type: 'tableRow', feature: 'VIX / VVIX Term Structure', freeValue: 'false',   basicValue: 'true',  gammaValue: 'true' },
    { _key: 'row3', _type: 'tableRow', feature: 'Rotating Advanced Report',  freeValue: 'true',    basicValue: 'false', gammaValue: 'true' },
    { _key: 'row4', _type: 'tableRow', feature: 'DOPR Overlap Analysis',     freeValue: 'Limited', basicValue: 'false', gammaValue: 'true' },
    { _key: 'row5', _type: 'tableRow', feature: 'DOPR Spreads Analysis',     freeValue: 'Limited', basicValue: 'false', gammaValue: 'true' },
    { _key: 'row6', _type: 'tableRow', feature: 'VRP & Squeeze',             freeValue: 'Limited', basicValue: 'false', gammaValue: 'true' },
    { _key: 'row7', _type: 'tableRow', feature: 'Recommended Tickers',       freeValue: 'false',   basicValue: 'false', gammaValue: 'true' },
    { _key: 'row8', _type: 'tableRow', feature: 'Full Report Library',       freeValue: 'false',   basicValue: 'false', gammaValue: 'true' },
    { _key: 'row9', _type: 'tableRow', feature: 'Advanced Frameworks',       freeValue: 'false',   basicValue: 'false', gammaValue: 'true' },
  ],

  // ── POSITIONING ───────────────────────────────────────────────────────────
  positioningBadge: 'Why GammaStrat?',
  positioningHeadline: 'Most traders focus on price.',
  positioningHeadline2: 'Professionals focus on positioning.',
  positioningBody: 'GammaStrat reveals what price alone cannot show you — so you can stop reacting to the market and start trading with it.',
  positioningBullets: [
    'Where dealers are positioned',
    'Where volatility is mispriced',
    'Where probabilities are in your favor',
  ],
  positioningStats: [
    { _key: 's1', _type: 'statBlock', label: 'Gamma Exposure',    value: '+2.17B',   sub: 'Bullish' },
    { _key: 's2', _type: 'statBlock', label: 'Volatility Regime', value: 'Elevated', sub: 'Risk On' },
    { _key: 's3', _type: 'statBlock', label: 'IV Rank (SPX)',     value: '68',       sub: 'High' },
    { _key: 's4', _type: 'statBlock', label: 'Positioning Edge',  value: 'Active',   sub: 'Full Access' },
  ],

  // ── DECISION HELPER ───────────────────────────────────────────────────────
  decisionCard1Badge: 'Not Sure Where to Start?',
  decisionCard1Headline: 'Start with Basic.',
  decisionCard1Body: 'It gives you the full daily view of positioning and volatility — the foundation for understanding how the market is actually moving.',
  decisionCard2Badge: 'Ready for Full Edge?',
  decisionCard2Headline: 'Upgrade to Gamma.',
  decisionCard2Body: "When you're ready for tradeable setups and full signal alignment — Gamma gives you the complete system.",

  // ── TRIAL SECTION ─────────────────────────────────────────────────────────
  trialBadge: 'Risk-Free',
  trialHeadline: '7-Day Edge Trial',
  trialBody: 'Experience GammaStrat risk-free. See exactly how institutional options intelligence changes how you read and trade the market.',
  trialCancelText: 'Cancel anytime.',
  trialCtaText: 'Start Your 7-Day Edge Trial',
}

async function main() {
  console.log('Creating/updating plansPage document in Sanity...')
  
  // Check if it exists
  const existing = await client.fetch(`*[_id == "plansPage"][0]{ _id }`)
  
  if (existing) {
    console.log('Document exists — patching with all default values...')
    await client.patch('plansPage').set(doc).commit()
  } else {
    console.log('Document does not exist — creating...')
    await client.createOrReplace(doc)
  }
  
  console.log('✅ plansPage document created/updated successfully!')
  console.log('Now go to https://www.gammastrat.com/studio and open "Plans Page" to edit.')
}

main().catch(err => {
  console.error('Error:', err.message)
  process.exit(1)
})
