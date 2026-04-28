'use client'
import dynamic from 'next/dynamic'

const NextStudio = dynamic(
  () => import('next-sanity/studio').then((mod) => mod.NextStudio),
  { ssr: false }
)

const sanityConfig = dynamic(
  () => import('../../../../sanity.config'),
  { ssr: false }
)

export default function StudioPage() {
  return <NextStudio config={sanityConfig as any} />
}
