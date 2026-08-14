interface Person {
  className: string
  photo: string
  photoAlt: string
  name: string
  role: string
  now: string
  bios: React.ReactNode[]
  chips: string[]
}

const PEOPLE: Person[] = [
  {
    className: 'glenn',
    photo: '/marketing/headshot-david-glenn.jpg',
    photoAlt: 'Portrait of David Glenn',
    name: 'David Glenn',
    role: 'CO-FOUNDER',
    now: 'Founder & Managing Director · Western Heritage Capital, LLC',
    bios: [
      <>
        David Glenn has spent three decades managing capital and building businesses across the
        financial services industry. He is the founder and managing director of{' '}
        <b>Western Heritage Capital</b>, a Salt Lake City private investment firm that backs
        owner-operated companies across the Mountain West.
      </>,
      <>
        Before founding Western Heritage, David was a{' '}
        <b>Senior Managing Director and Investment Committee member at Cerberus Capital Management</b>,
        one of the world&apos;s largest alternative investment firms, where he led investments in
        financial services and insurance. Prior to Cerberus, he spent a decade as a{' '}
        <b>Partner and Investment Committee member at Lightyear Capital</b> (2001–2011), a
        private-equity firm focused exclusively on financial services and technology.
      </>,
      <>
        He serves on the BYU Marriott School of Business National Advisory Council and graduated from
        BYU in 1992.
      </>,
    ],
    chips: [
      'WESTERN HERITAGE CAPITAL',
      'CERBERUS CAPITAL MANAGEMENT',
      'LIGHTYEAR CAPITAL',
      'BYU MARRIOTT NAC',
      "B.A. BYU '92",
    ],
  },
  {
    className: 'shumway',
    photo: '/marketing/headshot-tyler-shumway.jpg',
    photoAlt: 'Portrait of Tyler Shumway',
    name: 'Tyler Shumway, Ph.D.',
    role: 'RESEARCH PARTNER',
    now: 'Professor of Finance · BYU Marriott School of Business',
    bios: [
      <>
        Tyler Shumway is one of the most cited academic researchers in the field of options pricing
        and financial economics. He is a Professor of Finance at BYU&apos;s Marriott School, where he
        holds the Georgia White Fellowship, and spent the prior 25 years at the{' '}
        <b>University of Michigan Ross School</b>, where he was named the John C. &amp; Sally S. Morley
        Professor of Finance in 2016.
      </>,
      <>
        His 2001 paper <i>&quot;Expected Option Returns&quot;</i> (with Joshua Coval, in the{' '}
        <b>Journal of Finance</b>) is foundational to modern options research — it established that
        options systematically earn returns inconsistent with standard asset-pricing theory, the finding
        that underpins GammaStrat&apos;s expected-value framework. His hazard model for bankruptcy
        prediction is among the most cited in corporate finance, and he received the{' '}
        <b>Smith-Breeden Prize</b> for the best investments paper in the Journal of Finance in 2005.
      </>,
      <>
        Tyler earned his Ph.D. from the University of Chicago Booth School of Business in 1996 and his
        B.A. in Economics from BYU in 1991.
      </>,
    ],
    chips: [
      'BYU MARRIOTT',
      'MICHIGAN ROSS · 25 YRS',
      'JOURNAL OF FINANCE',
      'SMITH-BREEDEN PRIZE',
      'CHICAGO BOOTH PH.D.',
    ],
  },
  {
    className: 'robbie',
    photo: '/marketing/headshot-robbie-glenn.jpg',
    photoAlt: 'Portrait of Robbie Glenn',
    name: 'Robbie Glenn',
    role: 'CO-FOUNDER',
    now: 'Head of Product · GammaStrat · BYU Marriott School of Business',
    bios: [
      <>
        Robbie Glenn is the architect of the GammaStrat platform. He built <b>every terminal</b> and
        the visual system behind the report suite — the screens subscribers use every morning. He is
        studying finance at <b>BYU&apos;s Marriott School of Business</b>.
      </>,
      <>
        Newer to options himself, Robbie designed the terminals for exactly that vantage point: keep
        all of the <b>high-level quantitative data</b> the research produces, but present it so a
        trader still learning the options market can absorb it quickly — rigorous underneath,
        digestible on the surface.
      </>,
      <>
        He started from a simple idea: most everyday traders aren&apos;t behind because they&apos;re
        less capable than the pros — they just never see the same data, or they get it in a form nobody
        can read. That&apos;s what the terminals are for. Robbie wanted the dealer-positioning data the
        big desks rely on to sit in front of a regular trader, in a form they can actually use, without
        cutting the depth that makes it worth having.
      </>,
    ],
    chips: ['GAMMASTRAT', 'BYU · FINANCE', 'BUILT EVERY TERMINAL'],
  },
]

