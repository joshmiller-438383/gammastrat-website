'use client'

import { useState } from 'react'
import {
  type BillingInterval,
  MARKETING_PLAN_IDS,
  type MarketingPlanKey,
  resolveCheckoutPlanId,
} from '@/lib/marketingBilling'

export { MARKETING_PLAN_IDS, type MarketingPlanKey }

/** Same-origin proxy — never call members host from the browser (CORS / wrong env). */
const CHECKOUT_API = '/api/checkout/public'

interface MarketingCheckoutButtonProps {
  plan: string
  /** Monthly by default; pricing section passes toggle state for paid tiers. */
  billing?: BillingInterval
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
  ariaLabel?: string
}

/**
 * Same Stripe/members checkout as `/plans`, styled with marketing CSS.
 */
export default function MarketingCheckoutButton({
  plan,
  billing = 'month',
  className,
  style,
  children,
  ariaLabel,
}: MarketingCheckoutButtonProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleClick = async () => {
    setLoading(true)
    setError(null)
    const planId = resolveCheckoutPlanId(plan, billing)

    try {
      const res = await fetch(CHECKOUT_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ planId }),
      })
      const data = await res.json()
      if (!res.ok || !data.url) {
        throw new Error(data.error || 'Could not create checkout session.')
      }
      window.location.href = data.url
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      setError(message)
      setLoading(false)
    }
  }

  return (
    <>
      <button
        type="button"
        className={className}
        style={{
          ...style,
          cursor: loading ? 'wait' : undefined,
          opacity: loading ? 0.7 : undefined,
        }}
        aria-label={ariaLabel}
        disabled={loading}
        onClick={handleClick}
      >
        {loading ? 'Preparing checkout…' : children}
      </button>
      {error && (
        <span role="alert" className="mkt-checkout-error">
          {error}
        </span>
      )}
    </>
  )
}
