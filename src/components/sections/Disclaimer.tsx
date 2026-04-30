const DEFAULT_DISCLAIMER = `This material has been prepared by GammaStrat, LLC ("GS") for informational and discussion purposes only and does not constitute investment advice, a recommendation, or an offer or solicitation to buy or sell any security, derivative, or financial instrument. GS is not an investment adviser, broker-dealer, or fiduciary and is not acting as an investment adviser, broker-dealer, or fiduciary in providing this material. GS does not purport to provide personalized investment advice or make specific investment recommendations. Nothing herein constitutes legal, tax, accounting, or investment advice.

The information contained herein is based on sources believed to be reliable; however, no representation or warranty, express or implied, is made as to its accuracy, completeness, or timeliness. All data is provided on a best-effort basis and may be subject to change without notice. GS undertakes no obligation to update or correct any information contained herein.

This material is provided solely for interpretative and educational purposes. The views and opinions expressed herein are those of GS as of the date of publication and are subject to change without notice. Such views may differ from those of other market participants and informational sources.

Investing and trading involve significant risk, including the potential loss of principal. Trading in equities, options and futures involves substantial risk and is not suitable for all investors. An investor may lose all or more than their initial investment. Only risk capital—funds that can be lost without jeopardizing financial security—should be used for trading. Leverage can amplify both gains and losses.

Recipients are solely responsible for evaluating the merits and risks of any investment or trading strategy and should consult their own financial, legal, and tax advisors before making any investment or trading decisions.

By accessing or using this material, you acknowledge and agree that GS, including without limitation its affiliates, members, officers, employees, and agents shall not be liable for any and all liability whatsoever relating to your use of this material, including without limitation any direct or indirect losses or damages arising from the use of, or reliance upon, the information contained herein. Trade and invest at your own risk.`

interface DisclaimerProps {
  text?: string
  visible?: boolean
}

export default function Disclaimer({ text, visible = true }: DisclaimerProps) {
  if (visible === false) return null

  const content = text || DEFAULT_DISCLAIMER
  const paragraphs = content.split('\n\n').filter(Boolean)

  return (
    <section
      style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        background: '#070910',
        padding: '3rem 2.5rem',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <p
          style={{
            fontSize: '0.6875rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.3)',
            marginBottom: '1.25rem',
          }}
        >
          Disclaimer
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
          {paragraphs.map((para, i) => (
            <p
              key={i}
              style={{
                fontSize: '0.6875rem',
                color: 'rgba(255,255,255,0.28)',
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {para.trim()}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
