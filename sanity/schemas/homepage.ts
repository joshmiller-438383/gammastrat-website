export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  groups: [
    { name: 'hero',        title: '🦸 Hero' },
    { name: 'logoStrip',   title: '🏢 Logo Strip' },
    { name: 'features',    title: '⚡ Features / Solutions' },
    { name: 'stats',       title: '📊 Stats' },
    { name: 'blog',        title: '📰 Blog Section' },
    { name: 'contact',     title: '📬 Contact' },
    { name: 'nav',         title: '🧭 Navbar' },
    { name: 'footer',      title: '🦶 Footer' },
  ],
  fields: [

    // ─── HERO ───────────────────────────────────────────────────────────────
    {
      name: 'heroBadge',
      title: 'Hero — Badge Text',
      type: 'string',
      description: 'Small uppercase text above the headline',
      group: 'hero',
    },
    {
      name: 'heroHeadline',
      title: 'Hero — Headline',
      type: 'string',
      description: 'Main large headline',
      group: 'hero',
    },
    {
      name: 'heroDescription',
      title: 'Hero — Description',
      type: 'text',
      rows: 3,
      description: 'Paragraph below the headline',
      group: 'hero',
    },
    {
      name: 'heroTrustLine',
      title: 'Hero — Trust Line',
      type: 'string',
      description: 'Small credibility text below the CTAs',
      group: 'hero',
    },
    {
      name: 'heroCtaPrimaryText',
      title: 'Hero — Primary CTA Text',
      type: 'string',
      group: 'hero',
    },
    {
      name: 'heroCtaPrimaryUrl',
      title: 'Hero — Primary CTA URL',
      type: 'string',
      group: 'hero',
    },
    {
      name: 'heroCtaSecondaryText',
      title: 'Hero — Secondary CTA Text',
      type: 'string',
      group: 'hero',
    },
    {
      name: 'heroCtaSecondaryUrl',
      title: 'Hero — Secondary CTA URL',
      type: 'string',
      group: 'hero',
    },
    {
      name: 'heroImage',
      title: 'Hero — Media Image',
      type: 'image',
      description: 'Image shown in the hero section (right side / background). Upload to replace the default video thumbnail.',
      options: { hotspot: true },
      group: 'hero',
    },

    // ─── LOGO STRIP ─────────────────────────────────────────────────────────
    {
      name: 'logoStripLabel',
      title: 'Logo Strip — Label',
      type: 'string',
      description: 'e.g. "Trusted by 4,000+ companies"',
      group: 'logoStrip',
    },
    {
      name: 'logoStripItems',
      title: 'Logo Strip — Logos',
      type: 'array',
      description: 'Upload a logo image for each company. If no image is uploaded, the company name will be shown as text.',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Company Name', type: 'string' },
            {
              name: 'logo',
              title: 'Logo Image',
              type: 'image',
              description: 'Upload the company logo (SVG or PNG with transparent background works best)',
              options: { hotspot: false },
            },
          ],
          preview: { select: { title: 'name', media: 'logo' } },
        },
      ],
      group: 'logoStrip',
    },

    // ─── FEATURES / SOLUTIONS ───────────────────────────────────────────────
    {
      name: 'featuresLabel',
      title: 'Features — Section Label',
      type: 'string',
      description: 'Small uppercase label (e.g. "Solutions")',
      group: 'features',
    },
    {
      name: 'featuresHeadline',
      title: 'Features — Headline',
      type: 'string',
      group: 'features',
    },
    {
      name: 'featuresSubheadline',
      title: 'Features — Subheadline',
      type: 'string',
      group: 'features',
    },
    {
      name: 'featureItems',
      title: 'Features — Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'tag',         title: 'Tag (small label)',  type: 'string' },
            { name: 'title',       title: 'Card Title',         type: 'string' },
            { name: 'description', title: 'Card Description',   type: 'text', rows: 3 },
            {
              name: 'image',
              title: 'Card Image',
              type: 'image',
              description: 'Upload an image for this feature card',
              options: { hotspot: true },
            },
          ],
          preview: { select: { title: 'title', subtitle: 'tag', media: 'image' } },
        },
      ],
      group: 'features',
    },

    // ─── STATS ──────────────────────────────────────────────────────────────
    {
      name: 'statsHeadline',
      title: 'Stats — Headline',
      type: 'string',
      group: 'stats',
    },
    {
      name: 'statsSubheadline',
      title: 'Stats — Subheadline',
      type: 'string',
      group: 'stats',
    },
    {
      name: 'statItems',
      title: 'Stats — Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Value',     type: 'string', description: 'e.g. "99.99%"' },
            { name: 'label', title: 'Label',     type: 'string', description: 'e.g. "Uptime"' },
            { name: 'sub',   title: 'Sub-label', type: 'string', description: 'e.g. "Continuous platform reliability"' },
          ],
          preview: { select: { title: 'value', subtitle: 'label' } },
        },
      ],
      group: 'stats',
    },

    // ─── BLOG SECTION ───────────────────────────────────────────────────────
    {
      name: 'blogHeadline',
      title: 'Blog Section — Headline',
      type: 'string',
      description: 'e.g. "Trade smarter. Stay ahead."',
      group: 'blog',
    },
    {
      name: 'blogSubheadline',
      title: 'Blog Section — Subheadline',
      type: 'string',
      description: 'e.g. "The latest market news, innovations, methodologies, and resources."',
      group: 'blog',
    },
    {
      name: 'blogCtaText',
      title: 'Blog Section — CTA Link Text',
      type: 'string',
      description: 'e.g. "View all posts"',
      group: 'blog',
    },

    // ─── CONTACT ────────────────────────────────────────────────────────────
    {
      name: 'contactHeadline',
      title: 'Contact — Headline',
      type: 'string',
      group: 'contact',
    },
    {
      name: 'contactSubheadline',
      title: 'Contact — Subheadline',
      type: 'string',
      group: 'contact',
    },
    {
      name: 'contactEmail',
      title: 'Contact — Email Address',
      type: 'string',
      group: 'contact',
    },
    {
      name: 'contactPhone',
      title: 'Contact — Phone',
      type: 'string',
      group: 'contact',
    },
    {
      name: 'contactAddress',
      title: 'Contact — Address',
      type: 'text',
      rows: 3,
      group: 'contact',
    },
    {
      name: 'contactCtaText',
      title: 'Contact — Submit Button Text',
      type: 'string',
      group: 'contact',
    },

    // ─── NAVBAR ─────────────────────────────────────────────────────────────
    {
      name: 'navLoginText',
      title: 'Navbar — Login Link Text',
      type: 'string',
      group: 'nav',
    },
    {
      name: 'navLoginUrl',
      title: 'Navbar — Login Link URL',
      type: 'string',
      group: 'nav',
    },
    {
      name: 'navCtaText',
      title: 'Navbar — CTA Button Text',
      type: 'string',
      group: 'nav',
    },
    {
      name: 'navCtaUrl',
      title: 'Navbar — CTA Button URL',
      type: 'string',
      group: 'nav',
    },
    {
      name: 'navLinks',
      title: 'Navbar — Navigation Links',
      type: 'array',
      description: 'Top-level nav items. Add dropdown items for dropdowns.',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'href',  title: 'URL',   type: 'string' },
            {
              name: 'dropdown',
              title: 'Dropdown Items (optional)',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'label', title: 'Label', type: 'string' },
                    { name: 'href',  title: 'URL',   type: 'string' },
                  ],
                  preview: { select: { title: 'label' } },
                },
              ],
            },
          ],
          preview: { select: { title: 'label' } },
        },
      ],
      group: 'nav',
    },

    // ─── FOOTER ─────────────────────────────────────────────────────────────
    {
      name: 'footerTagline',
      title: 'Footer — Tagline',
      type: 'string',
      group: 'footer',
    },
    {
      name: 'footerCopyright',
      title: 'Footer — Copyright Text',
      type: 'string',
      description: 'Use {year} as a placeholder for the current year. e.g. "© {year} GammaStrat. All rights reserved."',
      group: 'footer',
    },
    {
      name: 'footerColumns',
      title: 'Footer — Link Columns',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'heading', title: 'Column Heading', type: 'string' },
            {
              name: 'links',
              title: 'Links',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'label', title: 'Label', type: 'string' },
                    { name: 'href',  title: 'URL',   type: 'string' },
                  ],
                  preview: { select: { title: 'label' } },
                },
              ],
            },
          ],
          preview: { select: { title: 'heading' } },
        },
      ],
      group: 'footer',
    },
  ],
}
