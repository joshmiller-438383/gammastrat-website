import type { Metadata } from 'next'
import MarketingLegalShell from '@/components/marketing/MarketingLegalShell'

export const metadata: Metadata = {
  title: 'Disclaimer — GammaStrat',
  description:
    'Legal disclaimer for GammaStrat research and analytics. Informational purposes only — not investment advice.',
}

export default function DisclaimerPage() {
  return (
    <MarketingLegalShell title="Disclaimer" updated="August 28, 2026">
      <p>
        This material has been prepared by GammaStrat, LLC (&ldquo;GS&rdquo;) for informational and
        discussion purposes only and does not constitute investment advice, a recommendation, or an
        offer or solicitation to buy or sell any security, derivative, or financial instrument. GS is
        not an investment adviser, broker-dealer, or fiduciary and is not acting as an investment
        adviser, broker-dealer, or fiduciary in providing this material. GS does not purport to
        provide personalized investment advice or make specific investment recommendations. Nothing
        herein constitutes legal, tax, accounting, or investment advice.
      </p>

      <p>
        The information contained herein is based on sources believed to be reliable; however, no
        representation or warranty, express or implied, is made as to its accuracy, completeness, or
        timeliness. All data is provided on a best-effort basis and may be subject to change without
        notice. GS undertakes no obligation to update or correct any information contained herein.
      </p>

      <p>
        This material is provided solely for interpretative and educational purposes. The views and
        opinions expressed herein are those of GS as of the date of publication and are subject to
        change without notice. Such views may differ from those of other market participants and
        informational sources.
      </p>

      <p>
        Investing and trading involve significant risk, including the potential loss of principal.
        Trading in equities, options and futures involves substantial risk and is not suitable for
        all investors. An investor may lose all or more than their initial investment. Only risk
        capital—funds that can be lost without jeopardizing financial security—should be used for
        trading. Leverage can amplify both gains and losses.
      </p>

      <p>
        Recipients are solely responsible for evaluating the merits and risks of any investment or
        trading strategy and should consult their own financial, legal, and tax advisors before making
        any investment or trading decisions.
      </p>

      <p>
        By accessing or using this material, you acknowledge and agree that GS, including without
        limitation its affiliates, members, officers, employees, and agents shall not be liable for
        any and all liability whatsoever relating to your use of this material, including without
        limitation any direct or indirect losses or damages arising from the use of, or reliance upon,
        the information contained herein. Trade and invest at your own risk.
      </p>
    </MarketingLegalShell>
  )
}
