'use client'

import { useState } from 'react'
import CheckoutEmailModal from '@/components/CheckoutEmailModal'
import {
  type BillingInterval,
  MARKETING_PLAN_IDS,
  type MarketingPlanKey,
  resolveCheckoutPlanId,
} from '@/lib/marketingBilling'

export { MARKETING_PLAN_IDS, type MarketingPlanKey }

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
 * Collects email, then POST /api/checkout/public with planId + email.
 * Existing subscribers are routed to Billing Portal (not a second checkout).
 */
export default function MarketingCheckoutButton({
  plan,
  billing = 'month',
  className,
  style,
  children,
  ariaLabel,
}: MarketingCheckoutButtonProps) {
  const [modalOpen, setModalOpen] = useState(false)
  const planId = resolveCheckoutPlanId(plan, billing)

  return (
    <>
      <button
        type="button"
        className={className}
        style={style}
        aria-label={ariaLabel}
        onClick={() => setModalOpen(true)}
      >
        {children}
      </button>
      <CheckoutEmailModal
        open={modalOpen}
        planId={planId}
        planLabel={typeof children === 'string' ? children : undefined}
        variant="marketing"
        onClose={() => setModalOpen(false)}
        onComplete={() => setModalOpen(false)}
      />
    </>
  )
}
