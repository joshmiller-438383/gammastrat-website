'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import {
  isValidCheckoutEmail,
  startCheckout,
  type CheckoutResult,
} from '@/lib/checkoutClient'
import { getMembersLoginUrl } from '@/lib/membersUrl'

type CheckoutEmailModalProps = {
  open: boolean
  planLabel?: string
  onClose: () => void
  onComplete: (result: CheckoutResult) => void
  planId: string
  /** marketing = homepage CSS; legacy = /plans tailwind-adjacent */
  variant?: 'marketing' | 'legacy'
}

export default function CheckoutEmailModal({
  open,
  planLabel,
  onClose,
  onComplete,
  planId,
  variant = 'marketing',
}: CheckoutEmailModalProps) {
  const titleId = useId()
  const inputRef = useRef<HTMLInputElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [info, setInfo] = useState<string | null>(null)

  useEffect(() => {
    if (!open) return
    setError(null)
    setInfo(null)
    const t = window.setTimeout(() => inputRef.current?.focus(), 0)
    return () => window.clearTimeout(t)
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  /** Keep page behind modal from scrolling (especially iOS / tablet). */
  useEffect(() => {
    if (!open) return
    const html = document.documentElement
    const body = document.body
    const scrollY = window.scrollY

    const prev = {
      htmlOverflow: html.style.overflow,
      bodyOverflow: body.style.overflow,
      bodyPosition: body.style.position,
      bodyTop: body.style.top,
      bodyLeft: body.style.left,
      bodyRight: body.style.right,
      bodyWidth: body.style.width,
    }

    html.classList.add('checkout-modal-open')
    html.style.overflow = 'hidden'
    body.style.overflow = 'hidden'
    body.style.position = 'fixed'
    body.style.top = `-${scrollY}px`
    body.style.left = '0'
    body.style.right = '0'
    body.style.width = '100%'

    return () => {
      html.classList.remove('checkout-modal-open')
      html.style.overflow = prev.htmlOverflow
      body.style.overflow = prev.bodyOverflow
      body.style.position = prev.bodyPosition
      body.style.top = prev.bodyTop
      body.style.left = prev.bodyLeft
      body.style.right = prev.bodyRight
      body.style.width = prev.bodyWidth
      window.scrollTo(0, scrollY)
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const overlay = overlayRef.current
    if (!overlay) return
    const blockBackdropScroll = (e: TouchEvent) => {
      if (e.target === overlay) e.preventDefault()
    }
    overlay.addEventListener('touchmove', blockBackdropScroll, { passive: false })
    return () => overlay.removeEventListener('touchmove', blockBackdropScroll)
  }, [open])

  if (!open || typeof document === 'undefined') return null

  const shellClass =
    variant === 'marketing' ? 'checkout-email-modal checkout-email-modal--mkt' : 'checkout-email-modal checkout-email-modal--legacy'

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setInfo(null)

    if (!isValidCheckoutEmail(email)) {
      setError('Enter a valid email address.')
      return
    }

    setLoading(true)
    try {
      const result = await startCheckout({ planId, email })

      if (result.type === 'same_plan') {
        setInfo(result.message)
        setLoading(false)
        return
      }

      if (result.type === 'portal') {
        if (result.message) setInfo(result.message)
        window.location.href = result.url
        return
      }

      onComplete(result)
      window.location.href = result.url
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return createPortal(
    <div ref={overlayRef} className={shellClass} role="presentation" onClick={onClose}>
      <div
        className="checkout-email-modal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="checkout-email-modal__close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <h2 id={titleId} className="checkout-email-modal__title">
          {planLabel ? `Continue with ${planLabel}` : 'Continue to checkout'}
        </h2>
        <p className="checkout-email-modal__lead">
          Use the same email you’ll use for your GammaStrat member account. If you already subscribe, we’ll
          send you to manage your plan instead of starting a second subscription.
        </p>
        <form onSubmit={handleSubmit} className="checkout-email-modal__form">
          <label className="checkout-email-modal__label" htmlFor={`${titleId}-email`}>
            Email address
          </label>
          <input
            ref={inputRef}
            id={`${titleId}-email`}
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder="you@example.com"
            className="checkout-email-modal__input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            required
          />
          {error && (
            <p className="checkout-email-modal__error" role="alert">
              {error}
            </p>
          )}
          {info && (
            <p className="checkout-email-modal__info" role="status">
              {info}{' '}
              <a href={getMembersLoginUrl('/dashboard')} className="checkout-email-modal__link">
                Log in to the member portal
              </a>
            </p>
          )}
          <button type="submit" className="checkout-email-modal__submit" disabled={loading}>
            {loading ? 'Checking…' : 'Continue'}
          </button>
        </form>
      </div>
    </div>,
    document.body,
  )
}
