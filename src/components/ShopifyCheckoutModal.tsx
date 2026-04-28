'use client'

import { useState } from 'react'

interface ShopifyCheckoutModalProps {
  planId: string
  variantId: string | undefined
  ctaText: string
  highlight: boolean
}

const SHOPIFY_DOMAIN = 'gammastrat.myshopify.com'
const CHECKOUT_DOMAIN = 'checkout.gammastrat.com'
const SHOPIFY_STOREFRONT_TOKEN = '78b1b7e7da0b1298d554ac6bcdce5164'

export default function ShopifyCheckoutModal({ planId, variantId, ctaText, highlight }: ShopifyCheckoutModalProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubscribe = async () => {
    if (!variantId) {
      setError('Plan not available. Please contact support.')
      return
    }
    setLoading(true)
    setError(null)

    try {
      const gid = `gid://shopify/ProductVariant/${variantId}`
      const query = `
        mutation cartCreate($input: CartInput!) {
          cartCreate(input: $input) {
            cart {
              checkoutUrl
            }
            userErrors {
              field
              message
            }
          }
        }
      `
      const variables = {
        input: {
          lines: [{ quantity: 1, merchandiseId: gid }]
        }
      }

      const res = await fetch(`https://${SHOPIFY_DOMAIN}/api/2024-01/graphql.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_TOKEN,
        },
        body: JSON.stringify({ query, variables }),
      })

      const data = await res.json()
      const url: string = data?.data?.cartCreate?.cart?.checkoutUrl
      const userErrors = data?.data?.cartCreate?.userErrors

      if (userErrors && userErrors.length > 0) {
        throw new Error(userErrors[0].message)
      }

      if (!url) throw new Error('Could not create checkout session.')

      // Replace myshopify.com domain with checkout.gammastrat.com
      const checkoutUrl = url.replace(SHOPIFY_DOMAIN, CHECKOUT_DOMAIN)

      // Open in same tab for seamless experience
      window.location.href = checkoutUrl
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div>
      <button
        onClick={handleSubscribe}
        disabled={loading}
        className={`w-full py-3 px-6 rounded-xl text-sm font-semibold transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed ${
          highlight
            ? 'bg-[#2DD4BF] text-[#0D0F12] hover:bg-[#22b8a4] shadow-[0_0_20px_rgba(45,212,191,0.3)]'
            : 'bg-white/8 text-white hover:bg-white/14 border border-white/10'
        }`}
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Preparing checkout...
          </span>
        ) : ctaText}
      </button>
      {error && (
        <p className="mt-2 text-xs text-red-400 text-center">{error}</p>
      )}
    </div>
  )
}
