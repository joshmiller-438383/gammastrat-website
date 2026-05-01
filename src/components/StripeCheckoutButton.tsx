'use client'
import { useState } from 'react'

interface StripeCheckoutButtonProps {
  planId: string
  ctaText: string
  highlight: boolean
  checkoutUrl?: string | null
}

const MEMBERS_API = 'https://members.gammastrat.com/api/checkout/public'

export default function StripeCheckoutButton({
  planId,
  ctaText,
  highlight,
  checkoutUrl,
}: StripeCheckoutButtonProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleClick = async () => {
    // If a manual override URL is set, go there directly
    if (checkoutUrl) {
      window.location.href = checkoutUrl
      return
    }

    setLoading(true)
    setError(null)

    try {
      const res = await fetch(MEMBERS_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ planId }),
      })
      const data = await res.json()
      if (!res.ok || !data.url) {
        throw new Error(data.error || 'Could not create checkout session.')
      }
      window.location.href = data.url
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div>
      <button
        onClick={handleClick}
        disabled={loading}
        className={`w-full py-3 px-6 rounded-xl text-sm font-semibold transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed ${
          highlight
            ? 'bg-[#C9A24A] text-[#05070B] hover:bg-[#D4AF5C] shadow-[0_0_20px_rgba(201,162,74,0.3)] hover:scale-[1.02]'
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
