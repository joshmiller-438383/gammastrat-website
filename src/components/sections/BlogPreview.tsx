import Link from 'next/link'

interface PostItem {
  _id?: string
  tag?: string
  title: string
  excerpt?: string
  description?: string
  slug?: { current: string }
  publishedAt?: string
  image?: string
}

interface BlogPreviewProps {
  items?: PostItem[]
}

const defaultPosts: PostItem[] = [
  { tag: 'Insight', title: 'Market pulse: daily insights', description: 'Live market data at your fingertips, constantly updating and refreshing on a time-lag basis.', image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80' },
  { tag: 'Product', title: 'Tactical trade frameworks', description: 'Learn how to set up trades, structure your thinking, and execute with maximum precision.', image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&q=80' },
]

const postImages: Record<string, string> = {
  'Insight': 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80',
  'Product': 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&q=80',
  'Education': 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80',
}

export default function BlogPreview({ items }: BlogPreviewProps) {
  const posts = items && items.length > 0 ? items.slice(0, 2) : defaultPosts

  return (
    <section id="about" className="py-24 bg-[#0A0C0F]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          {/* Left text */}
          <div className="lg:w-72 flex-shrink-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-snug">
              Trade smarter. Stay ahead.
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              The latest market news, innovations, methodologies, and resources.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold border border-[#2DD4BF]/40 text-[#2DD4BF] hover:bg-[#2DD4BF]/10 px-4 py-2.5 rounded-md transition-all"
            >
              View all posts
            </Link>
          </div>
          {/* Cards */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((p, i) => (
              <Link
                key={p._id || i}
                href={p.slug ? `/blog/${p.slug.current}` : '#'}
                className="group rounded-xl overflow-hidden border border-white/8 bg-[#141720] hover:border-white/20 transition-all cursor-pointer"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={p.image || postImages[p.tag || ''] || 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80'}
                    alt={p.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold text-[#2DD4BF] uppercase tracking-wider mb-2">{p.tag || 'Article'}</p>
                  <h3 className="text-base font-semibold text-white mb-2">{p.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{p.excerpt || p.description || ''}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
