import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'fa41e7wa',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  // Prevent Next.js / Vercel edge from caching responses so Sanity edits go live immediately
  fetchOptions: { cache: 'no-store' },
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
  plansPage: `*[_type == "plansPage"][0]{
    heroBadge, heroHeadline, heroAccentWord, heroSubheadline, heroCtaText,
    pricingCards[]{
      planId, name, subtitle, price, period, description, badge, highlight,
      features, ctaText, microCopy, checkoutUrl
    },
    tableHeadline, tableBadge,
    tableRows[]{ _key, feature, freeValue, basicValue, gammaValue },
    positioningBadge, positioningHeadline, positioningHeadline2, positioningBody,
    positioningBullets,
    positioningStats[]{ _key, label, value, sub },
    decisionCard1Badge, decisionCard1Headline, decisionCard1Body,
    decisionCard2Badge, decisionCard2Headline, decisionCard2Body,
    trialBadge, trialHeadline, trialBody, trialCancelText, trialCtaText,
  }`,
  homepage: `*[_type == "homepage"][0]{
    heroBadge, heroHeadline, heroAccentWords, heroDescription, heroTrustLine,
    heroCtaPrimaryText, heroCtaPrimaryUrl, heroCtaSecondaryText, heroCtaSecondaryUrl,
    heroImage{ asset->{ url }, hotspot, crop },

    problemHeadline, problemAccentWords, problemBody,
    problemPoints[]{ _key, label },
    problemImage{ asset->{ url }, hotspot, crop },

    solutionHeadline, solutionAccentWords, solutionBody,

    reportsHeadline, reportsSubheadline,
    reportItems[]{ _key, title, description, icon, image{ asset->{ url }, hotspot, crop } },

    whyHeadline, whyAccentWords, whyDrivers,

    credibilityHeadline, credibilityAccentWords,
    credibilityPillars[]{ _key, icon, title, body },

    ctaHeadline, ctaAccentWords, ctaSubheadline, ctaButtonText, ctaButtonUrl,

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
    disclaimerText, disclaimerVisible,

    faqHeadline, faqSubtitle,
    faqItems[]{ _key, question, answer },
  }`,
}
