'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import {
  consumeMarketingSectionScroll,
  parseMarketingSectionHref,
  queueMarketingSectionScroll,
  scrollToMarketingSection,
} from './marketingScroll'

/**
 * Ports the design package's main.js interactions used by early sections:
 * ticker tape loop, mobile nav toggle, nav scroll state, scroll progress.
 */
export default function MarketingEffects() {
  const router = useRouter()

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const goToSection = (id: string) => {
      if (window.location.pathname === '/new') {
        scrollToMarketingSection(id)
        window.history.replaceState(null, '', '/new')
        return
      }
      queueMarketingSectionScroll(id)
      router.push('/new')
    }

    const runPendingScroll = () => {
      const pending = consumeMarketingSectionScroll()
      if (!pending) return
      const attempt = (tries: number) => {
        if (scrollToMarketingSection(pending) || tries <= 0) {
          window.history.replaceState(null, '', '/new')
          return
        }
        requestAnimationFrame(() => attempt(tries - 1))
      }
      requestAnimationFrame(() => attempt(8))
    }

    runPendingScroll()

    const onSectionLinkClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement | null)?.closest?.('a')
      if (!anchor) return

      const sectionId =
        anchor.dataset.mktSection ||
        parseMarketingSectionHref(anchor.getAttribute('href') || '')

      if (!sectionId) return

      // Same-page # links on /new
      if (
        window.location.pathname === '/new' &&
        anchor.getAttribute('href')?.startsWith('#') &&
        document.getElementById(sectionId)
      ) {
        e.preventDefault()
        scrollToMarketingSection(sectionId)
        window.history.replaceState(null, '', '/new')
        return
      }

      // /new#section or data-mkt-section from any marketing page
      if (anchor.dataset.mktSection || parseMarketingSectionHref(anchor.getAttribute('href') || '')) {
        e.preventDefault()
        goToSection(sectionId)
      }
    }
    document.addEventListener('click', onSectionLinkClick)

    // Legacy: bookmarked /new#section — scroll then strip hash immediately
    if (window.location.pathname === '/new' && window.location.hash.length > 1) {
      const id = decodeURIComponent(window.location.hash.slice(1))
      requestAnimationFrame(() => {
        scrollToMarketingSection(id)
        window.history.replaceState(null, '', '/new')
      })
    }

    const tape = document.getElementById('tape')
    if (tape) {
      const base = tape.innerHTML
      while (tape.scrollWidth < Math.max(window.innerWidth, 1400)) {
        tape.innerHTML += base
      }
      tape.innerHTML += tape.innerHTML
    }

    const nav = document.querySelector('.nav')
    const tog = document.getElementById('navToggle')
    const links = document.getElementById('navLinks')
    const onToggle = () => {
      if (!nav || !tog) return
      const open = nav.classList.toggle('open')
      tog.setAttribute('aria-expanded', open ? 'true' : 'false')
      tog.setAttribute('aria-label', open ? 'Close menu' : 'Open menu')
    }
    const onLinkClick = (e: Event) => {
      if (!nav || !tog) return
      if ((e.target as HTMLElement).closest('a')) {
        nav.classList.remove('open')
        tog.setAttribute('aria-expanded', 'false')
        tog.setAttribute('aria-label', 'Open menu')
      }
    }
    tog?.addEventListener('click', onToggle)
    links?.addEventListener('click', onLinkClick)

    const prog = document.getElementById('scrollprog')
    const toTop = document.getElementById('toTop')
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        ticking = false
        const st = window.scrollY || document.documentElement.scrollTop
        nav?.classList.toggle('scrolled', st > 8)
        if (prog && !reduced) {
          const h = document.documentElement.scrollHeight - window.innerHeight
          prog.style.width = `${h > 0 ? (st / h) * 100 : 0}%`
        }
        toTop?.classList.toggle('show', st > 640)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    const onToTop = () => {
      window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })
    }
    toTop?.addEventListener('click', onToTop)

    const rises = Array.from(document.querySelectorAll('.rise'))
    let riseIo: IntersectionObserver | null = null
    if (reduced || !('IntersectionObserver' in window)) {
      rises.forEach((el) => el.classList.add('in'))
    } else {
      riseIo = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            const el = e.target as HTMLElement
            if (e.isIntersecting && e.intersectionRatio >= 0.12) {
              el.classList.add('in')
            }
          })
        },
        { threshold: [0, 0.12], rootMargin: '0px 0px -40px 0px' }
      )
      rises.forEach((el) => riseIo!.observe(el))
    }

    const draws = Array.from(document.querySelectorAll('.draw')) as SVGGeometryElement[]
    let drawIo: IntersectionObserver | null = null
    draws.forEach((p) => {
      let len = 600
      try {
        len = p.getTotalLength()
      } catch {
        /* ignore */
      }
      ;(p as SVGGeometryElement & { _len?: number })._len = len
      p.style.strokeDasharray = String(len)
      p.style.strokeDashoffset = reduced ? '0' : String(len)
      p.style.transition = 'stroke-dashoffset 1.85s cubic-bezier(.22,.7,.3,1) .35s'
    })
    if (!reduced && 'IntersectionObserver' in window) {
      drawIo = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            const el = e.target as SVGGeometryElement & { _len?: number }
            if (e.isIntersecting && e.intersectionRatio >= 0.3) {
              el.style.strokeDashoffset = '0'
            } else if (!e.isIntersecting) {
              el.style.strokeDashoffset = String(el._len ?? 600)
            }
          })
        },
        { threshold: [0, 0.3] }
      )
      draws.forEach((p) => drawIo!.observe(p))
    } else {
      draws.forEach((p) => {
        p.style.strokeDashoffset = '0'
      })
    }

    return () => {
      document.removeEventListener('click', onSectionLinkClick)
      tog?.removeEventListener('click', onToggle)
      links?.removeEventListener('click', onLinkClick)
      window.removeEventListener('scroll', onScroll)
      toTop?.removeEventListener('click', onToTop)
      riseIo?.disconnect()
      drawIo?.disconnect()
    }
  }, [router])

  return null
}
