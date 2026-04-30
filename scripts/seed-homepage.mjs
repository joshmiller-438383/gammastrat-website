import { createClient } from '@sanity/client'
import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Parse .env.local manually
const envPath = resolve(__dirname, '../.env.local')
const envContent = readFileSync(envPath, 'utf8')
envContent.split('\n').forEach(line => {
  const [key, ...vals] = line.split('=')
  if (key && vals.length) process.env[key.trim()] = vals.join('=').trim()
})

const client = createClient({
  projectId: 'fa41e7wa',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

// Helper: add _key to every item in an array
function keyed(arr) {
  return arr.map((item, i) => ({
    _key: `key_${i}_${Math.random().toString(36).slice(2, 7)}`,
    ...item,
    ...(item.dropdown ? { dropdown: keyed(item.dropdown) } : {}),
    ...(item.links ? { links: keyed(item.links) } : {}),
  }))
}

const homepageDoc = {
  _id: 'homepage',
  _type: 'homepage',

  // ─── 1. HERO PANEL ──────────────────────────────────────────────────────
  heroBadge: 'Institutional Options Intelligence',
  heroHeadline: 'See What the Options Market Is Pricing Before Price Moves',
  heroAccentWords: 'Options Market',
  heroDescription: 'Institutional-grade options intelligence revealing gamma positioning, volatility mispricings, and probability edge across SPX, QQQ, and the most liquid names.',
  heroTrustLine: 'Used by serious options traders, volatility specialists, and SPX/index traders.',
  heroCtaPrimaryText: 'Start Your Edge',
  heroCtaPrimaryUrl: '/plans',
  heroCtaSecondaryText: 'View Sample Reports',
  heroCtaSecondaryUrl: '#reports',

  // ─── 2. PROBLEM PANEL ───────────────────────────────────────────────────
  problemHeadline: 'Trading Blind Is Expensive.',
  problemAccentWords: 'Is Expensive.',
  problemBody: 'Most traders focus on price. Professionals focus on positioning. Without gamma data, volatility structure, and dealer exposure, you are trading blind.',
  problemPoints: keyed([
    { label: 'No Positioning Data' },
    { label: 'Mispriced Volatility' },
    { label: 'Unknown Risk Exposure' },
  ]),

  // ─── 3. SOLUTION DASHBOARD PANEL ────────────────────────────────────────
  solutionHeadline: 'See The Market Like Institutions Do.',
  solutionAccentWords: 'Like Institutions Do.',
  solutionBody: 'GammaStrat translates complex options data into clear, actionable intelligence so you can stop guessing and start executing with conviction.',

  // ─── 4. REPORTS GRID ────────────────────────────────────────────────────
  reportsHeadline: 'Every Report You Need to Trade With Edge',
  reportsSubheadline: 'Institutional-grade options intelligence, delivered daily before market open.',
  reportItems: keyed([
    {
      title: 'DOPR Spreads Analysis',
      description: 'Highest probability options spreads ranked by market expectations.',
      icon: '📊',
    },
    {
      title: 'Volatility Risk Premium & Squeeze',
      description: 'Identify volatility mispricings and premium opportunities.',
      icon: '📈',
    },
    {
      title: 'Relative Value & Positioning',
      description: 'Spot rare dislocations in how the market is pricing probability.',
      icon: '⚖️',
    },
    {
      title: 'Signal Strength Rankings',
      description: 'Rank the best directional and market-neutral opportunities.',
      icon: '📡',
    },
    {
      title: 'Filtered Tickers',
      description: 'Find tickers with aligned signals across multiple frameworks.',
      icon: '🔍',
    },
    {
      title: 'Market Mood Gauge',
      description: 'Instant read on the current gamma and volatility regime.',
      icon: '🎯',
    },
    {
      title: 'VIX & VVIX Term Structure',
      description: 'See forward volatility expectations across maturities.',
      icon: '📉',
    },
    {
      title: 'Volatility Regime Report',
      description: 'Understand the current market environment and what it means for your trades.',
      icon: '🌐',
    },
    {
      title: 'Options Market Insights',
      description: 'Daily analysis of SPX, QQQ, and GLO with skew, pin risk, and positioning.',
      icon: '💡',
    },
  ]),

  // ─── 5. WHY DIFFERENT PANEL ─────────────────────────────────────────────
  whyHeadline: 'We Focus On What Moves Markets.',
  whyAccentWords: 'Moves Markets.',
  whyDrivers: [
    'Options Pricing',
    'Dealer Positioning',
    'Volatility Structure',
    'Probability Distribution',
  ],

  // ─── 6. CREDIBILITY PANEL ───────────────────────────────────────────────
  credibilityHeadline: 'Built On Expert Foundations.',
  credibilityAccentWords: 'Expert Foundations.',
  credibilityPillars: keyed([
    {
      icon: '🏛',
      title: 'Wall Street Hedge Fund Founder',
      body: 'Built on frameworks developed and tested in institutional trading environments at the highest levels of the market.',
    },
    {
      icon: '🎓',
      title: 'University Professor Endorsed',
      body: 'Methodology validated by academic research in derivatives pricing, market microstructure, and quantitative finance.',
    },
    {
      icon: '⚙️',
      title: 'Quantitative Models & Research Driven',
      body: 'Every signal is backed by rigorous quantitative analysis, not opinion, guesswork, or retail trading folklore.',
    },
  ]),

  // ─── 7. FINAL CTA PANEL ─────────────────────────────────────────────────
  ctaHeadline: 'Gain The Edge. Stay Ahead.',
  ctaAccentWords: 'The Edge.',
  ctaSubheadline: 'Institutional intelligence. Delivered daily.',
  ctaButtonText: 'Start Your Edge',
  ctaButtonUrl: '/plans',

  // ─── LOGO STRIP ─────────────────────────────────────────────────────────
  logoStripLabel: 'Trusted by serious options traders',
  logoStripItems: keyed([
    { name: 'SPX Traders' },
    { name: 'Volatility Specialists' },
    { name: 'Spread Traders' },
    { name: 'Premium Sellers' },
    { name: 'Index Options' },
    { name: 'Quant Funds' },
  ]),

  // ─── FEATURES (legacy — kept for backward compat) ───────────────────────
  featuresLabel: 'Solutions',
  featuresHeadline: 'A Complete Options Intelligence Stack',
  featuresSubheadline: 'Each report is designed to improve trade selection, structure, and volatility edge.',
  featureItems: keyed([
    {
      tag: 'Gamma & Positioning',
      title: 'Daily Options Market Insights',
      description: 'Deep analysis of SPX, QQQ, and GLD including gamma positioning, skew, and pin risk with actionable commentary.',
    },
    {
      tag: 'Volatility Edge',
      title: 'Volatility Risk Premium & Squeeze',
      description: 'Identifies when volatility is overpriced or underpriced using IV rank, realized volatility, and forward forecasts.',
    },
    {
      tag: 'Trade Setups',
      title: 'DOPR Spreads Analysis',
      description: 'Identifies the highest probability options spread structures based on real market pricing.',
    },
  ]),

  // ─── STATS ──────────────────────────────────────────────────────────────
  statsHeadline: 'Performance you can trust.',
  statsSubheadline: 'Institutional-grade speed, uptime, and coverage for confident, data-driven trading decisions.',
  statItems: keyed([
    { value: '99.99%', label: 'Uptime',      sub: 'Continuous platform reliability' },
    { value: '0.2s',   label: 'Order speed', sub: 'Lightning-fast signal execution' },
    { value: '1.2M+',  label: 'Volume',      sub: 'Contracts analyzed every day' },
    { value: '4,000+', label: 'Coverage',    sub: 'Equities and ETFs monitored' },
  ]),

  // ─── BLOG SECTION ───────────────────────────────────────────────────────
  blogHeadline: 'Trade smarter. Stay ahead.',
  blogSubheadline: 'The latest market insights, methodologies, and resources.',
  blogCtaText: 'View all posts',

  // ─── CONTACT ────────────────────────────────────────────────────────────
  contactHeadline: 'Connect with us',
  contactSubheadline: 'Questions about GammaStrat? Our team is here to help.',
  contactEmail: 'support@gammastrat.com',
  contactPhone: '',
  contactAddress: '',
  contactCtaText: 'Send message',

  // ─── NAVBAR ─────────────────────────────────────────────────────────────
  navLoginText: 'Member Portal',
  navLoginUrl: 'https://members.gammastrat.com',
  navCtaText: 'Start Your Edge →',
  navCtaUrl: '/plans',
  navLinks: keyed([
    {
      label: 'Reports',
      href: '#reports',
    },
    {
      label: 'About',
      href: '/#about',
    },
    {
      label: 'Pricing',
      href: '/plans',
    },
    {
      label: 'Support',
      href: '#',
      dropdown: [
        { label: 'Documentation', href: '#' },
        { label: 'Contact', href: '/#contact' },
      ],
    },
  ]),

  // ─── FOOTER ─────────────────────────────────────────────────────────────
  footerTagline: 'Institutional-grade options intelligence for serious traders.',
  footerCopyright: '© {year} GammaStrat. All rights reserved.',
  footerColumns: keyed([
    {
      heading: 'Product',
      links: [
        { label: 'Home', href: '/' },
        { label: 'Pricing', href: '/plans' },
        { label: 'Member Portal', href: 'https://members.gammastrat.com' },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'About', href: '#' },
        { label: 'Contact', href: '/#contact' },
      ],
    },
    {
      heading: 'Resources',
      links: [
        { label: 'Blog', href: '/blog' },
        { label: 'Support', href: '/#contact' },
      ],
    },
    {
      heading: 'Legal',
      links: [
        { label: 'Terms', href: '#' },
        { label: 'Privacy', href: '#' },
      ],
    },
  ]),
}

async function seed() {
  console.log('Seeding homepage document with all 7 new section fields...')
  try {
    const result = await client.createOrReplace(homepageDoc)
    console.log('✅ Homepage seeded successfully:', result._id)
  } catch (err) {
    console.error('❌ Error seeding homepage:', err)
    process.exit(1)
  }
}

seed()
