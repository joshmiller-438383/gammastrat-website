/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: '*.shopify.com' },
      { protocol: 'https', hostname: 'cdn.shopify.com' },
    ],
  },
  poweredByHeader: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Exclude styled-components and sanity from SSR bundling to prevent useContext errors (Next.js 14)
  experimental: {
    serverComponentsExternalPackages: ['styled-components', 'sanity', '@sanity/ui', '@sanity/icons'],
  },
}
export default nextConfig
