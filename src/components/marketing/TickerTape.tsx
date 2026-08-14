export default function TickerTape() {
  return (
    <div className="strip" aria-hidden="true"><div className="tape" id="tape">
      <div className="cell"><span className="k">SPX SPOT</span><span className="v">7,543.64</span></div>
      <div className="cell"><span className="k">VIX</span><span className="v">15.84</span></div>
      <div className="cell"><span className="k">SPX GAMMA IDX</span><span className="v up">+0.89 POS</span></div>
      <div className="cell"><span className="k">SPX TERM</span><span className="v am">CONTANGO</span></div>
      <div className="cell"><span className="k">SPX IV RANK</span><span className="v">12.9%</span></div>
      <div className="cell"><span className="k">P/C EV RATIO</span><span className="v am">12.71</span></div>
      <div className="cell"><span className="k">PUTS +EV</span><span className="v up">93%</span></div>
      <div className="cell"><span className="k">FLOW SHIFT</span><span className="v">0.79 LTD</span></div>
      <div className="cell"><span className="k">ATTRACTIVE POS</span><span className="v am">★ PUT CREDIT SPREADS</span></div>
      <div className="cell"><span className="k">QQQ PIN</span><span className="v">50.1 @ 720</span></div>
      <div className="cell"><span className="k">CALL SKEW</span><span className="v dn">VERY HIGH</span></div>
    </div></div>
  )
}
