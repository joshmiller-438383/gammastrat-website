import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'fa41e7wa',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

export const writeClient = createClient({
  projectId: 'fa41e7wa',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

// GROQ queries
export const queries = {
  plans: `*[_type == "plan"] | order(order asc)`,
  testimonials: `*[_type == "testimonial"] | order(order asc)`,
  faqs: `*[_type == "faq"] | order(order asc)`,
  posts: `*[_type == "post"] | order(publishedAt desc)`,
  siteSettings: `*[_type == "siteSettings"][0]`,
  homepage: `*[_type == "homepage"][0]{
    heroBadge, heroHeadline, heroAccentWords, heroDescription, heroTrustLine,
    heroCtaPrimaryText, heroCtaPrimaryUrl, heroCtaSecondaryText, heroCtaSecondaryUrl,
    heroImage{ asset->{ url }, hotspot, crop },

    problemHeadline, problemAccentWords, problemBody,
    problemPoints[]{ _key, label },
    problemImage{ asset->{ url }, hotspot, crop },

    solutionHeadline, solutionAccentWords, solutionBody,
    solutionImage{ asset->{ url }, hotspot, crop },

    reportsHeadline, reportsSubheadline,
    reportItems[]{ _key, title, description, icon, image{ asset->{ url }, hotspot, crop } },
    reportsImage{ asset->{ url }, hotspot, crop },

    whyHeadline, whyAccentWords, whyDrivers,
    whyImage{ asset->{ url }, hotspot, crop },

    credibilityHeadline, credibilityAccentWords,
    credibilityPillars[]{ _key, icon, title, body },
    credibilityImage{ asset->{ url }, hotspot, crop },

    ctaHeadline, ctaAccentWords, ctaSubheadline, ctaButtonText, ctaButtonUrl,
    ctaImage{ asset->{ url }, hotspot, crop },

    logoStripLabel,
    logoStripItems[]{ _key, name, logo{ asset->{ url } } },

    statsHeadline, statsSubheadline,
    statItems[]{ _key, value, label, sub },

    blogHeadline, blogSubheadline, blogCtaText,

    contactHeadline, contactSubheadline, contactEmail, contactPhone, contactAddress, contactCtaText,

    navLoginText, navLoginUrl, navCtaText, navCtaUrl,
    navLinks[]{ _key, label, href, dropdown[]{ _key, label, href } },

    footerTagline, footerCopyright,
    footerColumns[]{ _key, heading, links[]{ _key, label, href } },

    featuresLabel, featuresHeadline, featuresSubheadline,
    featureItems[]{ _key, tag, title, description, image{ asset->{ url }, hotspot, crop } },
  }`,
}
