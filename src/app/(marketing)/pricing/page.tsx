import MarketingPricing from '@/components/marketing/MarketingPricing'
import MarketingFinalCTA from '@/components/marketing/MarketingFinalCTA'

export default function PricingPage() {
  const ctaUrl = '/plans'
  return (
    <>
      <MarketingPricing ctaUrl={ctaUrl} />
      <MarketingFinalCTA ctaUrl={ctaUrl} />
    </>
  )
}
