const BUILT_FOR = [
  'SPX TRADERS',
  'VOLATILITY SPECIALISTS',
  'SPREAD TRADERS',
  'PREMIUM SELLERS',
  'INDEX OPTIONS',
  'SELF-DIRECTED TRADERS',
  'FUTURES TRADERS',
] as const

const PAIN_POINTS = [
  {
    tag: 'BLIND SPOT 01',
    title: 'Invisible Dealer Mechanics',
    body: 'Market makers want to earn spreads, not take market risk. They hedge their options book on a near continuous basis. Positive gamma hedging dampens market volatility and pins price near key strikes. Negative gamma hedging amplifies directional market moves. If you don\'t know which gamma regime you\'re in, you\'re trading blind.',
  },
  {
    tag: 'BLIND SPOT 02',
    title: 'Mispriced Volatility',
    body: 'Every option carries a built-in forecast: what the market thinks volatility will be. When that forecast drifts from what actually happens, one side of every trade is quietly overpriced and the other underpriced. A price chart can\'t show you that gap. Our models are built to find it.',
  },
  {
    tag: 'BLIND SPOT 03',
    title: 'Noise Without Context',
    body: 'The retail market is flooded with \'unusual flow\' alerts. But a $50 million call sweep could be a speculative directional bet, or it could be a hedge against a massive short position. Raw flow without structural context is not intelligence. It\'s noise dressed up as signal.',
  },
] as const

export default function MarketingEdge() {
  return (
    <section id="edge">
      <div className="wrap">
        <div className="slabel rise">
          <span className="n">01</span>THE PROBLEM
        </div>
        <h2 className="rise">Trading Blind Is Expensive.</h2>
        <p className="lede rise">
          Price is the output. By the time the chart moves, the positioning in the market that forecasted
          the move was already visible in the options market. Most traders never see it, and if they do see
          it, they don&apos;t interpret it properly. That gap is costing them.
        </p>

        <div className="p3">
          {PAIN_POINTS.map((item) => (
            <div className="pain rise" key={item.tag}>
              <div className="pk">{item.tag}</div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>

        <div className="causeband rise" role="presentation">
          <div className="half price">
            <div className="big">PRICE</div>
            <div className="small">THE EFFECT — WHAT EVERYONE WATCHES</div>
          </div>
          <div className="vs">VS</div>
          <div className="half pos">
            <div className="big">POSITIONING</div>
            <div className="small">THE CAUSE — WHAT WE MEASURE</div>
          </div>
        </div>

        <div className="builtfor rise" aria-label="Who GammaStrat is built for">
          <span className="bl">BUILT FOR</span>
          {BUILT_FOR.map((label) => (
            <span className="bfc" key={label}>
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
