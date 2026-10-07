export type CheckoutResult =
  | { type: 'checkout'; url: string }
  | { type: 'portal'; url: string; message?: string }
  | { type: 'same_plan'; message: string }

export function isValidCheckoutEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

/**
 * Start checkout via same-origin proxy → members portal.
 * Email is required so existing subscribers are routed to Billing Portal.
 */
export async function startCheckout(params: {
  planId: string
  email: string
}): Promise<CheckoutResult> {
  const res = await fetch('/api/checkout/public', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      planId: params.planId,
      email: params.email.trim().toLowerCase(),
    }),
  })

  const data = (await res.json()) as {
    type?: string
    url?: string
    message?: string
    error?: string
  }

  if (data.type === 'same_plan' || res.status === 409) {
    return {
      type: 'same_plan',
      message:
        data.message ||
        'You are already subscribed to this plan. Log in to manage your subscription.',
    }
  }

  if (!res.ok) {
    throw new Error(data.error || data.message || 'Could not start checkout.')
  }

  if (data.type === 'portal' && data.url) {
    return { type: 'portal', url: data.url, message: data.message }
  }

  if (data.url) {
    return { type: 'checkout', url: data.url }
  }

  throw new Error(data.error || 'No checkout URL returned.')
}
