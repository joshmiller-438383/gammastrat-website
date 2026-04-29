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
    // Recursively key nested arrays
    ...(item.dropdown ? { dropdown: keyed(item.dropdown) } : {}),
    ...(item.links ? { links: keyed(item.links) } : {}),
  }))
}

const homepageDoc = {
  _id: 'homepage',
  _type: 'homepage',

  // ─── HERO ───────────────────────────────────────────────────────────────
  heroBadge: 'Trusted by 2.5M+ traders',
  heroHeadline: 'See What the Options Market Is Pricing Before Price Moves',
  heroDescription: 'Institutional-grade options intelligence revealing gamma positioning, volatility mispricings, and probability edge across SPX, QQQ, and the most liquid names.',
  heroTrustLine: 'Built by a Wall Street hedge fund founder. Validated by quantitative research.',
  heroCtaPrimaryText: 'Start Subscription',
  heroCtaPrimaryUrl: '/plans',
  heroCtaSecondaryText: 'View Sample Reports',
  heroCtaSecondaryUrl: '#solutions',

  // ─── LOGO STRIP ─────────────────────────────────────────────────────────
  logoStripLabel: 'Trusted by 4,000+ companies',
  logoStripItems: keyed([
    { name: 'StackEd Lab' },
    { name: 'Magnolia' },
    { name: 'Powersurge' },
    { name: 'Warpspeed' },
    { name: 'Leapyear' },
    { name: 'EasyTrade' },
  ]),

  // ─── FEATURES / SOLUTIONS ───────────────────────────────────────────────
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
  blogSubheadline: 'The latest market news, innovations, methodologies, and resources.',
  blogCtaText: 'View all posts',

  // ─── CONTACT ────────────────────────────────────────────────────────────
  contactHeadline: 'Connect with us now',
  contactSubheadline: 'Need assistance? Contact our experts.',
  contactEmail: 'support@gammastrat.com',
  contactPhone: '+1 (555) 000-0000',
  contactAddress: '1234 S Rangeline Pkwy, Suite 200\nSalt Lake City, Utah, USA',
  contactCtaText: 'Send message',

  // ─── NAVBAR ─────────────────────────────────────────────────────────────
  navLoginText: 'Log in',
  navLoginUrl: 'https://members.gammastrat.com',
  navCtaText: 'Start free trial →',
  navCtaUrl: '/plans',
  navLinks: keyed([
    {
      label: 'Solutions',
      href: '#',
      dropdown: [
        { label: 'Market Analytics', href: '#solutions' },
        { label: 'Trade Signals', href: '#solutions' },
        { label: 'Risk Management', href: '#solutions' },
        { label: 'Portfolio Tools', href: '#solutions' },
      ],
    },
    { label: 'About', href: '/#about' },
    { label: 'Pricing', href: '/plans' },
    {
      label: 'Support',
      href: '#',
      dropdown: [
        { label: 'Documentation', href: '#' },
        { label: 'Academy', href: '#' },
        { label: 'Community', href: '#' },
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
        { label: 'Academy', href: '#' },
        { label: 'Member Portal', href: 'https://members.gammastrat.com' },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'About', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Contact', href: '/#contact' },
      ],
    },
    {
      heading: 'Resources',
      links: [
        { label: 'Blog', href: '/blog' },
        { label: 'Newsletter', href: '#' },
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
  console.log('Seeding homepage document with _key fields...')
  try {
    const result = await client.createOrReplace(homepageDoc)
    console.log('✅ Homepage seeded successfully:', result._id)
  } catch (err) {
    console.error('❌ Error seeding homepage:', err)
    process.exit(1)
  }
}

seed()
