'use client'

import MarketingCheckoutButton from '@/components/marketing/MarketingCheckoutButton'
import { getMembersUrl } from '../../lib/site'

interface MarketingNavProps {
  membersUrl?: string
  ctaUrl?: string
}

export default function MarketingNav({ membersUrl = getMembersUrl() }: MarketingNavProps) {
  return (
    <nav className="nav" aria-label="Main">
      <div className="row">
        <a className="brand" href="/new" aria-label="GammaStrat home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/marketing/logo.png"
            alt="GammaStrat logo"
            width={164}
            height={73}
            style={{ display: 'block' }}
          />
        </a>
        <button
          className="navtoggle"
          id="navToggle"
          aria-label="Open menu"
          aria-expanded="false"
          aria-controls="navLinks"
          type="button"
        >
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M1 1h18M1 7h18M1 13h18" />
          </svg>
        </button>
        <div className="links" id="navLinks">
          <a className="nl" href="/new" data-mkt-section="edge">HOW IT WORKS</a>
          <a className="nl" href="/new" data-mkt-section="terminals">TERMINALS</a>
          <a className="nl" href="/new" data-mkt-section="reports">REPORTS</a>
          <a className="nl" href="/new" data-mkt-section="team">THE TEAM</a>
          <a className="nl" href="/new" data-mkt-section="pricing">PRICING</a>
          <a className="nl" href="/new" data-mkt-section="faq">FAQ</a>
          <a className="nl" href={membersUrl}>MEMBER PORTAL</a>
          <MarketingCheckoutButton plan="free_trial" className="btn">
            Begin Your Free Trial<span className="ar">→</span>
          </MarketingCheckoutButton>
        </div>
      </div>
    </nav>
  )
}
