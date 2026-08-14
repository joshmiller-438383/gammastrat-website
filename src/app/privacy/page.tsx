import type { Metadata } from 'next'
import MarketingLegalShell from '@/components/marketing/MarketingLegalShell'

export const metadata: Metadata = {
  title: 'Privacy Policy — GammaStrat',
  description: 'How GammaStrat collects, uses, and protects your personal information.',
}

export default function PrivacyPage() {
  return (
    <MarketingLegalShell title="Privacy Policy" updated="August 14, 2026">
      <p>
        GammaStrat, LLC (&ldquo;GammaStrat,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
        &ldquo;our&rdquo;) respects your privacy. This Privacy Policy explains how we collect, use,
        disclose, and safeguard information when you visit our website, subscribe to our research,
        or use the member portal.
      </p>

      <h2>1. Information We Collect</h2>
      <p>We may collect the following categories of information:</p>
      <ul>
        <li>
          <strong>Account &amp; contact information:</strong> name, email address, and credentials
          used to access the member portal
        </li>
        <li>
          <strong>Billing information:</strong> payment and subscription details processed by Stripe
          (we do not store full payment card numbers on our servers)
        </li>
        <li>
          <strong>Usage information:</strong> pages viewed, features accessed, report views, device
          type, browser, IP address, and approximate location derived from IP
        </li>
        <li>
          <strong>Communications:</strong> messages you send to support, feedback, or survey responses
        </li>
        <li>
          <strong>Cookies &amp; similar technologies:</strong> session identifiers and analytics data
          as described below
        </li>
      </ul>

      <h2>2. How We Use Information</h2>
      <p>We use collected information to:</p>
      <ul>
        <li>Provide, maintain, and improve the Services and member portal</li>
        <li>Process subscriptions, trials, and billing through Stripe</li>
        <li>Authenticate users and prevent fraud or unauthorized access</li>
        <li>Send service-related emails (account access, billing receipts, product updates)</li>
        <li>Respond to support requests and communicate about your account</li>
        <li>Analyze aggregate usage to improve reports, terminals, and site performance</li>
        <li>Comply with legal obligations and enforce our Terms of Service</li>
      </ul>
      <p>
        We do not sell your personal information. We may send marketing communications where
        permitted by law; you may opt out using unsubscribe links or by contacting support.
      </p>

      <h2>3. Payment Processing</h2>
      <p>
        Subscription payments are handled by{' '}
        <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">
          Stripe, Inc.
        </a>
        Stripe collects and processes payment information according to its own privacy policy. We
        receive limited billing metadata (such as customer ID, subscription status, and last four
        digits of card) necessary to manage your account.
      </p>

      <h2>4. Sharing of Information</h2>
      <p>We may share information with:</p>
      <ul>
        <li>
          <strong>Service providers</strong> who assist with hosting, email delivery, analytics,
          customer support, and payment processing — under contractual confidentiality obligations
        </li>
        <li>
          <strong>Professional advisors</strong> (legal, accounting) where necessary
        </li>
        <li>
          <strong>Law enforcement or regulators</strong> when required by law or to protect rights,
          safety, and security
        </li>
        <li>
          <strong>Business transfers</strong> in connection with a merger, acquisition, or sale of
          assets, with notice where required
        </li>
      </ul>

      <h2>5. Cookies &amp; Analytics</h2>
      <p>
        We use cookies and similar technologies to keep you signed in, remember preferences, and
        understand how visitors use our site. You can control cookies through your browser settings;
        disabling cookies may limit certain features of the Services.
      </p>
      <p>
        We may use third-party analytics tools that collect aggregated, de-identified usage data.
      </p>

      <h2>6. Data Retention</h2>
      <p>
        We retain personal information for as long as your account is active or as needed to provide
        the Services, comply with legal obligations, resolve disputes, and enforce agreements.
        Billing records may be retained as required for tax and accounting purposes.
      </p>

      <h2>7. Security</h2>
      <p>
        We implement reasonable administrative, technical, and organizational measures to protect
        your information. No method of transmission or storage is completely secure; we cannot
        guarantee absolute security.
      </p>

      <h2>8. Your Rights &amp; Choices</h2>
      <p>
        Depending on your location, you may have rights to access, correct, delete, or restrict
        processing of your personal information, or to data portability. To exercise these rights,
        contact{' '}
        <a href="mailto:support@gammastrat.com">support@gammastrat.com</a>. We will respond in
        accordance with applicable law.
      </p>
      <p>
        California residents may have additional rights under the CCPA/CPRA. EU/UK residents may have
        rights under GDPR — contact us for details on lawful bases and cross-border transfers.
      </p>

      <h2>9. Children</h2>
      <p>
        The Services are not directed to individuals under 18. We do not knowingly collect personal
        information from children. Contact us if you believe we have collected such information.
      </p>

      <h2>10. International Users</h2>
      <p>
        GammaStrat is based in the United States. If you access the Services from outside the U.S.,
        your information may be transferred to and processed in the U.S. or other countries with
        different data protection laws.
      </p>

      <h2>11. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The &ldquo;Last updated&rdquo; date at
        the top reflects the latest revision. Continued use of the Services after changes constitutes
        acceptance of the updated policy.
      </p>

      <h2>12. Contact</h2>
      <p>
        Privacy questions or requests:{' '}
        <a href="mailto:support@gammastrat.com">support@gammastrat.com</a>
      </p>
      <p>GammaStrat, LLC</p>
    </MarketingLegalShell>
  )
}
