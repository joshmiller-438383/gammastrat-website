'use client'

// Force dynamic to prevent static prerendering issues with Next.js 14
export const dynamic = 'force-dynamic'

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '100px 20px', backgroundColor: '#0D0F12', color: '#ffffff', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      <p style={{ color: '#2DD4BF', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>404 — Not Found</p>
      <h1 style={{ fontSize: '48px', fontWeight: 700, marginBottom: '16px' }}>Page not found</h1>
      <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '32px' }}>The page you&apos;re looking for doesn&apos;t exist.</p>
      <a href="/" style={{ display: 'inline-block', backgroundColor: '#2DD4BF', color: '#0D0F12', padding: '12px 24px', borderRadius: '8px', fontWeight: 600, textDecoration: 'none' }}>
        Back to home
      </a>
    </div>
  )
}
