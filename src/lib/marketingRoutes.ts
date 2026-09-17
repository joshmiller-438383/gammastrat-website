/** Canonical marketing homepage path (v6 design preview). */
export const MARKETING_HOME = '/new'

export function isMarketingHome(pathname: string): boolean {
  return pathname === MARKETING_HOME
}

/** Paths that resolve to the marketing homepage (for section links and scroll). */
export const MARKETING_HOME_PATHS = [MARKETING_HOME] as const
