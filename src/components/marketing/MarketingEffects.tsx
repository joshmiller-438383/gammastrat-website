'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { scrollToMarketingSection } from './marketingScroll'

function initTapeLoop() {
  const tape = document.getElementById('tape')
  if (!tape || tape.dataset.loopReady === '1') return
  const base = tape.innerHTML
  while (tape.scrollWidth < Math.max(window.innerWidth, 1400)) {
    tape.innerHTML += base
  }
  tape.innerHTML += tape.innerHTML
  tape.dataset.loopReady = '1'
}

function setupPageMotion() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const rises = Array.from(document.querySelectorAll('.rise'))

  let riseIo: IntersectionObserver | null = null
  if (reduced || !('IntersectionObserver' in window)) {
    rises.forEach((el) => el.classList.add('in'))
  } else {
    rises.forEach((el) => {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
        el.classList.add('in')
      }
    })
    riseIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const el = e.target as HTMLElement
          if (e.isIntersecting && e.intersectionRatio >= 0.12) {
            el.classList.add('in')
          }
        })
      },
      { threshold: [0, 0.12], rootMargin: '0px 0px -40px 0px' },
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
      { threshold: [0, 0.3] },
    )
    draws.forEach((p) => drawIo!.observe(p))
  } else {
    draws.forEach((p) => {
      p.style.strokeDashoffset = '0'
    })
  }

  const stats = Array.from(document.querySelectorAll('.statsband .sv[data-count]')) as HTMLElement[]
  let statsIo: IntersectionObserver | null = null

  const runCount = (el: HTMLElement) => {
    const target = parseFloat(el.getAttribute('data-count') || '0')
    const pre = el.getAttribute('data-prefix') || ''
    const suf = el.getAttribute('data-suffix') || ''
    if (reduced) {
      el.textContent = pre + target + suf
      return
    }
    const dur = 1100
    let t0: number | null = null
    const step = (ts: number) => {
      if (t0 === null) t0 = ts
      const p = Math.min((ts - t0) / dur, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      el.textContent = pre + Math.round(eased * target) + suf
      if (p < 1) requestAnimationFrame(step)
      else el.textContent = pre + target + suf
    }
    requestAnimationFrame(step)
  }

  const resetCount = (el: HTMLElement) => {
    const pre = el.getAttribute('data-prefix') || ''
    const suf = el.getAttribute('data-suffix') || ''
    el.textContent = pre + '0' + suf
  }

  if (stats.length) {
    if (reduced || !('IntersectionObserver' in window)) {
      stats.forEach(runCount)
    } else {
      stats.forEach(resetCount)
      statsIo = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            const el = e.target as HTMLElement & { _on?: boolean }
            if (e.isIntersecting && e.intersectionRatio >= 0.6) {
              if (!el._on) {
                el._on = true
                runCount(el)
              }
            } else if (!e.isIntersecting) {
              el._on = false
              resetCount(el)
            }
          })
        },
        { threshold: [0, 0.6] },
      )
      stats.forEach((el) => statsIo!.observe(el))
    }
  }

  return () => {
    riseIo?.disconnect()
    drawIo?.disconnect()
    statsIo?.disconnect()
  }
}

/**
 * Nav, scroll progress, tape, and per-route motion (.rise / stats / draws).
 */
export default function MarketingEffects() {
  const pathname = usePathname()

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const onSectionLinkClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement | null)?.closest?.('a')
      if (!anchor) return
      const href = anchor.getAttribute('href') || ''
      const hashIdx = href.indexOf('#')
      if (hashIdx === -1) return
      const path = href.slice(0, hashIdx) || window.location.pathname
      const sectionId = href.slice(hashIdx + 1)
      if (!sectionId) return
      if (path !== window.location.pathname && path !== '') return
      if (!document.getElementById(sectionId)) return
      e.preventDefault()
      scrollToMarketingSection(sectionId)
    }
    document.addEventListener('click', onSectionLinkClick)

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

    return () => {
      document.removeEventListener('click', onSectionLinkClick)
      tog?.removeEventListener('click', onToggle)
      links?.removeEventListener('click', onLinkClick)
      window.removeEventListener('scroll', onScroll)
      toTop?.removeEventListener('click', onToTop)
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })

    if (pathname === '/' || pathname === '/new') {
      initTapeLoop()
    }

    if (window.location.hash.length > 1) {
      const id = decodeURIComponent(window.location.hash.slice(1))
      requestAnimationFrame(() => scrollToMarketingSection(id))
    }

    let frame = 0
    let teardown: (() => void) | undefined
    frame = requestAnimationFrame(() => {
      teardown = setupPageMotion()
    })

    return () => {
      cancelAnimationFrame(frame)
      teardown?.()
    }
  }, [pathname])

  return null
}
