'use client'
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body style={{ margin: 0, backgroundColor: '#0D0F12', color: '#ffffff', fontFamily: 'system-ui, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', textAlign: 'center' }}>
        <div>
          <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px' }}>Something went wrong</h2>
          <button onClick={() => reset()} style={{ backgroundColor: '#2DD4BF', color: '#0D0F12', padding: '12px 24px', borderRadius: '8px', fontWeight: 600, border: 'none', cursor: 'pointer' }}>
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}
