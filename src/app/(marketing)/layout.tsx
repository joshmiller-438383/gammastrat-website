import '../../styles/marketing.css'
import MarketingShell from '@/components/marketing/MarketingShell'

/** Lock horizontal overflow before hydration (mobile Safari / DevTools). */
const marketingOverflowBoot = `
try {
  document.documentElement.classList.add('marketing-html');
  document.body.classList.add('marketing-body');
  document.documentElement.style.overflowX = 'hidden';
  document.body.style.overflowX = 'hidden';
  document.documentElement.style.maxWidth = '100%';
  document.body.style.maxWidth = '100%';
} catch (_) {}
`

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: marketingOverflowBoot }} />
      <MarketingShell>{children}</MarketingShell>
    </>
  )
}
