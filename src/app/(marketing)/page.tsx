import TickerTape from '@/components/marketing/TickerTape'
import MarketingHero from '@/components/marketing/MarketingHero'
import MarketingStatsBand from '@/components/marketing/MarketingStatsBand'

/** Home — hero, terminal previews, stats band only (per multi-page Figma). */
export default function MarketingHomePage() {
  return (
    <>
      <TickerTape />
      <MarketingHero />
      <MarketingStatsBand />
    </>
  )
}
