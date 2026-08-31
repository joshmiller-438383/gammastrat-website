import type { Metadata } from 'next'
import MarketingLegalShell from '@/components/marketing/MarketingLegalShell'

export const metadata: Metadata = {
  title: 'Terms of Service — GammaStrat',
  description:
    'Terms of Service for GammaStrat research subscriptions. Informational purposes only — not investment advice.',
}

export default function TermsPage() {
  return (
    <MarketingLegalShell title="Terms of Service" updated="August 27, 2026">
      <div className="legal-callout">
        FOR INFORMATIONAL PURPOSES ONLY. NOT INVESTMENT ADVICE. GammaStrat publishes research and
        analytics — not recommendations to buy or sell any security or derivative.
      </div>

      <h2>1. Agreement</h2>
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the GammaStrat
        website, member portal, research reports, terminals, and related subscription services
        (collectively, the &ldquo;Services&rdquo;) operated by GammaStrat, LLC (&ldquo;GammaStrat,&rdquo;
        &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By accessing the Services or
        completing a subscription purchase, you agree to these Terms.
      </p>
      <p>
        If you do not agree, do not use the Services. We may update these Terms from time to time;
        material changes will be posted on this page with an updated date.
      </p>

      <h2>2. Nature of the Services — Not Investment Advice</h2>
      <p>
        GammaStrat provides informational and educational research regarding options markets,
        volatility, dealer positioning, and related analytics. Nothing in the Services constitutes
        investment advice, a recommendation, tax advice, or an offer or solicitation to buy or sell
        any security, derivative, or financial instrument.
      </p>
      <p>
        GammaStrat is not registered as an investment adviser, broker-dealer, or fiduciary. You are
        solely responsible for your own investment decisions. Past performance, model outputs, and
        illustrative figures do not guarantee future results.
      </p>

      <h2>3. Eligibility &amp; Accounts</h2>
      <p>
        You must be at least 18 years old and capable of entering a binding contract to use the
        Services. You are responsible for maintaining the confidentiality of your member portal
        credentials and for all activity under your account. Notify us promptly at{' '}
        <a href="mailto:support@gammastrat.com">support@gammastrat.com</a> if you suspect
        unauthorized access.
      </p>

      <h2>4. Subscriptions, Billing &amp; Cancellation</h2>
      <p>
        Paid subscriptions are billed through Stripe on a recurring basis (monthly or annual, as
        selected at checkout) unless otherwise stated. By subscribing, you authorize us and our
        payment processor to charge your payment method on a recurring basis.
      </p>
      <ul>
        <li>
          <strong>Free trial:</strong> Where offered, trial terms and conversion to paid billing are
          disclosed at checkout.
        </li>
        <li>
          <strong>Alpha (monthly):</strong> A minimum three-month commitment may apply to monthly
          Alpha billing, as disclosed on the pricing page.
        </li>
        <li>
          <strong>Annual plans:</strong> Billed upfront for the full term unless otherwise stated.
        </li>
        <li>
          <strong>Cancellation:</strong> You may cancel at any time through your account or by
          contacting support. Cancellation stops future billing; access continues through the end of
          the current paid period unless otherwise required by law.
        </li>
      </ul>
      <p>
        Prices, tiers, and features may change with notice. Tier upgrades are cumulative as described
        on our pricing page. Refunds are handled in accordance with applicable law and our billing
        policies in effect at the time of purchase.
      </p>

      <h2>5. Restricted Use of Information</h2>
      <p>
        Your subscription grants you a limited license to access and use GammaStrat content for your
        own personal or internal business purposes only. You may not resell, redistribute, sublicense,
        or otherwise make available any research, data, reports, terminal output, or other information
        obtained through the Services to any third party, whether for a fee or otherwise.
      </p>
      <p>
        You may not use GammaStrat information — in whole or in part — as the basis for, or as a
        component of, any product or service that you offer for sale or commercial distribution,
        including derivative works, data feeds, newsletters, advisory products, or similar offerings.
        Any unauthorized commercial use of our information may result in immediate suspension or
        termination of your access and may expose you to legal liability.
      </p>

      <h2>6. Data Sources &amp; Accuracy</h2>
      <p>
        GammaStrat&apos;s research, reports, terminals, and analytics incorporate data obtained from
        third-party sources that we believe to be reliable. We do not independently verify all such
        data and make no representation or warranty that any information provided through the Services
        is complete, current, or free from error at all times.
      </p>
      <p>
        You acknowledge that market data, pricing, positioning, and other third-party information may
        be delayed, incomplete, or inaccurate, and that GammaStrat is not responsible for any errors,
        omissions, or inaccuracies in such data or in any content derived from it. Any reliance on the
        Services or on third-party data is at your sole risk.
      </p>

      <h2>7. Acceptable Use</h2>
      <p>In addition to the restrictions in Section 5, you agree not to:</p>
      <ul>
        <li>Scrape or publicly republish research, data, or terminal output</li>
        <li>Reverse engineer, circumvent access controls, or share login credentials</li>
        <li>Use the Services for unlawful purposes or market manipulation</li>
        <li>Misrepresent GammaStrat content as personalized advice to third parties</li>
      </ul>
      <p>
        We may suspend or terminate access for violations of these Terms or conduct that harms
        GammaStrat, other members, or the integrity of the Services.
      </p>

      <h2>8. Intellectual Property</h2>
      <p>
        All content, reports, terminals, branding, software, and methodologies are owned by
        GammaStrat or its licensors and protected by intellectual property laws. Your subscription
        grants the limited license described in Section 5.
      </p>

      <h2>9. Disclaimers</h2>
      <p>
        THE SERVICES ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES
        OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
        AND NON-INFRINGEMENT. We do not warrant uninterrupted access, error-free delivery, or that
        research outputs will meet your trading objectives.
      </p>
      <p>
        Model assumptions, priors, data limitations, and known constraints are disclosed within
        reports where applicable. You acknowledge that options trading involves substantial risk,
        including the possible loss of principal.
      </p>

      <h2>10. Limitation of Liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, GAMMASTRAT AND ITS OFFICERS, EMPLOYEES, AND AFFILIATES
        SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
        OR ANY LOSS OF PROFITS, DATA, OR TRADING LOSSES, ARISING FROM YOUR USE OF OR RELIANCE ON THE
        SERVICES — EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
      </p>
      <p>
        Our aggregate liability for any claim relating to the Services shall not exceed the greater of
        (a) amounts you paid to GammaStrat in the twelve months preceding the claim, or (b) one
        hundred U.S. dollars ($100).
      </p>

      <h2>11. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless GammaStrat from claims, damages, and expenses
        (including reasonable attorneys&apos; fees) arising from your use of the Services, violation
        of these Terms, or infringement of any third-party rights.
      </p>

      <h2>12. Governing Law &amp; Disputes</h2>
      <p>
        These Terms are governed by the laws of the State of Delaware, USA, without regard to
        conflict-of-law principles. Any dispute shall be resolved in the state or federal courts
        located in Delaware, unless otherwise required by applicable consumer protection law.
      </p>

      <h2>13. Contact</h2>
      <p>
        Questions about these Terms:{' '}
        <a href="mailto:support@gammastrat.com">support@gammastrat.com</a>
      </p>
      <p>GammaStrat, LLC</p>
    </MarketingLegalShell>
  )
}
