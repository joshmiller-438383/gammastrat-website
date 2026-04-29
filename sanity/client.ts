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
    ...,
    heroImage{
      asset->{ url },
      hotspot,
      crop
    },
    logoStripItems[]{
      name,
      logo{
        asset->{ url }
      }
    },
    featureItems[]{
      tag,
      title,
      description,
      image{
        asset->{ url },
        hotspot,
        crop
      }
    }
  }`,
}
