import { getMembersUrl } from '../../lib/site'

interface MarketingFooterProps {
  membersUrl?: string
  homeHref?: string
}

export default function MarketingFooter({
  membersUrl = getMembersUrl(),
  homeHref = '/new',
}: MarketingFooterProps) {
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
              <a href={homeHref}>Home</a>
              <a href="/new" data-mkt-section="pricing">Pricing</a>
              <a href={membersUrl}>Member Portal</a>
            </div>
            <div className="fcol">
              <div className="fh">COMPANY</div>
              <a href="/new" data-mkt-section="team">About</a>
              <a href="mailto:support@gammastrat.com">Contact</a>
            </div>
            <div className="fcol">
              <div className="fh">RESOURCES</div>
              <a href="/new" data-mkt-section="reports">Reports</a>
              <a href="mailto:support@gammastrat.com">Support</a>
            </div>
            <div className="fcol">
              <div className="fh">LEGAL</div>
              <a href="/terms">Terms</a>
              <a href="/privacy">Privacy</a>
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
              involve substantial risk and are not suitable for all investors. An investor may lose
              all or more than their initial investment. Model assumptions, priors, and known
              limitations are disclosed within the reports themselves. All figures shown on this page
              are illustrative samples of report output.
            </p>
            <div className="copy">© {year} GAMMASTRAT, LLC · ALL RIGHTS RESERVED</div>
          </div>
        </div>
      </footer>

      <button id="toTop" className="totop" aria-label="Back to top" title="Back to top" type="button">
        ↑
      </button>
    </>
  )
}
