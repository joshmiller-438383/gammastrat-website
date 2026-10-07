/** Client-safe members portal origin (NEXT_PUBLIC_MEMBERS_URL). */
export function getMembersOrigin(): string {
  const fromEnv = process.env.NEXT_PUBLIC_MEMBERS_URL?.trim()
  if (fromEnv) return fromEnv.replace(/\/$/, '')
  if (process.env.NODE_ENV === 'production') return 'https://members.gammastrat.com'
  return 'http://localhost:3001'
}

export function getMembersLoginUrl(redirectPath = '/dashboard'): string {
  const base = getMembersOrigin()
  const redirect = encodeURIComponent(redirectPath)
  return `${base}/login?redirect=${redirect}`
}
