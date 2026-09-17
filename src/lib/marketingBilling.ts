/** Map marketing tier names → members checkout planIds. */
export const MARKETING_PLAN_IDS = {
  free_trial: 'free_trial',
  trial: 'free_trial',
  free: 'free_trial',
  alpha: 'alpha',
  delta: 'delta',
  gamma: 'gamma',
  /** Legacy /plans page only */
  basic: 'basic',
  dpt: 'gamma',
} as const

export type MarketingPlanKey = keyof typeof MARKETING_PLAN_IDS
export type BillingInterval = 'month' | 'year'

const YEARLY_ELIGIBLE = new Set(['alpha', 'delta', 'gamma'])

function resolveBasePlanId(plan: string): string {
  const key = plan.toLowerCase().replace(/-/g, '_') as MarketingPlanKey
  return MARKETING_PLAN_IDS[key] || plan
}

/** Map UI plan + billing interval → members portal checkout planId. */
export function resolveCheckoutPlanId(plan: string, billing: BillingInterval): string {
  const base = resolveBasePlanId(plan)
  if (billing === 'year' && YEARLY_ELIGIBLE.has(base)) {
    return `${base}_yearly`
  }
  return base
}

export function formatUsd(amount: number): string {
  return amount.toLocaleString('en-US')
}
