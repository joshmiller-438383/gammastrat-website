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

export default function MarketingMethod() {
  return (
    <section id="method" className="method">
      <div className="wrap grid">
        <div>
          <div className="slabel rise">
            <span className="n">02</span>THE METHOD
          </div>
          <h2 className="rise">
            Options theory is highly mathematical. Understanding it doesn&apos;t have to be.
          </h2>
          <p className="lede rise">
            GammaStrat&apos;s proprietary reports and dashboard terminals consolidate and present the math
            and algorithms that are the essential building blocks for successful options trading into a
            simple, intuitive format that takes less than a minute to review before the market opens.
          </p>
          <p className="lede rise" style={{ marginTop: 14 }}>
            GammaStrat&apos;s reports and terminals are written in plain language and displayed with
            powerful but readable graphics, demystifying the options market and providing a supportive
            daily trading roadmap.
          </p>
          <p className="lede rise" style={{ marginTop: 14 }}>
            Users report that they are highly satisfied with the portal, and that they engage regularly
            with the data because it is easy to use and digest.
          </p>
        </div>

        <div className="rise">
          <div className="rstack-label">THE MORNING BRIEF · EVERY TRADING DAY · BEFORE THE OPEN</div>
          <div className="rstack">
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
