import type { MetadataRoute } from 'next'
import { getSiteUrl } from '@/lib/site'
import { MARKETING_PAGE_PATHS } from '@/lib/marketingRoutes'

const LEGAL_PATHS = ['/terms', '/privacy', '/disclaimer'] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl()
  const paths = [...MARKETING_PAGE_PATHS, ...LEGAL_PATHS]

  return paths.map((path) => ({
    url: path === '/' ? `${base}/` : `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : path === '/pricing' ? 0.9 : 0.7,
  }))
}