import MarketingEffects from '@/components/marketing/MarketingEffects'
import MarketingNav from '@/components/marketing/MarketingNav'
import MarketingFooter from '@/components/marketing/MarketingFooter'
import { getMembersUrl } from '../../lib/site'

interface MarketingLegalShellProps {
  title: string
  updated: string
  children: React.ReactNode
}

/** Shared shell for /terms, /privacy — matches /new marketing design. */
export default function MarketingLegalShell({ title, updated, children }: MarketingLegalShellProps) {
  const membersUrl = getMembersUrl()

  return (
    <>
      <MarketingEffects />
      <div className="scrollprog" id="scrollprog" aria-hidden="true" />
      <MarketingNav membersUrl={membersUrl} />
      <main className="legal-page">
        <div className="wrap">
          <div className="slabel rise">LEGAL</div>
          <h1 className="rise">{title}</h1>
          <p className="legal-updated rise">Last updated: {updated}</p>
          <div className="legal-body rise">{children}</div>
        </div>
      </main>
      <MarketingFooter membersUrl={membersUrl} />
    </>
  )
}
