const BRIEF_CARDS = [
  {
    title: 'SENTIMENT GAUGE',
    date: 'FRI 10 JUL',
    body: (
      <>
        Five of six dials calm; the outlier is <b>call skew — very high</b>. Upside being chased while
        volatility sleeps. Complacency risk.
      </>
    ),
  },
  {
    title: 'DAILY OPTIONS ACTIVITY',
    date: 'FRI 10 JUL',
    body: (
      <>
        Puts <b>93% +EV</b>, calls 7% — protection cheap, upside overbid. Downside scenarios
        underpriced +1.29pp on average.
      </>
    ),
  },
  {
    title: 'VOLATILITY CURVE',
    date: 'THU 16 JUL',
    body: (
      <>
        Contango slope <b>+7.26 — calm priced forward</b> — but every tenor repriced lower on the day:
        near-term fear coming out fastest.
      </>
    ),
  },
  {
    title: 'MARKET RISK REWARD ANALYSIS',
    date: 'THU 16 JUL',
    body: (
      <>
        <b>1,460 opportunities</b> re-ranked overnight — market efficiency LOW, two tradeable
        dislocations flagged.
      </>
    ),
  },
] as const

export default function MarketingDailySamples() {
  return (
    <section id="daily-samples" className="method">
      <div className="wrap">
        <div className="slabel rise">
          <span className="n">05</span>DAILY SAMPLES
        </div>
        <p className="lede rise daily-samples-intro">
          You can get an idea of the quality of our daily subscription reports and dashboards by clicking on
          the actual report samples below. These reports and dashboards will be made available to you with the
          same format each morning, but the analysis and market data are updated after each trading day.
        </p>
        <div className="rise" style={{ marginTop: 32 }}>
          <div className="rstack-label">THE MORNING BRIEF · EVERY TRADING DAY · BEFORE THE OPEN</div>
          <div className="rstack daily-samples-stack">
            {BRIEF_CARDS.map((card) => (
              <div className="rcard" key={card.title}>
                <div className="rh">
                  <span className="rn">{card.title}</span>
                  <span className="chip m" style={{ marginLeft: 0 }}>
                    SAMPLE
                  </span>
                  <span className="rd">{card.date}</span>
                </div>
                <div className="rb">{card.body}</div>
              </div>
            ))}
          </div>
          <div className="rstack-foot">
            FOUR OF 24 DAILY REPORTS · ASSUMPTIONS &amp; LIMITS DISCLOSED ON EVERY PAGE
          </div>
        </div>
      </div>
    </section>
  )
}
