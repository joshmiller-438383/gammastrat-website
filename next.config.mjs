/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{ source: '/new', destination: '/', permanent: true }]
  },
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
  // Fewer watched paths → fewer open file descriptors (macOS EMFILE)
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ...config.watchOptions,
        ignored: ['**/.git/**', '**/node_modules/**', '**/.next/**'],
      }
    }
    return config
  },
}
export default nextConfig
