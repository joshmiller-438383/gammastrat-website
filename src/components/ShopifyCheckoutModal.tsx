'use client'

import { useState, useEffect, useRef } from 'react'

interface ShopifyCheckoutModalProps {
  planId: string
  variantId?: string
  ctaText: string
  highlight?: boolean
}

export default function ShopifyCheckoutModal({ planId, variantId, ctaText, highlight }: ShopifyCheckoutModalProps) {
  const [open, setOpen] = useState(false)
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const handleOpen = async () => {
    setOpen(true)
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/shopify/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ planId, variantId }),
      })
      const data = await res.json()
      if (data.checkoutUrl) {
        setCheckoutUrl(data.checkoutUrl)
      } else {
        setError('Could not load checkout. Please try again.')
      }
    } catch {
      setError('Could not load checkout. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleClose = () => {
    setOpen(false)
    setCheckoutUrl(null)
    setError(null)
  }

  // Close on Escape key
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <button
        onClick={handleOpen}
        className={`w-full text-center py-3 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
          highlight
            ? 'bg-[#2DD4BF] hover:bg-[#22b8a6] text-[#0D0F12]'
            : 'bg-white/8 hover:bg-white/15 text-white border border-white/10'
        }`}
      >
        {ctaText}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.85)' }}
          onClick={(e) => { if (e.target === e.currentTarget) handleClose() }}
        >
          <div className="relative w-full max-w-lg bg-[#0D0F12] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            style={{ height: '85vh', maxHeight: '700px' }}>
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#2DD4BF]" />
                <span className="text-sm font-semibold text-white">Secure Checkout</span>
              </div>
              <button
                onClick={handleClose}
                className="text-white/40 hover:text-white transition-colors text-xl leading-none"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            {/* Content */}
            <div className="relative w-full" style={{ height: 'calc(100% - 57px)' }}>
              {loading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <div className="w-8 h-8 border-2 border-[#2DD4BF]/30 border-t-[#2DD4BF] rounded-full animate-spin" />
                  <p className="text-white/50 text-sm">Loading secure checkout...</p>
                </div>
              )}

              {error && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
                  <p className="text-white/70 text-sm">{error}</p>
                  <button
                    onClick={handleOpen}
                    className="px-4 py-2 bg-[#2DD4BF] text-[#0D0F12] rounded-lg text-sm font-semibold"
                  >
                    Try Again
                  </button>
                </div>
              )}

              {checkoutUrl && !loading && (
                <iframe
                  ref={iframeRef}
                  src={checkoutUrl}
                  className="w-full h-full border-0"
                  title="Secure Checkout"
                  allow="payment"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
