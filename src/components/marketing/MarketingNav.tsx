'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import MarketingCheckoutButton from '@/components/marketing/MarketingCheckoutButton'
import { MARKETING_HOME, MARKETING_ROUTES } from '@/lib/marketingRoutes'
import { getMembersUrl } from '@/lib/site'

interface MarketingNavProps {
  membersUrl?: string
}

export default function MarketingNav({ membersUrl = getMembersUrl() }: MarketingNavProps) {
  const pathname = usePathname()

  const navLinks: { href: string; label: string }[] = [
    { href: MARKETING_ROUTES.challenge, label: 'The Challenge' },
    { href: MARKETING_ROUTES.philosophy, label: 'Our Philosophy' },
    { href: MARKETING_ROUTES.reportSuite, label: 'The Report Suite' },
    { href: MARKETING_ROUTES.dashboardSuite, label: 'The Dashboard Suite' },
    { href: MARKETING_ROUTES.dailySamples, label: 'Daily Samples' },
    { href: MARKETING_ROUTES.pricing, label: 'Pricing' },
    { href: MARKETING_ROUTES.about, label: 'About Us' },
    { href: MARKETING_ROUTES.faq, label: 'FAQ' },
  ]

  return (
    <nav className="nav" aria-label="Main">
      <div className="row">
        <Link className="brand" href={MARKETING_HOME} aria-label="GammaStrat home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="nav-brand-img"
            src="/marketing/logo.png"
            alt="GammaStrat logo"
            width={164}
            height={73}
          />
        </Link>
        <div className="nav-cluster" id="navLinks">
          <div className="nav-primary">
            {navLinks.map(({ href, label }) => {
              if (!href) return null
              const active = pathname === href
              return (
                <Link
                  key={label}
                  className="nl"
                  href={href}
                  aria-current={active ? 'page' : undefined}
                  aria-label={label === 'FAQ' ? 'Frequently Asked Questions' : undefined}
                  title={label === 'FAQ' ? 'Frequently Asked Questions' : undefined}
                >
                  {label}
                </Link>
              )
            })}
          </div>
          <div className="nav-actions">
            <a className="nl nav-portal" href={membersUrl}>
              Member Portal<span className="nav-ext" aria-hidden="true">↗</span>
            </a>
            <MarketingCheckoutButton plan="free_trial" className="btn">
              Begin Your Free Trial<span className="ar">→</span>
            </MarketingCheckoutButton>
          </div>
        </div>
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
      </div>
    </nav>
  )
}