export default function MarketingCredibility() {
  return (
    <>
      <section id="credibility">
        <div className="wrap">
          <div
            className="slabel rise"
            id="team"
            style={{ scrollMarginTop: 92 }}
          >
            <span className="n">05</span>THE TEAM
          </div>
          <h2 className="rise">Built by Experts in Options.</h2>
          <p className="lede rise">
            GammaStrat is anchored by two of them: a finance professor who has spent nearly three
            decades researching and teaching options pricing — including the foundational academic work
            on option returns — and an investor who spent three decades managing capital inside the
            institutions that trade them. The third founder&apos;s job was to take that expert-level
            research and put it in the hands of the newer trader — without losing any of its depth.
          </p>

          <div className="people" style={{ marginTop: 34 }}>
            {PEOPLE.map((person) => (
              <div className={`person ${person.className} rise`} key={person.name}>
                <div className="phead">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="pphoto"
                    src={person.photo}
                    alt={person.photoAlt}
                    width={56}
                    height={56}
                  />
                  <div className="phi">
                    <div className="pn">{person.name}</div>
                    <div className="prole">{person.role}</div>
                    <div className="pnow">{person.now}</div>
                  </div>
                </div>
                {person.bios.map((bio, i) => (
                  <p className="pbio" key={i}>
                    {bio}
                  </p>
                ))}
                <div className="pcreds-wrap">
                  <div className="pcreds">
                    {person.chips.map((chip) => (
                      <span className="pchip" key={chip}>
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="ppl-label rise" style={{ marginTop: 44 }}>
            THE PRINCIPLES
          </div>
          <div className="cgrid two" style={{ marginTop: 16 }}>
            <div className="cred rise">
              <div className="ck">THE MODELS</div>
              <h3>Quantitative, Disclosed, and Adversarially Tested</h3>
              <p>
                Every signal comes from a disclosed quantitative model. The assumptions, priors, and
                known limits are printed on the reports themselves. Not opinion. Not folklore. Method.
              </p>
            </div>
            <div className="cred rise">
              <div className="ck">THE LIMITS</div>
              <h3>Known Limits, Printed on the Page</h3>
              <p>
                We publish what the models can&apos;t do as clearly as we publish what they can. You
                can interrogate the research — that&apos;s the point of it.
              </p>
            </div>
          </div>

          <div className="ledger rise">
            <div className="ledcol yes">
              <div className="lh">✓ EVERY REPORT CARRIES</div>
              <ul>
                <li>
                  The models&apos; <b>assumptions and priors</b>, printed on the page
                </li>
                <li>
                  <b>Known limits</b> and failure modes, disclosed up front
                </li>
                <li>
                  <b>Probability, expected value, and confidence interval</b> on every read
                </li>
                <li>
                  <b>Plain-language interpretation</b> beside every number
                </li>
              </ul>
            </div>
            <div className="ledcol no">
              <div className="lh">✕ YOU WILL NEVER SEE</div>
              <ul>
                <li>
                  <b>Win rates or performance promises</b> — honest research can&apos;t offer them
                </li>
                <li>
                  <b>Guaranteed returns</b>, in any form
                </li>
                <li>
                  <b>Countdown timers or fake scarcity</b> — the research is the pitch
                </li>
                <li>
                  <b>Paid testimonials</b> or hired endorsements
                </li>
              </ul>
            </div>
            <div className="ledfoot">
              RESEARCH STANDS ON METHOD, NOT HYPE · GAMMASTRAT PUBLISHES RESEARCH — NOT INVESTMENT
              ADVICE
            </div>
          </div>
        </div>
      </section>

      <div className="glowline" aria-hidden="true" />
    </>
  )
}
