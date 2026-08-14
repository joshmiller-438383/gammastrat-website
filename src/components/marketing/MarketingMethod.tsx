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

interface MarketingMethodProps {
  /** Continues the story into terminals until a dedicated method page exists */
  learnMoreHref?: string
}

export default function MarketingMethod({
  learnMoreHref = '#terminals',
}: MarketingMethodProps) {
  return (
    <section id="method" className="method">
      <div className="wrap grid">
        <div>
          <div className="slabel rise">
            <span className="n">02</span>THE METHOD
          </div>
          <h2 className="rise">The Options Market Tells You What&apos;s Coming. We Translate It.</h2>
          <p className="lede rise">
            Institutions don&apos;t trade the chart — they trade the conditions around it. Where
            dealers are positioned. What volatility costs versus what it&apos;s worth. Which
            strategies the current regime favors. GammaStrat answers those questions every morning,
            in <b>plain numbers</b>, with every assumption disclosed on the page.
          </p>
          <p className="lede rise" style={{ marginTop: 14 }}>
            Every reading arrives with its probability, its expected value, and its confidence
            interval. Every model&apos;s known limits are printed on the report. This is research you
            can interrogate — not a feed of opinions, not a list of alerts, and not a service that
            profits from your activity.
          </p>
          <a className="mlink rise" href={learnMoreHref}>
            HOW THE METHOD WORKS<span className="ar">→</span>
          </a>
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
