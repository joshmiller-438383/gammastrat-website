import { MARKETING_HOME, MARKETING_ROUTES } from '@/lib/marketingRoutes'
import { getMembersUrl } from '@/lib/site'

interface MarketingFooterProps {
  membersUrl?: string
}

export default function MarketingFooter({ membersUrl = getMembersUrl() }: MarketingFooterProps) {
  const year = new Date().getFullYear()

  return (
    <>
      <footer>
        <div className="wrap">
          <div className="fgrid">
            <div className="fbrand">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/marketing/logo.png"
                alt="GammaStrat logo"
                width={200}
                height={89}
                style={{ display: 'block' }}
              />
              <p>Institutional-grade options intelligence for serious traders.</p>
            </div>
            <div className="fcol">
              <div className="fh">PRODUCT</div>
              <a href={MARKETING_HOME}>Home</a>
              <a href={MARKETING_ROUTES.pricing}>Pricing</a>
              <a href={membersUrl}>Member Portal</a>
            </div>
            <div className="fcol">
              <div className="fh">COMPANY</div>
              <a href={MARKETING_ROUTES.about}>About</a>
              <a href="mailto:david@gammastrat.us">Contact</a>
            </div>
            <div className="fcol">
              <div className="fh">RESOURCES</div>
              <a href={MARKETING_ROUTES.dailySamples}>Daily Samples</a>
            </div>
            <div className="fcol">
              <div className="fh">LEGAL</div>
              <a href="/terms">Terms</a>
              <a href="/privacy">Privacy</a>
              <a href="/disclaimer">Disclaimer</a>
            </div>
          </div>
          <div className="legal">
            <div className="compline">FOR INFORMATIONAL PURPOSES ONLY. NOT INVESTMENT ADVICE.</div>
            <p>
              GammaStrat, LLC publishes research for informational and educational purposes only.
              Nothing on this site or in any GammaStrat report constitutes investment advice, a
              recommendation, or an offer or solicitation to buy or sell any security or derivative.
              GammaStrat is not an investment adviser, broker-dealer, or fiduciary. Investing and
              trading involve significant risk, including the potential loss of principal; options
              trading is not suitable for all investors. Past performance or backtested results are
              not indicative of future results. See our{' '}
              <a href="/disclaimer">Disclaimer</a>, <a href="/terms">Terms of Service</a>, and{' '}
              <a href="/privacy">Privacy Policy</a> for full disclosures.
            </p>
          </div>
          <div className="fbot">© {year} GammaStrat, LLC. All rights reserved.</div>
        </div>
      </footer>
    </>
  )
}
