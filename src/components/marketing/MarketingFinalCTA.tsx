import MarketingCheckoutButton from '@/components/marketing/MarketingCheckoutButton'

interface MarketingFinalCTAProps {
  ctaUrl?: string
  contactUrl?: string
}

export default function MarketingFinalCTA({
  contactUrl = 'mailto:support@gammastrat.com',
}: MarketingFinalCTAProps) {
  return (
    <section className="ctaband" id="cta">
      <div className="wrap">
        <div className="ctapanel gridbg">
          <div className="slabel rise" style={{ textAlign: 'center' }}>
            <span className="n">08</span>START
          </div>
          <h2 className="rise">Trade the Structure. Not the Noise.</h2>
          <p className="lede rise" style={{ textAlign: 'center' }}>
            Institutional intelligence, published every trading day. Two weeks free — including the
            Alpha Terminal.
          </p>
          <div className="rise">
            <MarketingCheckoutButton
              plan="free_trial"
              className="btn"
              style={{ fontSize: 14, padding: '15px 34px' }}
            >
              Start Your Free Trial<span className="ar">→</span>
            </MarketingCheckoutButton>
            <div className="microline" style={{ textAlign: 'center' }}>
              FREE FOR 14 DAYS · 5 REPORTS · CANCEL ANYTIME
            </div>
            <div className="askline">
              QUESTIONS BEFORE SUBSCRIBING?{' '}
              <a href={contactUrl}>TALK TO US FIRST →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
