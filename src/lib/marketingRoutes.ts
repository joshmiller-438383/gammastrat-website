/** Canonical marketing homepage path (v6 design). */
export const MARKETING_HOME = '/'

/** Former preview path — redirects to {@link MARKETING_HOME}. */
export const MARKETING_HOME_LEGACY = '/new'

export function isMarketingHome(pathname: string): boolean {
  return pathname === MARKETING_HOME || pathname === MARKETING_HOME_LEGACY
}

/** Paths that resolve to the marketing homepage (for section links and scroll). */
export const MARKETING_HOME_PATHS = [MARKETING_HOME, MARKETING_HOME_LEGACY] as const
