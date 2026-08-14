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
    body: "When market makers accumulate large gamma positions, they are forced to hedge. In positive gamma regimes, that hedging dampens volatility and pins price near key strikes. In negative gamma, it amplifies every move. If you don't know which regime you're in, you're trading blind.",
  },
  {
    tag: 'BLIND SPOT 02',
    title: 'Mispriced Volatility',
    body: "Every option is a market's price on future movement. When implied volatility detaches from measured reality, one side of the trade is structurally cheap and the other is structurally expensive. That mispricing is invisible on a price chart — and it's exactly what we measure.",
  },
  {
    tag: 'BLIND SPOT 03',
    title: 'Noise Without Context',
    body: 'The retail market is flooded with "unusual flow" alerts. But a $50 million call sweep could be a directional bet — or a hedge against a massive short position. Raw flow without structural context is not intelligence. It\'s noise dressed up as signal.',
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
          Price is the output. By the time the chart moves, the positioning that forced the move was
          already visible in the options market. Most traders never see it — and that gap is costing
          them.
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
