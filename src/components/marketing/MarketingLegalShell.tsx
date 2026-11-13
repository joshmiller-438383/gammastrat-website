import MarketingEffects from '@/components/marketing/MarketingEffects'
import MarketingNav from '@/components/marketing/MarketingNav'
import MarketingFooter from '@/components/marketing/MarketingFooter'
import { getMembersUrl } from '../../lib/site'

interface MarketingLegalShellProps {
  title: string
  updated: string
  children: React.ReactNode
}

/** Same serif + white/blue split as marketing landing page h1 titles. */
function legalPageHeading(title: string) {
  switch (title) {
    case 'Terms of Service':
      return (
        <>
          Terms of <em>Service.</em>
        </>
      )
    case 'Privacy Policy':
      return (
        <>
          Privacy <em>Policy.</em>
        </>
      )
    case 'Disclaimer':
      return (
        <>
          Legal <em>Disclaimer.</em>
        </>
      )
    default:
      return title
  }
}

/** Shared shell for /terms, /privacy, /disclaimer — matches marketing design. */
export default function MarketingLegalShell({ title, updated, children }: MarketingLegalShellProps) {
  const membersUrl = getMembersUrl()

  return (
    <div className="marketing-site">
      <MarketingEffects />
      <div className="scrollprog" id="scrollprog" aria-hidden="true" />
      <MarketingNav membersUrl={membersUrl} />
      <main className="legal-page">
        <div className="wrap">
          <div className="slabel rise">LEGAL</div>
          <h1 className="rise">{legalPageHeading(title)}</h1>
          <p className="legal-updated rise">Last updated: {updated}</p>
          <div className="legal-body rise">{children}</div>
        </div>
      </main>
      <MarketingFooter membersUrl={membersUrl} />
    </div>
  )
}
