'use client'

import { useState } from 'react'
import CheckoutEmailModal from '@/components/CheckoutEmailModal'

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
  const [modalOpen, setModalOpen] = useState(false)

  const handleClick = () => {
    if (checkoutUrl) {
      window.location.href = checkoutUrl
      return
    }
    setModalOpen(true)
  }

  return (
    <div>
      <button
        onClick={handleClick}
        className={`w-full py-3 px-6 rounded-xl text-sm font-semibold transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed ${
          highlight
            ? 'bg-[#C9A24A] text-[#05070B] hover:bg-[#D4AF5C] shadow-[0_0_20px_rgba(201,162,74,0.3)] hover:scale-[1.02]'
            : 'bg-white/8 text-white hover:bg-white/14 border border-white/10'
        }`}
      >
        {ctaText}
      </button>
      <CheckoutEmailModal
        open={modalOpen}
        planId={planId}
        planLabel={ctaText}
        variant="legacy"
        onClose={() => setModalOpen(false)}
        onComplete={() => setModalOpen(false)}
      />
    </div>
  )
}
