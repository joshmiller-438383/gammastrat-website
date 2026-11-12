import MarketingEffects from '@/components/marketing/MarketingEffects'
import MarketingFooter from '@/components/marketing/MarketingFooter'
import MarketingNav from '@/components/marketing/MarketingNav'
import { getMembersUrl } from '@/lib/site'

interface MarketingShellProps {
  children: React.ReactNode
}

/** Shared chrome for marketing pages (nav, effects, footer). Page body is {@link children}. */
export default function MarketingShell({ children }: MarketingShellProps) {
  const membersUrl = getMembersUrl()

  return (
    <>
      <MarketingEffects />
      <div className="scrollprog" id="scrollprog" aria-hidden="true" />
      <MarketingNav membersUrl={membersUrl} />
      {children}
      <MarketingFooter membersUrl={membersUrl} />
    </>
  )
}
