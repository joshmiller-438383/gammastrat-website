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
          <h2 className="rise">There&apos;s Math Behind Every Move. We Make It Legible.</h2>
          <p className="lede rise">
            Raw options data and published pricing research point toward what&apos;s coming, but neither
            is built to be read in the five minutes before the market opens. GammaStrat makes that research
            approachable and actionable by translating it into a daily suite of reports, each one built
            around the same underlying models but written in plain language. You&apos;ll find them just as
            useful whether you&apos;re learning options for the first time or running a full volatility
            book.
          </p>
          <p className="lede rise" style={{ marginTop: 14 }}>
            What you won&apos;t find in any of those reports is just as deliberate as what you will. No
            win-rate claims. No countdown timers or fake urgency. No paid testimonials. Nothing built to
            get you trading more often than the data warrants. If a reading isn&apos;t exciting that
            morning, it still gets printed exactly as the model found it. The reports provide a consistent
            market read day after day.
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
