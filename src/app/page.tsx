export const dynamic = "force-dynamic"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroPanel from '@/components/sections/HeroPanel'
import ProblemPanel from '@/components/sections/ProblemPanel'
import SolutionDashboardPanel from '@/components/sections/SolutionDashboardPanel'
import ReportsGrid from '@/components/sections/ReportsGrid'
import WhyDifferentPanel from '@/components/sections/WhyDifferentPanel'
import CredibilityPanel from '@/components/sections/CredibilityPanel'
import FinalCTAPanel from '@/components/sections/FinalCTAPanel'
import LogoStrip from '@/components/sections/LogoStrip'
import Stats from '@/components/sections/Stats'
import Testimonial from '@/components/sections/Testimonial'
import BlogPreview from '@/components/sections/BlogPreview'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'
import { client, queries } from '../../sanity/client'

// Accent words are stored as comma-separated strings in Sanity
function parseAccentWords(raw?: string): string[] {
  if (!raw) return []
  return raw.split(',').map(w => w.trim()).filter(Boolean)
}

async function getSanityData() {
  try {
    const [faqs, testimonials, posts, homepage] = await Promise.all([
      client.fetch(queries.faqs),
      client.fetch(queries.testimonials),
      client.fetch(queries.posts),
      client.fetch(queries.homepage),
    ])
    return { faqs, testimonials, posts, homepage }
  } catch {
    return { faqs: [], testimonials: [], posts: [], homepage: null }
  }
}

export default async function HomePage() {
  const { faqs, testimonials, posts, homepage: hp } = await getSanityData()

  return (
    <main className="min-h-screen bg-gs-bg">
      <Navbar
        loginText={hp?.navLoginText}
        loginUrl={hp?.navLoginUrl}
        ctaText={hp?.navCtaText}
        ctaUrl={hp?.navCtaUrl}
        navLinks={hp?.navLinks}
      />

      {/* ── Main content wrapper ── */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 space-y-4">

        {/* Row 1: Hero (large left) + Problem (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-4">
          <HeroPanel
            badge={hp?.heroBadge}
            headline={hp?.heroHeadline}
            accentWords={parseAccentWords(hp?.heroAccentWords)}
            description={hp?.heroDescription}
            trustLine={hp?.heroTrustLine}
            ctaPrimaryText={hp?.heroCtaPrimaryText}
            ctaPrimaryUrl={hp?.heroCtaPrimaryUrl}
            ctaSecondaryText={hp?.heroCtaSecondaryText}
            ctaSecondaryUrl={hp?.heroCtaSecondaryUrl}
            imageUrl={hp?.heroImage?.asset?.url}
          />
          <ProblemPanel
            headline={hp?.problemHeadline}
            accentWords={parseAccentWords(hp?.problemAccentWords)}
            body={hp?.problemBody}
            points={hp?.problemPoints}
            imageUrl={hp?.problemImage?.asset?.url}
          />
        </div>

        {/* Logo strip */}
        <LogoStrip
          label={hp?.logoStripLabel}
          items={hp?.logoStripItems}
        />

        {/* Row 2: Solution dashboard (full width) */}
        <SolutionDashboardPanel
          headline={hp?.solutionHeadline}
          accentWords={parseAccentWords(hp?.solutionAccentWords)}
          body={hp?.solutionBody}
          imageUrl={hp?.solutionImage?.asset?.url}
        />

        {/* Row 3: Reports grid */}
        <ReportsGrid
          headline={hp?.reportsHeadline}
          subheadline={hp?.reportsSubheadline}
          items={hp?.reportItems}
          imageUrl={hp?.reportsImage?.asset?.url}
        />

        {/* Row 4: Why Different (full width) */}
        <WhyDifferentPanel
          headline={hp?.whyHeadline}
          accentWords={parseAccentWords(hp?.whyAccentWords)}
          drivers={hp?.whyDrivers}
          imageUrl={hp?.whyImage?.asset?.url}
        />

        {/* Stats strip */}
        <Stats
          headline={hp?.statsHeadline}
          subheadline={hp?.statsSubheadline}
          items={hp?.statItems}
        />

        {/* Row 5: Credibility */}
        <CredibilityPanel
          headline={hp?.credibilityHeadline}
          accentWords={parseAccentWords(hp?.credibilityAccentWords)}
          pillars={hp?.credibilityPillars}
          imageUrl={hp?.credibilityImage?.asset?.url}
        />

        {/* Testimonials */}
        <Testimonial items={testimonials} />

        {/* Blog preview */}
        <BlogPreview
          items={posts}
          headline={hp?.blogHeadline}
          subheadline={hp?.blogSubheadline}
          ctaText={hp?.blogCtaText}
        />

        {/* FAQ */}
        <FAQ items={faqs} />

        {/* Row 6: Final CTA */}
        <FinalCTAPanel
          headline={hp?.ctaHeadline}
          accentWords={parseAccentWords(hp?.ctaAccentWords)}
          subheadline={hp?.ctaSubheadline}
          buttonText={hp?.ctaButtonText}
          buttonUrl={hp?.ctaButtonUrl}
          imageUrl={hp?.ctaImage?.asset?.url}
        />

        {/* Contact */}
        <Contact
          headline={hp?.contactHeadline}
          subheadline={hp?.contactSubheadline}
          email={hp?.contactEmail}
          phone={hp?.contactPhone}
          address={hp?.contactAddress}
          ctaText={hp?.contactCtaText}
        />
      </div>

      <Footer
        tagline={hp?.footerTagline}
        copyright={hp?.footerCopyright}
        columns={hp?.footerColumns}
      />
    </main>
  )
}
