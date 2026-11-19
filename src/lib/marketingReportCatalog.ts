/**
 * Client report-suite + pricing labels (spec §5–6). Single source for order and names.
 */

export interface MarketingReportItem {
  label: string
  terminal?: boolean
}

/** §5a–5b — Free Trial and Alpha (same order). */
export const TRIAL_AND_ALPHA_REPORTS: readonly MarketingReportItem[] = [
  { label: 'Alpha daily summary' },
  { label: 'Alpha daily terminal dashboard', terminal: true },
  { label: 'Daily sentiment gauge' },
  { label: 'Daily probability dashboard' },
  { label: 'Daily positioning' },
  { label: 'Daily risk reward analysis' },
  { label: 'Daily expected values' },
]

/** §5c — Delta tier materials (display order). */
export const DELTA_TIER_REPORTS: readonly MarketingReportItem[] = [
  { label: 'Delta daily summary' },
  { label: 'Delta daily terminal dashboard', terminal: true },
  { label: 'Daily insights' },
  { label: 'Daily volatility curves' },
  { label: 'Daily volatility regime' },
]

/** §5d — Gamma tier materials (display order). */
export const GAMMA_TIER_REPORTS: readonly MarketingReportItem[] = [
  { label: 'Gamma daily summary' },
  { label: 'Gamma daily terminal dashboard', terminal: true },
  { label: 'Filtered ticker analysis' },
  { label: 'Volatility trade candidates' },
  { label: 'Volatility surface analysis' },
  { label: 'Put/Call flow rankings' },
  { label: 'Put/Call ratio rankings' },
  { label: 'Relative put/call demand' },
]

/** Report totals on pricing / report suite (confirm with client if needed). */
export const REPORT_COUNTS = {
  trialAndAlpha: TRIAL_AND_ALPHA_REPORTS.length,
  deltaTotal: 12,
  gammaTotal: 20,
} as const