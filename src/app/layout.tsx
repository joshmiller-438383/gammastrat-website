import type { Metadata } from 'next'
import './globals.css'
import { getSiteUrl } from '../lib/site'

export const metadata: Metadata = {
  title: 'GammaStrat — Data-Driven Options Trading',
  description: 'Powering confident decisions with AI analytics for active options traders and investors.',
  openGraph: {
    title: 'GammaStrat — Data-Driven Options Trading',
    description: 'Powering confident decisions with AI analytics for active options traders and investors.',
    url: getSiteUrl(),
    siteName: 'GammaStrat',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
