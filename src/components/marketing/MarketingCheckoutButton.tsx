'use client'

import { useState } from 'react'

/** Map new marketing tier names → members/Stripe planIds (existing checkout API). */
export const MARKETING_PLAN_IDS = {
  free_trial: 'free_trial',
  trial: 'free_trial',
  free: 'free_trial',
  alpha: 'basic',
  basic: 'basic',
  delta: 'basic',
  gamma: 'gamma',
  dpt: 'gamma',
} as const

export type MarketingPlanKey = keyof typeof MARKETING_PLAN_IDS

function resolvePlanId(plan: string): string {
  const key = plan.toLowerCase().replace(/-/g, '_') as MarketingPlanKey
  return MARKETING_PLAN_IDS[key] || plan
}

/** Same-origin proxy — never call members host from the browser (CORS / wrong env). */
const CHECKOUT_API = '/api/checkout/public'

interface MarketingCheckoutButtonProps {
  plan: string
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
    const planId = resolvePlanId(plan)

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
