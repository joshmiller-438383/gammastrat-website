'use client'

const MEMBERS_BASE = 'https://members.gammastrat.com'

interface StripeCheckoutButtonProps {
  planId: string
  ctaText: string
  highlight: boolean
  checkoutUrl?: string | null
}

export default function StripeCheckoutButton({
  planId,
  ctaText,
  highlight,
  checkoutUrl,
}: StripeCheckoutButtonProps) {
  const href =
    checkoutUrl ||
    `${MEMBERS_BASE}/checkout?plan=${encodeURIComponent(planId)}`

  return (
    <a
      href={href}
      className={`block w-full py-3 px-6 rounded-xl text-sm font-semibold text-center transition-all duration-200 ${
        highlight
          ? 'bg-[#C9A24A] text-[#05070B] hover:bg-[#D4AF5C] shadow-[0_0_20px_rgba(201,162,74,0.3)] hover:scale-[1.02]'
          : 'bg-white/8 text-white hover:bg-white/14 border border-white/10'
      }`}
    >
      {ctaText}
    </a>
  )
}
