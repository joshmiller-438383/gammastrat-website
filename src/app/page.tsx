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
import Disclaimer from '@/components/sections/Disclaimer'
import FAQSection from '@/components/sections/FAQSection'
import { client, queries } from '../../sanity/client'

// Accent words are stored as comma-separated strings in Sanity
function parseAccentWords(raw?: string): string[] {
  if (!raw) return []
  return raw.split(',').map(w => w.trim()).filter(Boolean)
}

async function getSanityData() {
  try {
    const homepage = await client.fetch(queries.homepage)
    return { homepage }
  } catch (err) {
    console.error('[Sanity fetch error]', err)
    return { homepage: null }
  }
}

export default async function HomePage() {
  const { homepage: hp } = await getSanityData()

  return (
    <main className="min-h-screen bg-gs-bg">
      <Navbar
        loginText={hp?.navLoginText}
        loginUrl={hp?.navLoginUrl}
        ctaText={hp?.navCtaText}
        ctaUrl={hp?.navCtaUrl}
      />

      {/* ── Blueprint 7-panel grid ── */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 space-y-4">
        {/* Row 1: Hero (3fr) + Problem (2fr) */}
        <div id="edge" className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-4">
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
        />

        {/* Row 3: Reports grid */}
        <div id="reports">
        <ReportsGrid
          headline={hp?.reportsHeadline}
          subheadline={hp?.reportsSubheadline}
          items={hp?.reportItems}
        />

        </div>
        {/* Row 4: Why Different (full width) */}
        <div id="method">
        <WhyDifferentPanel
          headline={hp?.whyHeadline}
          accentWords={parseAccentWords(hp?.whyAccentWords)}
          drivers={hp?.whyDrivers}
        />

        <CredibilityPanel
          headline={hp?.credibilityHeadline}
          accentWords={parseAccentWords(hp?.credibilityAccentWords)}
          pillars={hp?.credibilityPillars}
        />

        </div>
      </div>

      {/* FAQ Section — above Final CTA */}
      <FAQSection
        headline={hp?.faqHeadline}
        subtitle={hp?.faqSubtitle}
        items={hp?.faqItems}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        {/* Row 6: Final CTA */}
        <div id="cta">
        <FinalCTAPanel
          headline={hp?.ctaHeadline}
          accentWords={parseAccentWords(hp?.ctaAccentWords)}
          subheadline={hp?.ctaSubheadline}
          buttonText={hp?.ctaButtonText}
          buttonUrl={hp?.ctaButtonUrl}
        />

        </div>
      </div>
      <Disclaimer
        text={hp?.disclaimerText}
        visible={hp?.disclaimerVisible}
      />

      <Footer
        tagline={hp?.footerTagline}
        copyright={hp?.footerCopyright}
        columns={hp?.footerColumns}
      />
    </main>
  )
}
