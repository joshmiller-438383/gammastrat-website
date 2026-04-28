export const dynamic = "force-dynamic"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/sections/Hero'
import LogoStrip from '@/components/sections/LogoStrip'
import Features from '@/components/sections/Features'
import Stats from '@/components/sections/Stats'
import Testimonial from '@/components/sections/Testimonial'
import BlogPreview from '@/components/sections/BlogPreview'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'
import { client, queries } from '../../sanity/client'

async function getSanityData() {
  try {
    const [faqs, testimonials, posts] = await Promise.all([
      client.fetch(queries.faqs),
      client.fetch(queries.testimonials),
      client.fetch(queries.posts),
    ])
    return { faqs, testimonials, posts }
  } catch {
    return { faqs: [], testimonials: [], posts: [] }
  }
}

export default async function HomePage() {
  const { faqs, testimonials, posts } = await getSanityData()

  return (
    <main>
      <Navbar />
      <Hero />
      <LogoStrip />
      <Features />
      <Stats />
      <Testimonial items={testimonials} />
      <BlogPreview items={posts} />
      <FAQ items={faqs} />
      <Contact />
      <Footer />
    </main>
  )
}
