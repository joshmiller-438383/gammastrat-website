import MarketingEffects from '@/components/marketing/MarketingEffects'
import MarketingNav from '@/components/marketing/MarketingNav'
import TickerTape from '@/components/marketing/TickerTape'
import MarketingHero from '@/components/marketing/MarketingHero'
import MarketingStatsBand from '@/components/marketing/MarketingStatsBand'
import MarketingEdge from '@/components/marketing/MarketingEdge'
import MarketingMethod from '@/components/marketing/MarketingMethod'
import MarketingTerminals from '@/components/marketing/MarketingTerminals'
import MarketingReports from '@/components/marketing/MarketingReports'
import MarketingCredibility from '@/components/marketing/MarketingCredibility'
import MarketingPricing from '@/components/marketing/MarketingPricing'
import MarketingFAQ from '@/components/marketing/MarketingFAQ'
import MarketingFinalCTA from '@/components/marketing/MarketingFinalCTA'
import MarketingFooter from '@/components/marketing/MarketingFooter'
import { getMembersUrl } from '../../lib/site'

/**
 * Preview route for the new homepage UI.
 * Old `/` homepage is untouched — same Sanity, same features.
 *
 * Full homepage shell live on `/new`.
 */
export default function NewMarketingPage() {
  const membersUrl = getMembersUrl()
  const ctaUrl = '/plans'

  return (
    <>
      <MarketingEffects />
      <div className="scrollprog" id="scrollprog" aria-hidden="true" />
      <MarketingNav membersUrl={membersUrl} ctaUrl={ctaUrl} />
      <TickerTape />
      <MarketingHero ctaUrl={ctaUrl} />
      <MarketingStatsBand />
      <MarketingEdge />
      <MarketingMethod />
      <MarketingTerminals />
      <MarketingReports ctaUrl={ctaUrl} />
      <MarketingCredibility />
      <MarketingPricing ctaUrl={ctaUrl} />
      <MarketingFAQ />
      <MarketingFinalCTA ctaUrl={ctaUrl} />
      <MarketingFooter membersUrl={membersUrl} />
    </>
  )
}
