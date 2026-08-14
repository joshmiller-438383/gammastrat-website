interface FaqItem {
  qn: string
  question: string
  answer: React.ReactNode
}

const FAQ_ITEMS: FaqItem[] = [
  {
    qn: 'Q01',
    question: 'What exactly is GammaStrat?',
    answer:
      "A subscription options-market research firm. Every trading day, before the open, we publish a suite of quantitative reports — dealer positioning, volatility regime, put/call flows, probability rankings, and relative-value migrations — plus interactive terminals that synthesize the day's research onto one screen. Every number is consistent across the entire suite. Every assumption is disclosed.",
  },
  {
    qn: 'Q02',
    question: 'Who is it for?',
    answer:
      'SPX and index options traders, volatility traders, premium sellers and spread traders — anyone who wants to understand the structural conditions the market is trading in before they size a position. If your process starts with "what is the options market actually pricing right now?", this was built for you. Futures traders and directional equity traders also use the gamma levels and volatility structure to inform entries and exits.',
  },
  {
    qn: 'Q03',
    question: 'How is this different from options flow scanners?',
    answer:
      "Flow scanners show you what was traded. We show you what it means. A large call sweep could be a bullish bet or a hedge against a short stock position — raw flow can't tell you which. GammaStrat runs the data through quantitative models to determine the volatility regime, dealer positioning, and probability surfaces. We give you the structural context, not just the tape.",
  },
  {
    qn: 'Q04',
    question: 'What does the research actually give me?',
    answer:
      'It tells you what the options market is pricing, where that pricing detaches from measured reality, and how much confidence each reading carries — probability, expected value, and confidence interval, with the assumptions and known limits printed on the report. What you do with it is your decision. We publish research, not investment advice.',
  },
  {
    qn: 'Q05',
    question: 'Do I need to be an options expert to use it?',
    answer:
      "You don't need to be an expert to start — but you will think like one quickly. Every report carries plain-language interpretation alongside the numbers, and the terminals explain what each mark means on hover. The research is designed to be rigorous and readable at the same time.",
  },
  {
    qn: 'Q06',
    question: 'How often is everything updated?',
    answer:
      "Every trading day, before the open. Each report reflects the latest options positioning, current volatility conditions, and updated probability rankings. The terminals redraw from that day's reports.",
  },
  {
    qn: 'Q07',
    question: 'What markets are covered?',
    answer:
      'SPX, QQQ, GLD, TLT, major liquid equities, and volatility products (VIX, VVIX). The full ranked universe runs approximately 80 tickers. The Gamma tier covers all of them.',
  },
  {
    qn: 'Q08',
    question: 'Can I see it before paying?',
    answer: (
      <>
        Two ways.{' '}
        <a href="#terminals">Sample reports</a> are available now at no cost — see exactly what lands
        on the desk each morning. The <b>Free Trial</b> is 14 days of the real daily product,
        including the Alpha Terminal. It is deliberately a taste of paid content, not a stripped demo.
      </>
    ),
  },
  {
    qn: 'Q09',
    question: "Why don't you publish win rates or performance numbers?",
    answer:
      'Because honest research cannot promise outcomes — and performance marketing is the single most reliable red flag for an untrustworthy research service. We publish method: probability, expected value, confidence interval, and the assumptions behind each of them, printed on the report. The research argues from evidence. You judge it on substance, every morning of the trial.',
  },
  {
    qn: 'Q10',
    question: 'How quickly can I start?',
    answer:
      "Immediately. Sign up and the current day's reports and terminal are on your screen. New research arrives every trading day from then on.",
  },
  {
    qn: 'Q11',
    question: 'How does billing work?',
    answer:
      'Monthly or annual, your choice. Alpha is $90/month (three-month minimum on monthly billing) or $1,000/year. Delta is $135/month or $1,500/year. Gamma is $180/month or $2,000/year. Tiers are cumulative — each includes everything below it. You can cancel anytime. Dealer Positioning Daily is an optional upgrade: $300/year on Alpha, $200/year on Delta, and included free with Gamma.',
  },
  {
    qn: 'Q12',
    question: 'What is Dealer Positioning Daily?',
    answer:
      'A standalone platform — one screen per ticker, across the full ~80-name universe — showing where dealers are positioned and what their hedging mechanics imply. It maps the GEX-by-strike profile, tracks day-over-day migration, and reads key structural levels directly from the net GEX curve: the gamma flip, zero-GEX, and max ±GEX strikes. Alpha and Delta subscribers can add it for $300/year or $200/year respectively. Gamma includes it.',
  },
]

export default function MarketingFAQ() {
  return (
    <section id="faq" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="slabel rise" style={{ textAlign: 'center' }}>
          <span className="n">07</span>QUESTIONS
        </div>
        <h2 className="rise" style={{ textAlign: 'center' }}>
          Frequently Asked
        </h2>
        <div className="faqwrap">
          {FAQ_ITEMS.map((item) => (
            <details className="rise" key={item.qn}>
              <summary>
                <span className="qn">{item.qn}</span>
                {item.question}
                <span className="caret">▸</span>
              </summary>
              <div className="ans">{item.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
