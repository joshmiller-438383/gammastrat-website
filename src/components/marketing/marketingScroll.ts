export const MARKETING_SCROLL_OFFSET = 88
export const MKT_SCROLL_TO_KEY = 'mktScrollTo'

export function scrollToMarketingSection(id: string): boolean {
  const el = document.getElementById(id)
  if (!el) return false
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const top = el.getBoundingClientRect().top + window.scrollY - MARKETING_SCROLL_OFFSET
  window.scrollTo({ top, behavior: reduced ? 'auto' : 'smooth' })
  return true
}

export function queueMarketingSectionScroll(id: string): void {
  try {
    sessionStorage.setItem(MKT_SCROLL_TO_KEY, id)
  } catch {
    /* ignore */
  }
}

export function consumeMarketingSectionScroll(): string | null {
  try {
    const id = sessionStorage.getItem(MKT_SCROLL_TO_KEY)
    if (id) sessionStorage.removeItem(MKT_SCROLL_TO_KEY)
    return id
  } catch {
    return null
  }
}

/** Parse section id from `#foo` or `/new#foo` — no query/hash left in URL after navigate. */
export function parseMarketingSectionHref(href: string): string | null {
  if (href.startsWith('#') && href.length > 1) return href.slice(1)
  try {
    const url = new URL(href, 'http://local')
    if (url.pathname === '/new' && url.hash.length > 1) return url.hash.slice(1)
  } catch {
    /* ignore */
  }
  return null
}
