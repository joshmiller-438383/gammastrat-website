/**
 * Site / members URLs — env-first, no hardcoded local ports.
 *
 * Production: uses host env, or falls back to gammastrat.com / members.gammastrat.com.
 * Development: set NEXT_PUBLIC_* in .env.local (copy from .env.example first).
 *
 * Checkout from the browser uses same-origin `/api/checkout/public` (proxy).
 */

const PROD_MEMBERS = 'https://members.gammastrat.com'
const PROD_SITE = 'https://gammastrat.com'

function stripSlash(url: string): string {
  return url.replace(/\/$/, '')
}

function readEnv(...keys: string[]): string | undefined {
  for (const key of keys) {
    const value = process.env[key]?.trim()
    if (value) return stripSlash(value)
  }
  return undefined
}

function resolveUrl(envKeys: string[], prodDefault: string, label: string): string {
  const fromEnv = readEnv(...envKeys)
  if (fromEnv) return fromEnv
  if (process.env.NODE_ENV === 'production') return prodDefault
  throw new Error(
    `Missing ${label} (${envKeys.join(' or ')}). Copy .env.example to .env.local and set your URLs.`,
  )
}

/** Members app origin — Member Portal links and checkout proxy target. */
export function getMembersUrl(): string {
  return resolveUrl(['NEXT_PUBLIC_MEMBERS_URL', 'MEMBERS_URL'], PROD_MEMBERS, 'members URL')
}

/** Marketing site origin — metadata, Stripe return URLs when origin header absent. */
export function getSiteUrl(): string {
  return resolveUrl(['NEXT_PUBLIC_SITE_URL'], PROD_SITE, 'site URL')
}

/** Members checkout API (server-side only). */
export function getMembersCheckoutApiUrl(): string {
  return `${getMembersUrl()}/api/checkout/public`
}
