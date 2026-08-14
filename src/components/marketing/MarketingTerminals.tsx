/* eslint-disable @next/next/no-img-element */
import MarketingCheckoutButton from '@/components/marketing/MarketingCheckoutButton'

export default function MarketingTerminals() {
  return (
<section id="terminals">
  <div className="wrap">
    <div className="slabel rise"><span className="n">03</span>THE TERMINALS</div>
    <h2 className="rise">This Is What Your Morning Looks Like.</h2>
    <p className="lede rise">Every subscription tier ends in an interactive terminal — a Bloomberg-style desk
      where every figure is drawn from that day's reports, every number is consistent across the entire
      suite, and every mark traces back to the quantitative model that generated it. This is the product.
      Not a chart pack.</p>

    
    <div className="feat" id="feat-gamma">
      <div className="mockcol rise">
        <div className="term bigterm goldt" aria-label="Sample view of the GammaStrat Gamma Terminal">
          <div className="goldbar"></div>
          <div className="tmast goldtop">
            <div>
              <div className="t1">GAMMA <b className="g">TERMINAL</b></div>
              <div className="t2" style={{color: 'var(--gold)'}}>ELEVEN REPORTS · 80 TICKERS · THE FULL DESK ON ONE SCREEN</div>
            </div>
            <div className="right"><span className="date" style={{color: 'var(--gold)'}}>THU 16 JUL</span><span className="chip g">GAMMA</span><span className="chip m">SAMPLE</span></div>
          </div>
          <div className="cols2">
            <div className="col">
              <div className="ph"><span className="n">01</span><span className="t" style={{color: 'var(--gold)'}}>UNIVERSE SENTIMENT — 80 SQUARES</span><span className="s">TICKER SENTIMENT · 52% BULL</span></div>
              <div className="heat2" aria-hidden="true">
                <span className="hc" style={{'--d': '.02s', background: 'rgba(0,214,11,.55)'}}>SPX</span>
                <span className="hc" style={{'--d': '.04s', background: 'rgba(255,47,47,.4)'}}>QQQ</span>
                <span className="hc" style={{'--d': '.06s', background: 'rgba(0,214,11,.7)'}}>NVDA</span>
                <span className="hc" style={{'--d': '.08s', background: 'rgba(0,214,11,.3)'}}>AAPL</span>
                <span className="hc" style={{'--d': '.10s', background: 'rgba(255,47,47,.55)'}}>TSLA</span>
                <span className="hc" style={{'--d': '.12s', background: 'rgba(0,214,11,.4)'}}>MSFT</span>
                <span className="hc" style={{'--d': '.14s', background: 'rgba(255,47,47,.3)'}}>META</span>
                <span className="hc" style={{'--d': '.16s', background: 'rgba(0,214,11,.6)'}}>ARM</span>
                <span className="hc" style={{'--d': '.18s', background: 'rgba(139,142,149,.28)'}}>AMZN</span>
                <span className="hc" style={{'--d': '.20s', background: 'rgba(255,47,47,.45)'}}>TLT</span>
                <span className="hc" style={{'--d': '.22s', background: 'rgba(0,214,11,.5)'}}>XLU</span>
                <span className="hc" style={{'--d': '.24s', background: 'rgba(139,142,149,.28)'}}>GLD</span>
                <span className="hc" style={{'--d': '.26s', background: 'rgba(0,214,11,.35)'}}>JPM</span>
                <span className="hc" style={{'--d': '.28s', background: 'rgba(255,47,47,.6)'}}>TJX</span>
                <span className="hc" style={{'--d': '.30s', background: 'rgba(0,214,11,.45)'}}>XLE</span>
                <span className="hc" style={{'--d': '.32s', background: 'rgba(255,47,47,.35)'}}>WMT</span>
                <span className="hc" style={{'--d': '.34s', background: 'rgba(0,214,11,.3)'}}>AMD</span>
                <span className="hc" style={{'--d': '.36s', background: 'rgba(0,214,11,.65)'}}>XHB</span>
                <span className="hc" style={{'--d': '.38s', background: 'rgba(255,47,47,.28)'}}>XLC</span>
                <span className="hc" style={{'--d': '.40s', background: 'rgba(0,214,11,.4)'}}>IWM</span>
                <span className="hc" style={{'--d': '.42s', background: 'rgba(255,47,47,.5)'}}>XLY</span>
                <span className="hc" style={{'--d': '.44s', background: 'rgba(139,142,149,.28)'}}>AXP</span>
                <span className="hc" style={{'--d': '.46s', background: 'rgba(0,214,11,.5)'}}>AVGO</span>
                <span className="hc" style={{'--d': '.48s', background: 'rgba(255,47,47,.32)'}}>XLB</span>
              </div>
              <div className="ph"><span className="n">02</span><span className="t" style={{color: 'var(--gold)'}}>MARKET DEMAND GAUGES</span><span className="s">DEMAND HEATMAP · 80 NAMES</span></div>
              <div className="meterwrap">
                <div className="meter" style={{'--x': '84%'}}><span className="mk"></span></div>
                <div className="meter-lbls"><span>CALL-DOMINANT</span><span>NEUTRAL</span><span style={{color: 'var(--up)'}}>PUT-DOMINANT ◂</span></div>
                <div className="mrow" style={{marginTop: '10px'}}>
                  <div>PUT-DOMINANT<b className="u">84%</b></div>
                  <div>CONVICTION<b className="a">0.79 MOD</b></div>
                  <div>TOP CONV<b className="gld">GLD 1.75</b></div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="ph"><span className="n">03</span><span className="t" style={{color: 'var(--gold)'}}>SIGNAL CONFIDENCE</span><span className="s">36/80 QUALIFYING · 45%</span></div>
              <div>
                <div className="crow"><span className="rk">IV</span><span className="tkk">SPX</span><span className="cbar blu"><i style={{'--w': '12.8%', '--d': '.15s'}}></i></span><span className="cv">12.8</span></div>
                <div className="crow"><span className="rk">SK</span><span className="tkk">SPX</span><span className="cbar"><i style={{'--w': '72.4%', '--d': '.25s'}}></i></span><span className="cv">72.4</span></div>
                <div className="crow"><span className="rk">IV</span><span className="tkk">XLF</span><span className="cbar blu"><i style={{'--w': '20.5%', '--d': '.35s'}}></i></span><span className="cv">20.5</span></div>
                <div className="crow"><span className="rk">SK</span><span className="tkk">XLF</span><span className="cbar red"><i style={{'--w': '93.2%', '--d': '.45s'}}></i></span><span className="cv">93.2</span></div>
              </div>
              <div className="mrow">
                <div>BULL LEADER<b className="u">TLT</b></div>
                <div>BEAR<b className="d">VIX · BAC · DAL</b></div>
                <div>PREM-SELL<b className="gld">15 NAMES</b></div>
              </div>
              <div className="ph"><span className="n">04</span><span className="t" style={{color: 'var(--gold)'}}>SECTOR WALL</span><span className="s">DIRECTIONAL CONVICTION · D/D</span></div>
              <div>
                <div className="srow"><span className="sl">XLU</span><span className="dbar"><i className="pos" style={{'--w': '45%', '--d': '.2s'}}></i></span><span className="sv u">+3</span></div>
                <div className="srow"><span className="sl">XLV</span><span className="dbar"><i className="pos" style={{'--w': '45%', '--d': '.3s'}}></i></span><span className="sv u">+3</span></div>
                <div className="srow"><span className="sl">QQQ</span><span className="dbar"><i className="pos" style={{'--w': '30%', '--d': '.4s'}}></i></span><span className="sv u">+2</span></div>
                <div className="srow"><span className="sl">SPY</span><span className="dbar"><i className="neg" style={{'--w': '45%', '--d': '.5s'}}></i></span><span className="sv d">−3</span></div>
                <div className="srow"><span className="sl">XLF</span><span className="dbar"><i className="neg" style={{'--w': '45%', '--d': '.6s'}}></i></span><span className="sv d">−3</span></div>
              </div>
              <div className="ph"><span className="n">05</span><span className="t" style={{color: 'var(--gold)'}}>TICKER WATCHLIST</span><span className="s">OVERLAPS + PIN RISK</span></div>
              <div className="wl" aria-hidden="true">
                <span className="wtk">ARM</span><span className="wtk">CAT</span><span className="wtk">MU</span><span className="wtk">TLT</span>
                <span className="wtk">KO</span><span className="wtk">MSFT</span><span className="wtk">TMUS</span><span className="wtk">GOOGL</span>
                <span className="wtk">XLB</span><span className="wtk">XLP</span><span className="wtk">ICE</span><span className="wtk">WMT</span>
              </div>
            </div>
          </div>
          <div className="find"><b style={{color: 'var(--gold)'}}>KEY FINDING</b>84% of the universe printed <i>put-dominant demand</i> — protection accumulated, not panic. A rotation tape: XLU · XLV · XLC bid against a bearish SPY print, and <i>TLT</i> tops STORM the same day it leads Signal Confidence. <i>Every number traces to a report you can open.</i></div>
        </div>
      </div>
      <div className="fcopy rise">
        <span className="fbadge">GAMMA TIER — THE FLAGSHIP DESK</span>
        <h3>The Gamma <b>Terminal</b></h3>
        <p className="fl">Eleven reports. Eighty tickers. One screen. The Gamma Terminal is the full desk —
          universe-wide sentiment, cross-report conviction grids, market demand gauges, probability
          surfaces, and a sector wall, all synthesized from the morning's research.</p>
        <p className="fl" style={{marginTop: '12px'}}>The most important feature is what the terminal does when our
          models disagree. When the flow lens says bullish and the value lens says bearish on the same
          ticker, the Gamma Terminal doesn't average the data. It flags the conflict — explicitly, with both
          verdicts side by side — because the conflict itself is information. You make the final call.</p>
        <ul>
          <li><b>Everything in Alpha and Delta</b> — the full, cumulative desk</li>
          <li>Universe sentiment across all 80 names — one square per ticker, colored by day-over-day put/call shift</li>
          <li>Cross-report conviction grid: every ticker that fired in two or more independent frameworks, with each framework's verdict displayed</li>
          <li>Market demand gauges: how hard the universe leans toward puts, and how much conviction is behind the lean</li>
          <li>Signal confidence: how many of the 80 names generate a qualifying volatility-surface signal today, and where the leaders are</li>
          <li>Every future report we publish joins this screen at no added cost</li>
        </ul>
        <div className="ctarow">
          <MarketingCheckoutButton plan="gamma" className="btn gold">
            Go Gamma<span className="ar">→</span>
          </MarketingCheckoutButton>
          <span className="microline">24 REPORTS · ALL TICKERS · ALL FUTURE REPORTS</span>
        </div>
      </div>
    </div>

    
    <div className="feat rev" id="feat-delta">
      <div className="fcopy deltac rise">
        <span className="fbadge purp">DELTA TIER — THE VOLATILITY DESK</span>
        <h3>The Delta <b>Terminal</b></h3>
        <p className="fl">The volatility layer. The Delta Terminal is built for traders who want to understand
          the regime before they size a position. It draws from six additional reports — the VIX and VVIX
          term structure, the daily volatility regime state, market risk-reward migrations, and a
          three-model strategy scoreboard — and synthesizes them into a single, coherent view.</p>
        <div className="tdbox rise">
          <div className="tdh">★ TRADEABLE DISLOCATION (TD) SIGNAL — THE CONTRARIAN FLAG</div>
          <p>When a strategy structure clears our <b>Market Risk Reward qualification hurdles</b> while the
            broader marketplace actively avoids it, Delta flags it as a <b>contrarian opportunity</b> — with
            the breadth data and hurdle math printed beside it, so you can evaluate the case yourself.</p>
          <div className="tdnow">ON TODAY'S SAMPLE DESK: <b>★ 2</b> — PUT DEBIT SPREAD · LONG STRADDLE</div>
        </div>
        <ul>
          <li>VIX and VVIX term structure, drawn daily with plain-language interpretation of the current curve shape</li>
          <li>Three-model strategy scoreboard: flow, value, and regime each vote on eight option structures — conflicts displayed, never averaged</li>
          <li>Market risk-reward analysis: 1,460 opportunities re-ranked overnight for structural inefficiency</li>
          <li>Regime position map: where today's tape sits in the volatility cycle, plotted on the VIX × VVIX classification grid</li>
        </ul>
        <div className="ctarow">
          <MarketingCheckoutButton plan="basic" className="btn purp">
            Go Delta<span className="ar">→</span>
          </MarketingCheckoutButton>
          <span className="microline">13 REPORTS · DELTA TERMINAL · ★ TD SIGNALS</span>
        </div>
      </div>
      <div className="mockcol rise">
        <div className="term bigterm purpt" aria-label="Sample view of the GammaStrat Delta Terminal">
          <div className="tmast" style={{borderTopColor: 'var(--delta)'}}>
            <div>
              <div className="t1">DELTA <b className="p">TERMINAL</b></div>
              <div className="t2">VOLATILITY CURVE · VOLATILITY STATE · RISK REWARD · SCOREBOARD</div>
            </div>
            <div className="right"><span className="date">THU 16 JUL</span><span className="chip p">DELTA</span><span className="chip m">SAMPLE</span></div>
          </div>
          <div className="cols2" style={{gridTemplateColumns: '1.1fr .9fr'}}>
            <div className="col">
              <div className="ph"><span className="n">01</span><span className="t">VIX &amp; VVIX TERM STRUCTURE</span><span className="s">VOLATILITY CURVE</span></div>
              <div style={{padding: '8px 10px 4px'}}>
                <svg width="100%" height="120" viewBox="0 0 340 120" preserveAspectRatio="xMidYMid meet" role="img" aria-label="VIX and VVIX term structure curves">
                  <line x1="26" y1="100" x2="330" y2="100" stroke="var(--line2)" strokeWidth="1"/>
                  <line x1="26" y1="100" x2="26" y2="10" stroke="var(--line)" strokeWidth="1"/>
                  <text x="40" y="112" fontSize="8" fill="var(--muted)" fontFamily="Consolas,monospace">M1</text>
                  <text x="96" y="112" fontSize="8" fill="var(--muted)" fontFamily="Consolas,monospace">M2</text>
                  <text x="152" y="112" fontSize="8" fill="var(--muted)" fontFamily="Consolas,monospace">M3</text>
                  <text x="208" y="112" fontSize="8" fill="var(--muted)" fontFamily="Consolas,monospace">M4</text>
                  <text x="264" y="112" fontSize="8" fill="var(--muted)" fontFamily="Consolas,monospace">M5</text>
                  <text x="316" y="112" fontSize="8" fill="var(--muted)" fontFamily="Consolas,monospace">M6</text>
                  <path className="draw" d="M40,74 C90,64 150,52 200,44 C250,36 300,32 324,30" fill="none" stroke="var(--line2)" strokeWidth="1.2" strokeDasharray="3 3" opacity=".55"/>
                  <path className="draw" d="M40,84 C90,74 150,62 200,54 C250,46 300,42 324,40" fill="none" stroke="var(--bluel)" strokeWidth="2.2"/>
                  <path className="draw" d="M40,30 C100,38 170,48 230,55 C270,59 305,62 324,63" fill="none" stroke="var(--amber)" strokeWidth="1.8" strokeDasharray="5 4"/>
                  <g opacity=".9">
                    <rect className="gbar" style={{'--gd': '0.00s'}} x="37" y="88" width="6" height="6.5" fill="var(--up)" opacity=".7"/>
                    <rect className="gbar" style={{'--gd': '0.06s'}} x="93" y="88" width="6" height="7.3" fill="var(--up)" opacity=".7"/>
                    <rect className="gbar" style={{'--gd': '0.12s'}} x="149" y="88" width="6" height="9.8" fill="var(--up)" opacity=".7"/>
                    <rect className="gbar" style={{'--gd': '0.18s'}} x="205" y="88" width="6" height="8.6" fill="var(--up)" opacity=".7"/>
                    <rect className="gbar" style={{'--gd': '0.24s'}} x="261" y="88" width="6" height="8.2" fill="var(--up)" opacity=".7"/>
                    <rect className="gbar" style={{'--gd': '0.30s'}} x="313" y="88" width="6" height="7.8" fill="var(--up)" opacity=".7"/>
                  </g>
                  <circle cx="40" cy="84" r="3.5" fill="var(--bluel)"/>
                  <circle cx="40" cy="30" r="3" fill="var(--amber)"/>
                  <text x="46" y="88" fontSize="9" fontWeight="700" fill="var(--bluel)" fontFamily="Consolas,monospace">VIX 15.67</text>
                  <text x="46" y="24" fontSize="9" fontWeight="700" fill="var(--amber)" fontFamily="Consolas,monospace">VVIX 88.41 · FRONT-LOADED −34.1</text>
                  <text x="322" y="14" textAnchor="end" fontSize="8.5" fontWeight="700" fill="var(--up)" fontFamily="Consolas,monospace">VIX CONTANGO +7.26 — CALM PRICED FORWARD</text>
                  <text x="46" y="52" fontSize="7.5" fill="var(--up)" fontFamily="Consolas,monospace">D/D SHIFT · ALL TENORS LOWER · BULLISH</text>
                </svg>
              </div>
              <div className="ph"><span className="n">03</span><span className="t">MARKET RISK REWARD — MIGRATIONS</span><span className="s">1,460 OPPS · OVERNIGHT</span></div>
              <div className="mrow">
                <div>OPPS SCANNED<b className="a">1,460</b></div>
                <div>MKT EFFICIENCY<b className="a">LOW</b></div>
                <div>RISK APPETITE<b className="u">+7.5% AGG</b></div>
              </div>
              <div className="mrow">
                <div>★ TRADEABLE DISLOCATIONS<b style={{color: 'var(--purple)'}}>PUT DEBIT SPREAD · LONG STRADDLE</b></div>
              </div>
              <div className="qq" style={{borderLeftColor: 'var(--purple)'}}>“★ TRADEABLE DISLOCATION — PUT DEBIT SPREAD: 33 of 64 stocks (51.6%) cleared the hurdle (25% required). RRR rank 2 vs theory 5 with stable PoP.”<span className="who" style={{color: 'var(--purple)'}}>MARKET RISK REWARD ANALYSIS · 07/16</span></div>
            </div>
            <div className="col">
              <div className="ph"><span className="n">02</span><span className="t">STRATEGY SCOREBOARD</span><span className="s">3-MODEL CONSENSUS</span></div>
              <table>
                <thead><tr><th>STRATEGY</th><th>FLOW·VALUE·REGIME</th><th>NET</th></tr></thead>
                <tbody>
                  <tr><td className="name">PUT CREDIT SPREADS</td><td className="ck3"><span className="y">✓✓✓</span></td><td className="a">+3.0 LONG</td></tr>
                  <tr><td className="name">SHORT STRADDLE</td><td className="ck3"><span className="y">✓</span><span className="x">✕</span><span className="y">✓</span></td><td>CONFLICT</td></tr>
                  <tr style={{background: 'rgba(210,75,255,.07)'}}><td className="name">PUT DEBIT SPREAD</td><td className="ck3"><span className="x">✕</span><span className="n0">··</span></td><td style={{color: 'var(--purple)', fontWeight: 700}}>★ TD</td></tr>
                  <tr style={{background: 'rgba(210,75,255,.07)'}}><td className="name">LONG STRADDLE</td><td className="ck3"><span className="x">✕</span><span className="n0">··</span></td><td style={{color: 'var(--purple)', fontWeight: 700}}>★ TD</td></tr>
                </tbody>
              </table>
              <div className="ph"><span className="n">04</span><span className="t">REGIME POSITION MAP</span><span className="s">DAILY VOL STATE</span></div>
              <div style={{padding: '8px 10px 10px'}}>
                <svg width="100%" height="102" viewBox="0 0 300 102" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Volatility regime position map">
                  <rect x="30" y="8" width="256" height="80" fill="none" stroke="var(--line2)" strokeWidth="1"/>
                  <line x1="158" y1="8" x2="158" y2="88" stroke="var(--line)" strokeWidth="1" strokeDasharray="3 4"/>
                  <line x1="30" y1="48" x2="286" y2="48" stroke="var(--line)" strokeWidth="1" strokeDasharray="3 4"/>
                  <text x="38" y="20" fontSize="7.5" fill="var(--muted)" fontFamily="Consolas,monospace">ELEVATED</text>
                  <text x="278" y="20" textAnchor="end" fontSize="7.5" fill="var(--muted)" fontFamily="Consolas,monospace">STRESS</text>
                  <text x="38" y="82" fontSize="7.5" fill="var(--up)" fontFamily="Consolas,monospace">LOW-VOL</text>
                  <text x="278" y="82" textAnchor="end" fontSize="7.5" fill="var(--muted)" fontFamily="Consolas,monospace">TRANSITION</text>
                  <path className="draw" d="M226,30 C196,44 160,58 128,64 C110,67 96,69 84,70" fill="none" stroke="var(--delta)" strokeWidth="1.6" strokeDasharray="4 3" opacity=".7"/>
                  <circle className="pop" cx="84" cy="70" r="6" fill="var(--delta)" stroke="var(--panel)" strokeWidth="2"/>
                  <text x="94" y="74" fontSize="8.5" fontWeight="800" fill="var(--ink)" fontFamily="Consolas,monospace">TODAY · STABLE</text>
                </svg>
              </div>
            </div>
          </div>
          <div className="find"><b>KEY FINDING</b>Regime <i>STABLE</i> — VIX 15.67 × VVIX 88.41, contango confirms. Consensus long: <i>put credit spreads +3.0</i>; two contrarian <i>★ TD</i> signals ride against the tape. One regime change: QQQ bullish → transition.</div>
        </div>
      </div>
    </div>

    
    <div className="feat" id="feat-alpha">
      <div className="mockcol rise">
        <div className="term bigterm" aria-label="Sample view of the GammaStrat Alpha Terminal">
          <div className="tmast">
            <div>
              <div className="t1">ALPHA <b>TERMINAL</b></div>
              <div className="t2">SENTIMENT · SUMMARY · CONSENSUS · ACTIVITY — ONE SCREEN</div>
            </div>
            <div className="right"><span className="date">FRI 10 JUL</span><span className="chip">ALPHA</span><span className="chip m">SAMPLE</span></div>
          </div>
          <div className="cols2" style={{gridTemplateColumns: '1.02fr .98fr'}}>
            <div className="col">
              <div className="ph"><span className="n">01</span><span className="t">SPX MARKET MOOD — SIX DIALS</span><span className="s">SENTIMENT GAUGE</span></div>
              <div style={{padding: '6px 8px 3px', background: 'var(--inset)'}}>
                <svg width="100%" height="60" viewBox="0 0 336 62" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Six-dial sentiment gauge: term structure, call momentum, IV rank, gamma regime, call skew, volatility">
                  <defs><linearGradient id="gaug" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#ff2f2f"/><stop offset="0.5" stopColor="#f5c542"/><stop offset="1" stopColor="#00d60b"/></linearGradient></defs>
                  <path className="draw" d="M10.0,34.0 A18,18 0 0 1 46.0,34.0" fill="none" stroke="url(#gaug)" strokeWidth="3" strokeLinecap="round"/>
                  <line className="gnl" x1="28.0" y1="34.0" x2="40.1" y2="25.2" stroke="var(--ink)" strokeWidth="1.4"/>
                  <circle cx="28.0" cy="34.0" r="1.6" fill="var(--ink)"/>
                  <text x="28.0" y="47" textAnchor="middle" fontSize="5.4" fill="var(--muted)" fontFamily="Consolas,monospace">TERM STRUCT</text>
                  <text x="28.0" y="55" textAnchor="middle" fontSize="6" fontWeight="700" fill="#00d60b" fontFamily="Consolas,monospace">CONTANGO</text>
                  <path className="draw" d="M66.0,34.0 A18,18 0 0 1 102.0,34.0" fill="none" stroke="url(#gaug)" strokeWidth="3" strokeLinecap="round"/>
                  <line className="gnl" x1="84.0" y1="34.0" x2="84.0" y2="19.0" stroke="var(--ink)" strokeWidth="1.4"/>
                  <circle cx="84.0" cy="34.0" r="1.6" fill="var(--ink)"/>
                  <text x="84.0" y="47" textAnchor="middle" fontSize="5.4" fill="var(--muted)" fontFamily="Consolas,monospace">CALL MOM</text>
                  <text x="84.0" y="55" textAnchor="middle" fontSize="6" fontWeight="700" fill="#f5c542" fontFamily="Consolas,monospace">FAIR</text>
                  <path className="draw" d="M122.0,34.0 A18,18 0 0 1 158.0,34.0" fill="none" stroke="url(#gaug)" strokeWidth="3" strokeLinecap="round"/>
                  <line className="gnl" x1="140.0" y1="34.0" x2="153.4" y2="27.2" stroke="var(--ink)" strokeWidth="1.4"/>
                  <circle cx="140.0" cy="34.0" r="1.6" fill="var(--ink)"/>
                  <text x="140.0" y="47" textAnchor="middle" fontSize="5.4" fill="var(--muted)" fontFamily="Consolas,monospace">IV RANK</text>
                  <text x="140.0" y="55" textAnchor="middle" fontSize="6" fontWeight="700" fill="#00d60b" fontFamily="Consolas,monospace">VERY LOW</text>
                  <path className="draw" d="M178.0,34.0 A18,18 0 0 1 214.0,34.0" fill="none" stroke="url(#gaug)" strokeWidth="3" strokeLinecap="round"/>
                  <line className="gnl" x1="196.0" y1="34.0" x2="207.6" y2="24.4" stroke="var(--ink)" strokeWidth="1.4"/>
                  <circle cx="196.0" cy="34.0" r="1.6" fill="var(--ink)"/>
                  <text x="196.0" y="47" textAnchor="middle" fontSize="5.4" fill="var(--muted)" fontFamily="Consolas,monospace">GAMMA</text>
                  <text x="196.0" y="55" textAnchor="middle" fontSize="6" fontWeight="700" fill="#00d60b" fontFamily="Consolas,monospace">POSITIVE</text>
                  <path className="draw" d="M234.0,34.0 A18,18 0 0 1 270.0,34.0" fill="none" stroke="url(#gaug)" strokeWidth="3" strokeLinecap="round"/>
                  <line className="gnl" x1="252.0" y1="34.0" x2="238.9" y2="26.8" stroke="var(--ink)" strokeWidth="1.4"/>
                  <circle cx="252.0" cy="34.0" r="1.6" fill="var(--ink)"/>
                  <text x="252.0" y="47" textAnchor="middle" fontSize="5.4" fill="var(--muted)" fontFamily="Consolas,monospace">CALL SKEW</text>
                  <text x="252.0" y="55" textAnchor="middle" fontSize="6" fontWeight="700" fill="#ff2f2f" fontFamily="Consolas,monospace">VERY HIGH</text>
                  <path className="draw" d="M290.0,34.0 A18,18 0 0 1 326.0,34.0" fill="none" stroke="url(#gaug)" strokeWidth="3" strokeLinecap="round"/>
                  <line className="gnl" x1="308.0" y1="34.0" x2="321.9" y2="28.5" stroke="var(--ink)" strokeWidth="1.4"/>
                  <circle cx="308.0" cy="34.0" r="1.6" fill="var(--ink)"/>
                  <text x="308.0" y="47" textAnchor="middle" fontSize="5.4" fill="var(--muted)" fontFamily="Consolas,monospace">VOLATILITY</text>
                  <text x="308.0" y="55" textAnchor="middle" fontSize="6" fontWeight="700" fill="#00d60b" fontFamily="Consolas,monospace">VERY LOW</text>
                </svg>
              </div>
              <div className="ph"><span className="n">03</span><span className="t">OVERLAP SIGNAL BOARD</span><span className="s">STRATEGY CONSENSUS</span></div>
              <div className="sigmini">
                <div className="sgc bear"><div className="sh">BEARISH<span className="cnt">5</span></div><div className="tks">XLC · TJX · TLT · WMT · XLU</div></div>
                <div className="sgc bull"><div className="sh">BULLISH<span className="cnt">3</span></div><div className="tks">ARM · NVDA · XHB</div></div>
                <div className="sgc lowv"><div className="sh">LOW VOL<span className="cnt">3</span></div><div className="tks">AXP · XLB · XLY</div></div>
                <div className="sgc hiv"><div className="sh">HIGH VOL<span className="cnt">0</span></div><div className="tks none">No overlaps today</div></div>
              </div>
            </div>
            <div className="col">
              <div className="ph"><span className="n">02</span><span className="t">PREMIUM MISPRICING</span><span className="s">DAILY OPTIONS ACTIVITY</span></div>
              <div>
                <div className="evrow"><span style={{color: 'var(--ink)', fontWeight: 800}}>CALLS</span><span className="cbar blu"><i style={{'--w': '7%', '--d': '.2s'}}></i></span><span style={{textAlign: 'right', fontWeight: 700, color: 'var(--txt2)'}}>7%</span></div>
                <div className="evrow"><span style={{color: 'var(--ink)', fontWeight: 800}}>PUTS</span><span className="cbar blu"><i style={{'--w': '93%', '--d': '.35s'}}></i></span><span style={{textAlign: 'right', fontWeight: 700, color: 'var(--up)'}}>93%</span></div>
              </div>
              <div className="mrow">
                <div>P/C EV RATIO<b className="a">12.71</b></div>
                <div>TAIL GAP<b className="u">+1.29PP</b></div>
                <div>CONFIDENCE<b>HIGH</b></div>
              </div>
              <div className="ph"><span className="n">04</span><span className="t">WHAT THE DESK SAID</span><span className="s">VERBATIM</span></div>
              <div className="qq">“…increased demand to sell puts, with the EV Z-score strongly positive (1.033)…”<span className="who">STRATEGY CONSENSUS · FLOW LENS</span></div>
            </div>
          </div>
          <div className="find"><b>KEY FINDING</b>Puts +EV <i>93%</i>, calls 7% — protection cheap, upside overbid. <i>TJX</i> shows up bearish on the overlap board and tops the pin watch: two reports, one name.</div>
        </div>
      </div>
      <div className="fcopy alphac rise">
        <span className="fbadge blub">FREE TRIAL &amp; ALPHA TIER — START HERE</span>
        <h3>The Alpha <b>Terminal</b></h3>
        <p className="fl">The desk view every member starts with — and keeps. Four daily reports, synthesized
          onto one screen. The Alpha Terminal gives you the volatility environment at a glance, the day's
          premium mispricing, the tickers telling the same story across multiple independent rankings, and
          the exact gamma regimes and key levels for the index anchors.</p>
        <p className="fl" style={{marginTop: '12px'}}>It's the real product — not a stripped demo. The free trial
          is two weeks of the same daily research that paid subscribers receive.</p>
        <ul>
          <li>Six-dial sentiment gauge: term structure, call momentum, IV rank, gamma regime, call skew, and realized volatility — one look at the environment</li>
          <li>Positioning board across six strategy families, with the day's flagged dislocation and expected-value shift</li>
          <li>Overlap signal board: tickers appearing in the same directional or volatility bucket across multiple independent strategy rankings</li>
          <li>Gamma regimes, key levels, and tail-risk mispricing for SPX, QQQ, and GLD</li>
        </ul>
        <div className="ctarow">
          <MarketingCheckoutButton plan="free_trial" className="btn">
            Start Your Free Trial<span className="ar">→</span>
          </MarketingCheckoutButton>
          <span className="microline">FREE FOR 14 DAYS · 5 REPORTS</span>
        </div>
      </div>
    </div>


    
    <div className="feat rev" id="feat-dpt">
      <div className="fcopy dptc rise">
        <span className="fbadge dptb">THE DEALER MAP · INCLUDED WITH GAMMA</span>
        <h3>Dealer Positioning <b>Daily</b></h3>
        <div className="dptlede">
          <p>This may be the most preeminent options-trading product ever offered to a retail trader —
            preeminent enough that we publish it as its own <b>standalone platform</b>. It's built to
            transform how you understand <b>the way options are actually priced and evaluated</b>.</p>
          <span className="stand">A STANDALONE PLATFORM · OFFERED ALONGSIDE THE DESK</span>
        </div>
        <p className="fl">One institutional-grade screen per ticker — the full ~80-name universe, rebuilt every
          trading day against the prior close. It maps the GEX-by-strike profile for every name, tracks
          day-over-day migration, and reads the key structural levels directly from the net GEX curve — the
          gamma flip, the zero-GEX level, and the max positive and negative GEX strikes.</p>
        <ul>
          <li>Dealer inventory as a GEX-by-strike profile: call and put gamma at every strike, current versus prior day</li>
          <li>Day-over-day migration and a net dealer-hedging curve: modeled buying and selling pressure for a +1% move</li>
          <li>Key levels read from net GEX: gamma flip, zero-GEX, max ±GEX, with volatility landmarks and magnets</li>
          <li>Gamma regime framework on every page: is dealer hedging dampening the tape, or amplifying it?</li>
        </ul>
        <div className="ctarow">
          <MarketingCheckoutButton plan="gamma" className="btn dpt">
            Add Dealer Positioning Daily<span className="ar">→</span>
          </MarketingCheckoutButton>
          <span className="microline">ALPHA +$300/YEAR · DELTA +$200/YEAR · INCLUDED WITH GAMMA</span>
        </div>
      </div>
      <div className="mockcol rise">
        <div className="term bigterm dptt" aria-label="Sample view of GammaStrat Dealer Positioning Daily">
          <div className="tmast" style={{borderTopColor: 'var(--dpt)'}}>
            <div>
              <div className="t1">DEALER POSITIONING <b className="o">DAILY</b></div>
              <div className="t2">INVENTORY · HEDGING PRESSURE · MIGRATION · PRESSURE LEVELS</div>
            </div>
            <div className="right"><span className="date">MON 21 JUL</span><span className="chip o">DEALER MAP</span><span className="chip m">SAMPLE</span></div>
          </div>
          <div className="cols2" style={{gridTemplateColumns: '1.14fr .86fr'}}>
            <div className="col">
              <div className="ph"><span className="n">01</span><span className="t" style={{color: 'var(--dptl)'}}>KEY SUMMARY METRICS</span><span className="s">SPX PAGE · 1 OF 80</span></div>
              <div className="mrow">
                <div>DEX CURRENT<b className="d">−206.18M</b></div>
                <div>GEX CURRENT<b className="u">37.73B</b></div>
                <div>GEX CHANGE<b className="u">+56.03B</b></div>
              </div>
              <div className="mrow">
                <div>DEX PRIOR<b>−166.64M</b></div>
                <div>GEX PRIOR<b className="d">−18.30B</b></div>
                <div>NET GEX % MKT CAP<b className="a">0.50%</b></div>
              </div>
              <div className="ph"><span className="n">02</span><span className="t" style={{color: 'var(--dptl)'}}>DEALER INVENTORY — GEX BY STRIKE</span><span className="s">NET CURVE · +1% MOVE</span></div>
              <div className="gexbig">
                <svg width="100%" height="188" viewBox="0 0 340 200" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Dealer gamma exposure by strike, with net curve">
                  <line x1="170" y1="10" x2="170" y2="186" stroke="var(--line2)" strokeWidth="1"/>
                  <rect className="gxc" x="170.0" y="12.9" width="5.9" height="6.2" fill="var(--up)" opacity="0.57" rx="0.5"/>
                  <rect className="gxp" x="108.1" y="12.9" width="61.9" height="6.2" fill="var(--down)" opacity="0.72" rx="0.5"/>
                  <rect className="gxc" x="170.0" y="23.3" width="6.0" height="6.2" fill="var(--up)" opacity="0.57" rx="0.5"/>
                  <rect className="gxp" x="84.3" y="23.3" width="85.7" height="6.2" fill="var(--down)" opacity="0.80" rx="0.5"/>
                  <rect className="gxc" x="170.0" y="33.6" width="6.2" height="6.2" fill="var(--up)" opacity="0.57" rx="0.5"/>
                  <rect className="gxp" x="63.8" y="33.6" width="106.2" height="6.2" fill="var(--down)" opacity="0.88" rx="0.5"/>
                  <rect className="gxc" x="170.0" y="44.0" width="6.8" height="6.2" fill="var(--up)" opacity="0.57" rx="0.5"/>
                  <rect className="gxp" x="52.6" y="44.0" width="117.4" height="6.2" fill="var(--down)" opacity="0.90" rx="0.5"/>
                  <rect className="gxc" x="170.0" y="54.4" width="8.4" height="6.2" fill="var(--up)" opacity="0.58" rx="0.5"/>
                  <rect className="gxp" x="54.2" y="54.4" width="115.8" height="6.2" fill="var(--down)" opacity="0.90" rx="0.5"/>
                  <rect className="gxc" x="170.0" y="64.8" width="12.1" height="6.2" fill="var(--up)" opacity="0.59" rx="0.5"/>
                  <rect className="gxp" x="66.5" y="64.8" width="103.5" height="6.2" fill="var(--down)" opacity="0.87" rx="0.5"/>
                  <rect className="gxc" x="170.0" y="75.1" width="20.6" height="6.2" fill="var(--up)" opacity="0.62" rx="0.5"/>
                  <rect className="gxp" x="82.3" y="75.1" width="87.7" height="6.2" fill="var(--down)" opacity="0.81" rx="0.5"/>
                  <rect className="gxc" x="170.0" y="85.5" width="36.9" height="6.2" fill="var(--up)" opacity="0.68" rx="0.5"/>
                  <rect className="gxp" x="93.8" y="85.5" width="76.2" height="6.2" fill="var(--down)" opacity="0.77" rx="0.5"/>
                  <rect className="gxc" x="170.0" y="95.9" width="63.1" height="6.2" fill="var(--up)" opacity="0.76" rx="0.5"/>
                  <rect className="gxp" x="98.6" y="95.9" width="71.4" height="6.2" fill="var(--down)" opacity="0.75" rx="0.5"/>
                  <rect className="gxc" x="170.0" y="106.3" width="96.1" height="6.2" fill="var(--up)" opacity="0.88" rx="0.5"/>
                  <rect className="gxp" x="102.6" y="106.3" width="67.4" height="6.2" fill="var(--down)" opacity="0.74" rx="0.5"/>
                  <rect className="gxc" x="170.0" y="116.6" width="127.2" height="6.2" fill="var(--up)" opacity="0.95" rx="0.5"/>
                  <rect className="gxp" x="112.8" y="116.6" width="57.2" height="6.2" fill="var(--down)" opacity="0.70" rx="0.5"/>
                  <rect className="gxc" x="170.0" y="127.0" width="146.1" height="6.2" fill="var(--up)" opacity="0.95" rx="0.5"/>
                  <rect className="gxp" x="129.3" y="127.0" width="40.7" height="6.2" fill="var(--down)" opacity="0.64" rx="0.5"/>
                  <rect className="gxc" x="170.0" y="137.4" width="147.8" height="6.2" fill="var(--up)" opacity="0.95" rx="0.5"/>
                  <rect className="gxp" x="145.7" y="137.4" width="24.3" height="6.2" fill="var(--down)" opacity="0.59" rx="0.5"/>
                  <rect className="gxc" x="170.0" y="147.8" width="135.6" height="6.2" fill="var(--up)" opacity="0.95" rx="0.5"/>
                  <rect className="gxp" x="156.6" y="147.8" width="13.4" height="6.2" fill="var(--down)" opacity="0.55" rx="0.5"/>
                  <rect className="gxc" x="170.0" y="158.1" width="116.2" height="6.2" fill="var(--up)" opacity="0.94" rx="0.5"/>
                  <rect className="gxp" x="161.8" y="158.1" width="8.2" height="6.2" fill="var(--down)" opacity="0.53" rx="0.5"/>
                  <rect className="gxc" x="170.0" y="168.5" width="94.9" height="6.2" fill="var(--up)" opacity="0.87" rx="0.5"/>
                  <rect className="gxp" x="163.6" y="168.5" width="6.4" height="6.2" fill="var(--down)" opacity="0.52" rx="0.5"/>
                  <rect className="gxc" x="170.0" y="178.9" width="73.9" height="6.2" fill="var(--up)" opacity="0.80" rx="0.5"/>
                  <rect className="gxp" x="164.0" y="178.9" width="6.0" height="6.2" fill="var(--down)" opacity="0.52" rx="0.5"/>
                  <line x1="46" y1="122.9" x2="300" y2="122.9" stroke="var(--amber)" strokeWidth="1" strokeDasharray="4 3"/><circle className="pop" cx="170.0" cy="121.5" r="3" fill="var(--amber)"/><text x="304" y="125.4" fontSize="7" fontWeight="700" fill="var(--amber)" fontFamily="Consolas,monospace">7,509</text>
                  <path className="draw" d="M139.2,16.0 L126.2,26.4 L115.0,36.8 L109.2,47.1 L110.9,57.5 L119.8,67.9 L133.1,78.2 L148.4,88.6 L165.4,99.0 L185.8,109.4 L208.5,119.8 L228.0,130.1 L238.0,140.5 L237.2,150.9 L229.4,161.2 L218.6,171.6 L207.4,182.0" fill="none" stroke="var(--dptl)" strokeWidth="2.2"/>
                  <text x="6" y="18.5" fontSize="7" fill="var(--muted)" fontFamily="Consolas,monospace">7,200</text>
                  <text x="6" y="49.6" fontSize="7" fill="var(--muted)" fontFamily="Consolas,monospace">7,290</text>
                  <text x="6" y="80.8" fontSize="7" fill="var(--muted)" fontFamily="Consolas,monospace">7,380</text>
                  <text x="6" y="111.9" fontSize="7" fill="var(--muted)" fontFamily="Consolas,monospace">7,470</text>
                  <text x="6" y="143.0" fontSize="7" fill="var(--muted)" fontFamily="Consolas,monospace">7,560</text>
                  <text x="6" y="174.1" fontSize="7" fill="var(--muted)" fontFamily="Consolas,monospace">7,650</text>
                  <text x="196" y="8" fontSize="7.5" fontWeight="700" fill="var(--up)" fontFamily="Consolas,monospace">CALL GEX ▸</text>
                  <text x="144" y="8" textAnchor="end" fontSize="7.5" fontWeight="700" fill="var(--down)" fontFamily="Consolas,monospace">◂ PUT GEX</text>
                </svg>
                <div className="gxleg">
                  <span><span className="sw" style={{background: 'var(--up)'}}></span>CALL GEX</span>
                  <span><span className="sw" style={{background: 'var(--down)'}}></span>PUT GEX</span>
                  <span><span className="sw" style={{background: 'var(--dptl)'}}></span>NET DEALER CURVE</span>
                  <span style={{color: 'var(--amber)'}}>┈ SPOT 7,509 · ★ FLIP 7,505</span>
                </div>
              </div>
              <div className="mrow">
                <div>ABOVE SPOT<b className="d">NET SELL −6.42M</b></div>
                <div>BELOW SPOT<b className="u">NET BUY +3.22M</b></div>
                <div>WITHIN ±1%<b className="d">−1.23M</b></div>
              </div>
            </div>
            <div className="col">
              <div className="ph"><span className="n">03</span><span className="t" style={{color: 'var(--dptl)'}}>KEY LEVELS — FROM NET GEX</span><span className="s">DAILY</span></div>
              <table>
                <thead><tr><th>LEVEL</th><th>STRIKE</th></tr></thead>
                <tbody>
                  <tr><td className="name">MAX POSITIVE GEX</td><td className="u">7,595</td></tr>
                  <tr><td className="name">GAMMA FLIP LEVEL</td><td className="a">7,505</td></tr>
                  <tr><td className="name">ZERO-GEX LEVEL</td><td className="a">7,510</td></tr>
                  <tr><td className="name">MAX NEGATIVE GEX</td><td className="d">7,300</td></tr>
                </tbody>
              </table>
              <div className="ph"><span className="n">04</span><span className="t" style={{color: 'var(--dptl)'}}>VOLATILITY LANDMARKS</span><span className="s">MAGNETS</span></div>
              <div className="mrow">
                <div>CALL RESISTANCE<b className="u">7,555</b></div>
                <div>PUT SUPPORT<b className="d">7,495</b></div>
                <div>GAMMA MAGNET<b className="a">7,555</b></div>
              </div>
              <div className="ph"><span className="n">05</span><span className="t" style={{color: 'var(--dptl)'}}>GAMMA REGIME FRAMEWORK</span><span className="s">EVERY PAGE</span></div>
              <div className="mrow" style={{flexDirection: 'column'}}>
                <div style={{flex: 'none'}}>POSITIVE GAMMA<b className="u">DAMPENS VOLATILITY</b></div>
                <div style={{flex: 'none'}}>NEAR NEUTRAL<b className="a">TWO-WAY MARKET</b></div>
                <div style={{flex: 'none'}}>NEGATIVE GAMMA<b className="d">AMPLIFIES VOLATILITY</b></div>
              </div>
              <div className="ph"><span className="n">06</span><span className="t" style={{color: 'var(--dptl)'}}>LARGEST GEX CHANGE</span><span className="s">BY STRIKE</span></div>
              <div className="mrow">
                <div>STRIKE 7,525<b className="u">+2.84B</b></div>
                <div>DRIVER<b>OI INCREASE</b></div>
              </div>
            </div>
          </div>
          <div className="find"><b style={{color: 'var(--dptl)'}}>KEY FINDING</b>GEX flipped from <i>−18.30B</i> to <i>+37.73B</i> overnight while DEX deepened to −206M; the gamma flip sits at <i>7,505</i> with spot at 7,509 — the tape is trading right on top of the flip. Above spot dealers are net sellers, below net buyers: <i>the pin math, printed for all ~80 names.</i></div>
        </div>
      </div>
    </div>

    
    <div className="ladder rise" aria-label="Subscription ladder">
      <div className="step">
        <div className="snrow"><span className="sn">FREE TRIAL</span><span className="arr">→</span></div>
        <div className="sd">5 REPORTS · ALPHA TERMINAL · 2 WEEKS</div>
      </div>
      <div className="step">
        <div className="snrow"><span className="sn" style={{color: 'var(--bluel)'}}>ALPHA</span><span className="arr">→</span></div>
        <div className="sd">7 REPORTS · KEEP THE DESK</div>
      </div>
      <div className="step">
        <div className="snrow"><span className="sn" style={{color: 'var(--delta)'}}>DELTA</span><span className="arr">→</span></div>
        <div className="sd">13 REPORTS · VOL DESK + ★ TD SIGNALS</div>
      </div>
      <div className="step g">
        <div className="snrow"><span className="sn" style={{color: 'var(--gold)'}}>GAMMA</span><span className="arr" style={{color: 'var(--gold)'}}>★</span></div>
        <div className="sd">24 REPORTS · ALL TICKERS · ALL FUTURE REPORTS</div>
      </div>
    </div>
  </div>
</section>



  )
}
