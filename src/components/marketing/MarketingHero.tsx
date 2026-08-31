import MarketingCheckoutButton from '@/components/marketing/MarketingCheckoutButton'

interface MarketingHeroProps {
  ctaUrl?: string
}

export default function MarketingHero(_props: MarketingHeroProps = {}) {
  return (
    <header className="hero gridbg">
      <div className="wrap grid">
        <div>
          <div className="pill-ann"><span className="pdot" aria-hidden="true"></span>OPTIONS-MARKET RESEARCH · PUBLISHED EVERY TRADING DAY BEFORE THE OPEN</div>
          <h1>Stop Trading Price. <em>Start Trading Structure.</em></h1>
          <p className="sub">GammaStrat&apos;s founder is a 30-year Wall Street veteran who partnered with his son and
            the preeminent finance professor in the field of options theory whose options-pricing research has
            been published in the Journal of Finance. This expertise is translated into a daily read on dealer
            positioning, volatility regime and structural mispricing across the most liquid benchmarks (SPX,
            QQQ, GLD and TLT) as well as 76 of the most liquid individual names, all on your screen before
            every open.</p>
          <div className="ctas">
            <MarketingCheckoutButton plan="free_trial" className="btn">
              Begin Your Free Trial<span className="ar">→</span>
            </MarketingCheckoutButton>
            <a className="btn ghost" href="#reports">View Sample Reports</a>
          </div>
          <div className="microline">FREE FOR 14 DAYS · INCLUDES THE ALPHA TERMINAL · CANCEL ANYTIME</div>
          <a className="expstrip rise" href="#team" aria-label="Meet the GammaStrat team">
            <span className="exavs">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/marketing/headshot-tyler-shumway.jpg" alt="Tyler Shumway" width="34" height="34" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/marketing/headshot-david-glenn.jpg" alt="David Glenn" width="34" height="34" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/marketing/headshot-robbie-glenn.jpg" alt="Robbie Glenn" width="34" height="34" />
            </span>
            <span className="extext">
              <b>Meet the Team</b> — A Wall Street investor. A finance professor. A student turning their
              research into a screen you can actually read.
              <span className="exlink">MEET THE TEAM →</span>
            </span>
          </a>
        </div>

        <div className="herocards">
        {/* hero terminal trio */}
        <div className="trio rise" aria-label="The three GammaStrat terminals: Alpha, Delta, and Gamma">
          <a className="mini ma" href="#feat-alpha" aria-label="Jump to the Alpha Terminal explanation">
            <div className="mm"><span className="mt">ALPHA <b>TERMINAL</b></span><span className="chip">ALPHA</span></div>
            <div className="ph"><span className="t">SPX MARKET MOOD</span></div>
            <div className="mrow">
              <div>IV RANK<b className="u">VERY LOW</b></div>
              <div>CALL SKEW<b className="d">VERY HIGH</b></div>
            </div>
            <div className="ph"><span className="t">POSITIONING BOARD</span></div>
            <div className="mrow">
              <div>FLAGGED<b className="a">★ PUT CR SPR</b></div>
              <div>PUTS +EV<b className="u">93%</b></div>
            </div>
            <div className="cap">5 REPORTS · FREE TRIAL</div>
          </a>
          <a className="mini md" href="#feat-delta" aria-label="Jump to the Delta Terminal explanation">
            <div className="mm"><span className="mt">DELTA <b>TERMINAL</b></span><span className="chip p">DELTA</span></div>
            <div className="ph"><span className="t">VIX &amp; VVIX TERM STRUCTURE</span></div>
            <svg width="100%" height="44" viewBox="0 0 180 44" preserveAspectRatio="none" aria-hidden="true" style={{background: 'var(--cell)', display: 'block'}}>
              <path className="draw" d="M10,34 C45,29 90,21 125,17 C150,14 168,12 174,11" fill="none" stroke="var(--bluel)" strokeWidth="1.8"/>
              <path className="draw" d="M10,10 C55,15 105,22 145,27 C158,28 168,29 174,30" fill="none" stroke="var(--amber)" strokeWidth="1.4" strokeDasharray="4 3"/>
              <circle cx="10" cy="34" r="2.5" fill="var(--bluel)"/>
            </svg>
            <div className="ph"><span className="t">STRATEGY SCOREBOARD</span></div>
            <div className="mrow">
              <div>CONSENSUS<b className="u">PUT CR SPR +3.0</b></div>
              <div>TD SIGNALS<b style={{color: 'var(--purple)'}}>★ 2</b></div>
            </div>
            <div className="cap">13 REPORTS · VOL DESK</div>
          </a>
          <a className="mini mg" href="#feat-gamma" aria-label="Jump to the Gamma Terminal explanation">
            <div className="goldbar"></div>
            <div className="mm"><span className="mt">GAMMA <b>TERMINAL</b></span><span className="chip g">GAMMA</span></div>
            <div className="ph"><span className="t" style={{color: 'var(--gold)'}}>TICKER WATCHLIST + PIN RISK</span></div>
            <div className="wlmini" aria-label="Ticker watchlist: bull and bear overlap survivors">
              <div className="wlrow"><span className="wll bu">BULL</span><span className="mtk bu" style={{'--d': '.06s'}}>ARM</span><span className="mtk bu" style={{'--d': '.12s'}}>CAT</span><span className="mtk bu" style={{'--d': '.18s'}}>MU</span><span className="mtk bu" style={{'--d': '.24s'}}>TLT</span></div>
              <div className="wlrow"><span className="wll be">BEAR</span><span className="mtk be" style={{'--d': '.32s'}}>KO</span><span className="mtk be" style={{'--d': '.38s'}}>MSFT</span><span className="mtk be" style={{'--d': '.44s'}}>TMUS</span></div>
              <div className="wlpin">PINS · <b>XLB 77.1</b> · <b>XLP 75.5</b> → OPEX</div>
            </div>
            <div className="ph"><span className="t" style={{color: 'var(--gold)'}}>SIGNAL CONFIDENCE</span></div>
            <div className="crow"><span className="tkk">QUAL</span><span className="cbar"><i style={{'--w': '45%', '--d': '.3s'}}></i></span><span className="cv">36/80</span></div>
            <div className="mrow">
              <div>BULL LEADER<b className="u">TLT</b></div>
              <div>BEAR<b className="d">VIX · BAC</b></div>
            </div>
            <div className="cap">24 REPORTS · FULL DESK</div>
          </a>
        </div>

        {/* DPT add-on card — its own row, same card style as the three above */}
        <div className="addonrow rise">
          <a className="mini mo" href="#feat-dpt" aria-label="Jump to the Dealer Positioning Daily explanation">
            <div className="mm"><span className="mt">DEALER POSITIONING <b>DAILY</b></span><span className="chip o">DEALER MAP</span></div>
            <div className="ph"><span className="t" style={{color: 'var(--dptl)'}}>NET GEX BY STRIKE</span></div>
            <div className="gexmini">
              <svg width="64%" height="66" viewBox="0 0 150 66" preserveAspectRatio="xMidYMid meet" aria-hidden="true" style={{background: 'var(--inset)'}}>
                <line x1="66" y1="4" x2="66" y2="62" stroke="var(--line2)" strokeWidth="1"/>
                <rect className="gxc" x="66.0" y="5.2" width="9" height="3.5" fill="var(--up)" opacity="0.85"/>
                <rect className="gxp" x="62.0" y="5.2" width="4" height="3.5" fill="var(--down)" opacity="0.80"/>
                <rect className="gxc" x="66.0" y="10.4" width="14" height="3.5" fill="var(--up)" opacity="0.83"/>
                <rect className="gxp" x="60.0" y="10.4" width="6" height="3.5" fill="var(--down)" opacity="0.79"/>
                <rect className="gxc" x="66.0" y="15.6" width="22" height="3.5" fill="var(--up)" opacity="0.82"/>
                <rect className="gxp" x="57.0" y="15.6" width="9" height="3.5" fill="var(--down)" opacity="0.78"/>
                <rect className="gxc" x="66.0" y="20.8" width="32" height="3.5" fill="var(--up)" opacity="0.80"/>
                <rect className="gxp" x="53.0" y="20.8" width="13" height="3.5" fill="var(--down)" opacity="0.77"/>
                <rect className="gxc" x="66.0" y="26.0" width="46" height="3.5" fill="var(--up)" opacity="0.79"/>
                <rect className="gxp" x="56.0" y="26.0" width="10" height="3.5" fill="var(--down)" opacity="0.76"/>
                <rect className="gxc" x="66.0" y="31.2" width="60" height="3.5" fill="var(--up)" opacity="0.78"/>
                <rect className="gxp" x="52.0" y="31.2" width="14" height="3.5" fill="var(--down)" opacity="0.75"/>
                <rect className="gxc" x="66.0" y="36.4" width="54" height="3.5" fill="var(--up)" opacity="0.76"/>
                <rect className="gxp" x="46.0" y="36.4" width="20" height="3.5" fill="var(--down)" opacity="0.74"/>
                <rect className="gxc" x="66.0" y="41.6" width="40" height="3.5" fill="var(--up)" opacity="0.74"/>
                <rect className="gxp" x="34.0" y="41.6" width="32" height="3.5" fill="var(--down)" opacity="0.73"/>
                <rect className="gxc" x="66.0" y="46.8" width="26" height="3.5" fill="var(--up)" opacity="0.73"/>
                <rect className="gxp" x="22.0" y="46.8" width="44" height="3.5" fill="var(--down)" opacity="0.72"/>
                <rect className="gxc" x="66.0" y="52.0" width="16" height="3.5" fill="var(--up)" opacity="0.71"/>
                <rect className="gxp" x="38.0" y="52.0" width="28" height="3.5" fill="var(--down)" opacity="0.71"/>
                <rect className="gxc" x="66.0" y="57.2" width="9" height="3.5" fill="var(--up)" opacity="0.70"/>
                <rect className="gxp" x="52.0" y="57.2" width="14" height="3.5" fill="var(--down)" opacity="0.70"/>
                <text x="2" y="13.2" fontSize="5.8" fill="var(--muted)" fontFamily="Consolas,monospace">7,650</text>
                <text x="2" y="35.0" fontSize="5.8" fill="var(--muted)" fontFamily="Consolas,monospace">7,470</text>
                <text x="2" y="56.8" fontSize="5.8" fill="var(--muted)" fontFamily="Consolas,monospace">7,290</text>
                <line x1="24" y1="43.4" x2="138" y2="43.4" stroke="var(--amber)" strokeWidth="0.8" strokeDasharray="3 3"/>
                <text x="140" y="45.4" fontSize="5.8" fontWeight="700" fill="var(--amber)" fontFamily="Consolas,monospace">SPOT</text>
                <path className="draw" d="M68.5,7.0 L70.0,12.2 L72.5,17.4 L75.5,22.6 L84.0,27.8 L89.0,33.0 L83.0,38.2 L70.0,43.4 L57.0,48.6 L60.0,53.8 L63.5,59.0" fill="none" stroke="var(--dptl)" strokeWidth="1.7"/>
              </svg>
              <div className="gxk">
                <div><span className="sw" style={{background: 'var(--up)'}}></span>CALL GEX</div>
                <div><span className="sw" style={{background: 'var(--down)'}}></span>PUT GEX</div>
                <div><span className="sw" style={{background: 'var(--dptl)'}}></span>NET CURVE</div>
                <div style={{marginTop: '2px'}}>FLIP<b className="a"> 7,505</b></div>
                <div>SPOT<b> 7,509</b></div>
              </div>
            </div>
            <div className="mrow">
              <div>DEX<b className="d">−206M</b></div>
              <div>GEX Δ<b className="u">+56.0B</b></div>
              <div>REGIME<b className="a">NO CHG</b></div>
            </div>
            <div className="mrow">
              <div>MAX +GEX<b className="u">7,595</b></div>
              <div>GAMMA FLIP<b className="a">7,505</b></div>
              <div>MAX −GEX<b className="d">7,300</b></div>
            </div>
            <div className="cap">80 TICKERS · INCLUDED IN GAMMA</div>
          </a>
        </div>
        </div>{/* /herocards */}
      </div>
    </header>
  )
}
