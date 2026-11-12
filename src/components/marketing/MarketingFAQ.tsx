import { MARKETING_ROUTES } from '@/lib/marketingRoutes'

interface FaqItem {
  question: string
  answer: React.ReactNode
}

const FAQ_LEFT: FaqItem[] = [
  {
    question: 'What is GammaStrat?',
    answer:
      'An options-market research platform with daily reports and interactive terminals covering positioning, volatility regimes and potential pricing dislocations. Research only—not investment advice.',
  },
  {
    question: 'Who is it for?',
    answer:
      'Self-directed traders who want a structured view of options markets: index and futures traders, volatility specialists, spread traders and premium sellers.',
  },
  {
    question: 'How is it different from a flow scanner?',
    answer:
      'Flow shows transactions. GammaStrat puts market positioning, volatility, probability and expected value into a broader model-based context. It is not an unusual-activity alert feed.',
  },
  {
    question: 'What research do I receive?',
    answer:
      'Depending on your tier, 5 to 24 daily reports, terminal access and cumulative research coverage. Paid tiers also receive the State of the Markets email newsletter.',
  },
  {
    question: 'Do I need to be an options expert?',
    answer:
      'No. Plain-language interpretation and readable graphics explain the quantitative models. Familiarity with basic options concepts helps; the research does not replace your own due diligence.',
  },
  {
    question: 'When is the research updated?',
    answer:
      'Every trading day, before the open. These are daily research snapshots—not a real-time market-data service.',
  },
]

const FAQ_RIGHT: FaqItem[] = [
  {
    question: 'Which markets are covered?',
    answer:
      'Approximately 80 benchmarks, ETFs and securities. Coverage spans major indices, sectors and individual names, with depth and access depending on the research tier.',
  },
  {
    question: 'Can I see samples before subscribing?',
    answer: (
      <>
        Yes. View the{' '}
        <a href={MARKETING_ROUTES.dailySamples}>daily samples</a> or begin a 14-day free trial with 5
        reports and the Alpha Terminal. Sample analytics are illustrative, not live data.
      </>
    ),
  },
  {
    question: 'Do you promise performance or win rates?',
    answer:
      'No. No guaranteed returns or promised win rates. Model outputs depend on assumptions and can be wrong. Options involve substantial risk, including loss of principal.',
  },
  {
    question: 'How quickly can I get access?',
    answer:
      'Access is immediate after signup. Open the member portal to read the available daily reports and start exploring the Alpha Terminal during your trial.',
  },
  {
    question: 'How does billing and cancellation work?',
    answer:
      'Monthly and annual plans are available. Annual plans are billed upfront. Cancel anytime; Alpha monthly has a three-month minimum. See the plan details on the pricing page for exact prices.',
  },
  {
    question: 'Is Dealer Positioning Daily included?',
    answer:
      'It is included in Gamma. Alpha members can add the dealer map for $300/year and Delta members for $200/year. The standalone platform covers approximately 80 tickers.',
  },
]

function FaqColumn({ items }: { items: FaqItem[] }) {
  return (
    <div className="faqcol">
      {items.map((item) => (
        <details className="faq-item rise" key={item.question}>
          <summary>
            <span className="faq-q">{item.question}</span>
            <span className="faq-icon" aria-hidden="true">
              +
            </span>
          </summary>
          <div className="ans">{item.answer}</div>
        </details>
      ))}
    </div>
  )
}

export default function MarketingFAQ() {
  return (
    <section id="faq" className="faq-section">
      <div className="wrap">
        <div className="slabel rise">
          <span className="n">08</span>QUESTIONS
        </div>
        <h2 className="rise">Frequently Asked</h2>
        <div className="faqwrap rise">
          <FaqColumn items={FAQ_LEFT} />
          <FaqColumn items={FAQ_RIGHT} />
        </div>
      </div>
    </section>
  )
}
