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
    const [faqs, testimonials, posts, homepage] = await Promise.all([
      client.fetch(queries.faqs),
      client.fetch(queries.testimonials),
      client.fetch(queries.posts),
      client.fetch(queries.homepage),
    ])
    return { faqs, testimonials, posts, homepage }
  } catch {
    return { faqs: [], testimonials: [], posts: [], homepage: null }
  }
}

export default async function HomePage() {
  const { faqs, testimonials, posts, homepage: hp } = await getSanityData()

  return (
    <main>
      <Navbar
        loginText={hp?.navLoginText}
        loginUrl={hp?.navLoginUrl}
        ctaText={hp?.navCtaText}
        ctaUrl={hp?.navCtaUrl}
        navLinks={hp?.navLinks}
      />
      <Hero
        badge={hp?.heroBadge}
        headline={hp?.heroHeadline}
        description={hp?.heroDescription}
        trustLine={hp?.heroTrustLine}
        ctaPrimaryText={hp?.heroCtaPrimaryText}
        ctaPrimaryUrl={hp?.heroCtaPrimaryUrl}
        ctaSecondaryText={hp?.heroCtaSecondaryText}
        ctaSecondaryUrl={hp?.heroCtaSecondaryUrl}
        heroImage={hp?.heroImage}
      />
      <LogoStrip
        label={hp?.logoStripLabel}
        items={hp?.logoStripItems}
      />
      <Features
        label={hp?.featuresLabel}
        headline={hp?.featuresHeadline}
        subheadline={hp?.featuresSubheadline}
        items={hp?.featureItems}
      />
      <Stats
        headline={hp?.statsHeadline}
        subheadline={hp?.statsSubheadline}
        items={hp?.statItems}
      />
      <Testimonial items={testimonials} />
      <BlogPreview
        items={posts}
        headline={hp?.blogHeadline}
        subheadline={hp?.blogSubheadline}
        ctaText={hp?.blogCtaText}
      />
      <FAQ items={faqs} />
      <Contact
        headline={hp?.contactHeadline}
        subheadline={hp?.contactSubheadline}
        email={hp?.contactEmail}
        phone={hp?.contactPhone}
        address={hp?.contactAddress}
        ctaText={hp?.contactCtaText}
      />
      <Footer
        tagline={hp?.footerTagline}
        copyright={hp?.footerCopyright}
        columns={hp?.footerColumns}
      />
    </main>
  )
}
