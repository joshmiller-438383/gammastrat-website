/** Canonical marketing homepage path (v6 design). */
export const MARKETING_HOME = '/'

/** Former preview path — redirects to {@link MARKETING_HOME}. */
export const MARKETING_HOME_LEGACY = '/new'

export const MARKETING_ROUTES = {
  home: MARKETING_HOME,
  challenge: '/the-problem',
  philosophy: '/the-method',
  reportSuite: '/the-report-suite',
  dashboardSuite: '/the-terminal-reports',
  dailySamples: '/daily-samples',
  pricing: '/pricing',
  about: '/about',
  faq: '/faq',
  /** @deprecated Renamed — use {@link MARKETING_ROUTES.challenge} */
  problem: '/the-problem',
  /** @deprecated Renamed — use {@link MARKETING_ROUTES.philosophy} */
  method: '/the-method',
  /** @deprecated Renamed — use {@link MARKETING_ROUTES.dashboardSuite} */
  terminalReports: '/the-terminal-reports',
} as const

export type MarketingRoutePath =
  (typeof MARKETING_ROUTES)[keyof typeof MARKETING_ROUTES]

/** Primary marketing pages (multi-page layout; section components unchanged). */
export const MARKETING_PAGE_PATHS: readonly string[] = [
  MARKETING_HOME,
  MARKETING_ROUTES.challenge,
  MARKETING_ROUTES.philosophy,
  MARKETING_ROUTES.reportSuite,
  MARKETING_ROUTES.dashboardSuite,
  MARKETING_ROUTES.dailySamples,
  MARKETING_ROUTES.pricing,
  MARKETING_ROUTES.about,
  MARKETING_ROUTES.faq,
]

export function isMarketingHome(pathname: string): boolean {
  return pathname === MARKETING_HOME || pathname === MARKETING_HOME_LEGACY
}

export function isMarketingPage(pathname: string): boolean {
  return MARKETING_PAGE_PATHS.includes(pathname)
}

/** @deprecated Use {@link isMarketingPage} — kept for scroll helpers during transition. */
export function isMarketingHomePath(pathname: string): boolean {
  return isMarketingPage(pathname) || isMarketingHome(pathname)
}

export const MARKETING_HOME_PATHS = [MARKETING_HOME, MARKETING_HOME_LEGACY] as const
