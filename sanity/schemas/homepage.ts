export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  groups: [
    { name: 'hero',        title: '🦸 1. Hero Panel' },
    { name: 'problem',     title: '⚠️ 2. Problem Panel' },
    { name: 'solution',    title: '📊 3. Solution Dashboard Panel' },
    { name: 'reports',     title: '📋 4. Reports Grid' },
    { name: 'whyDiff',     title: '⚡ 5. Why Different Panel' },
    { name: 'credibility', title: '🏛 6. Credibility Panel' },
    { name: 'finalCta',    title: '🎯 7. Final CTA Panel' },
    { name: 'logoStrip',   title: '🏢 Logo Strip' },
    { name: 'stats',       title: '📈 Stats Bar' },
    { name: 'blog',        title: '📰 Blog Section' },
    { name: 'contact',     title: '📬 Contact' },
    { name: 'nav',         title: '🧭 Navbar' },
    { name: 'footer',      title: '🦶 Footer' },
    { name: 'disclaimer',  title: '⚖️ Legal Disclaimer' },
  ],
  fields: [

    // ─── 1. HERO PANEL ──────────────────────────────────────────────────────
    {
      name: 'heroBadge',
      title: 'Hero — Badge Text',
      type: 'string',
      description: 'Small uppercase label above the headline (e.g. "AI-Powered Options Intelligence")',
      group: 'hero',
    },
    {
      name: 'heroHeadline',
      title: 'Hero — Headline',
      type: 'string',
      description: 'Main large headline text',
      group: 'hero',
    },
    {
      name: 'heroAccentWords',
      title: 'Hero — Accent Words (blue/purple gradient)',
      type: 'string',
      description: 'Comma-separated exact words from the headline to highlight in gradient color (e.g. "Options Market")',
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
      description: 'Small italic credibility text below CTAs (e.g. "No credit card required. Cancel anytime.")',
      group: 'hero',
    },
    {
      name: 'heroCtaPrimaryText',
      title: 'Hero — Primary CTA Button Text',
      type: 'string',
      group: 'hero',
    },
    {
      name: 'heroCtaPrimaryUrl',
      title: 'Hero — Primary CTA Button URL',
      type: 'string',
      group: 'hero',
    },
    {
      name: 'heroCtaSecondaryText',
      title: 'Hero — Secondary CTA Button Text',
      type: 'string',
      group: 'hero',
    },
    {
      name: 'heroCtaSecondaryUrl',
      title: 'Hero — Secondary CTA Button URL',
      type: 'string',
      group: 'hero',
    },
    {
      name: 'heroImage',
      title: 'Hero — Visual (GammaStrat-01)',
      type: 'image',
      description: 'Gamma/volatility surface chart visual shown right of headline. Upload GammaStrat-01.png here.',
      options: { hotspot: true },
      group: 'hero',
    },

    // ─── 2. PROBLEM PANEL ───────────────────────────────────────────────────
    {
      name: 'problemHeadline',
      title: 'Problem — Headline',
      type: 'string',
      description: 'e.g. "Trading Blind Is Expensive."',
      group: 'problem',
    },
    {
      name: 'problemAccentWords',
      title: 'Problem — Accent Words (blue/purple gradient)',
      type: 'string',
      description: 'Comma-separated words to highlight (e.g. "Is Expensive")',
      group: 'problem',
    },
    {
      name: 'problemBody',
      title: 'Problem — Body Copy',
      type: 'text',
      rows: 3,
      description: 'Short paragraph explaining the problem traders face',
      group: 'problem',
    },
    {
      name: 'problemPoints',
      title: 'Problem — Risk Labels (shown on visual)',
      type: 'array',
      description: 'Labels overlaid on the visual (e.g. "No Positioning", "Mispriced Volatility", "Unknown Risk")',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label Text', type: 'string' },
          ],
          preview: { select: { title: 'label' } },
        },
      ],
      group: 'problem',
    },
    {
      name: 'problemImage',
      title: 'Problem — Visual (GammaStrat-02)',
      type: 'image',
      description: 'Dark storm/lighthouse risk visual. Upload GammaStrat-02.png here.',
      options: { hotspot: true },
      group: 'problem',
    },

    // ─── 3. SOLUTION DASHBOARD PANEL ────────────────────────────────────────
    {
      name: 'solutionHeadline',
      title: 'Solution — Headline',
      type: 'string',
      description: 'e.g. "See The Market Like Institutions Do."',
      group: 'solution',
    },
    {
      name: 'solutionAccentWords',
      title: 'Solution — Accent Words (blue/purple gradient)',
      type: 'string',
      description: 'Comma-separated words to highlight (e.g. "Like Institutions Do")',
      group: 'solution',
    },
    {
      name: 'solutionBody',
      title: 'Solution — Body Copy',
      type: 'text',
      rows: 3,
      description: 'Short paragraph explaining the solution',
      group: 'solution',
    },
    {
      name: 'solutionImage',
      title: 'Solution — Dashboard Visual (GammaStrat-03)',
      type: 'image',
      description: 'Institutional analytics dashboard screenshot. Upload GammaStrat-03.png here.',
      options: { hotspot: true },
      group: 'solution',
    },

    // ─── 4. REPORTS GRID ────────────────────────────────────────────────────
    {
      name: 'reportsHeadline',
      title: 'Reports — Section Headline',
      type: 'string',
      description: 'e.g. "Daily Intelligence. Every Market Day."',
      group: 'reports',
    },
    {
      name: 'reportsSubheadline',
      title: 'Reports — Section Subheadline',
      type: 'string',
      description: 'e.g. "9 institutional-grade reports delivered to your inbox before market open."',
      group: 'reports',
    },
    {
      name: 'reportItems',
      title: 'Reports — Report Cards (4-column grid)',
      type: 'array',
      description: 'Each card appears in the reports grid. Recommended: 8–9 cards.',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title',       title: 'Report Title',       type: 'string' },
            { name: 'description', title: 'Short Description',  type: 'text', rows: 2 },
            { name: 'icon',        title: 'Icon Emoji',         type: 'string', description: 'Optional emoji (e.g. "📊")' },
            { name: 'image',       title: 'Card Visual',        type: 'image', options: { hotspot: true } },
          ],
          preview: {
            select: { title: 'title', subtitle: 'description' },
          },
        },
      ],
      group: 'reports',
    },
    {
      name: 'reportsImage',
      title: 'Reports — Section Visual (GammaStrat-04)',
      type: 'image',
      description: 'Reports grid/dashboard visual. Upload GammaStrat-04.png here.',
      options: { hotspot: true },
      group: 'reports',
    },

    // ─── 5. WHY DIFFERENT PANEL ─────────────────────────────────────────────
    {
      name: 'whyHeadline',
      title: 'Why Different — Headline',
      type: 'string',
      description: 'e.g. "We Focus On What Moves Markets."',
      group: 'whyDiff',
    },
    {
      name: 'whyAccentWords',
      title: 'Why Different — Accent Words (blue/purple gradient)',
      type: 'string',
      description: 'Comma-separated words to highlight (e.g. "Moves Markets")',
      group: 'whyDiff',
    },
    {
      name: 'whyDrivers',
      title: 'Why Different — Data Drivers (left list)',
      type: 'array',
      description: 'List of data inputs shown on the left (e.g. "Options Pricing", "Dealer Positioning")',
      of: [{ type: 'string' }],
      group: 'whyDiff',
    },
    {
      name: 'whyImage',
      title: 'Why Different — Flow Visual (GammaStrat-05)',
      type: 'image',
      description: 'Data flows converging into edge visual. Upload GammaStrat-05.png here.',
      options: { hotspot: true },
      group: 'whyDiff',
    },

    // ─── 6. CREDIBILITY PANEL ───────────────────────────────────────────────
    {
      name: 'credibilityHeadline',
      title: 'Credibility — Headline',
      type: 'string',
      description: 'e.g. "Built On Expert Foundations."',
      group: 'credibility',
    },
    {
      name: 'credibilityAccentWords',
      title: 'Credibility — Accent Words (blue/purple gradient)',
      type: 'string',
      description: 'Comma-separated words to highlight (e.g. "Expert Foundations")',
      group: 'credibility',
    },
    {
      name: 'credibilityPillars',
      title: 'Credibility — Three Pillars',
      type: 'array',
      description: 'Three credibility cards shown below the headline',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'icon',  title: 'Icon (emoji)',   type: 'string', description: 'e.g. "🏛" or "🎓"' },
            { name: 'title', title: 'Pillar Title',   type: 'string' },
            { name: 'body',  title: 'Pillar Body',    type: 'text', rows: 2 },
          ],
          preview: { select: { title: 'title' } },
        },
      ],
      group: 'credibility',
    },
    {
      name: 'credibilityImage',
      title: 'Credibility — Visual (GammaStrat-06)',
      type: 'image',
      description: 'Credibility/foundation visual. Upload GammaStrat-06.png here.',
      options: { hotspot: true },
      group: 'credibility',
    },

    // ─── 7. FINAL CTA PANEL ─────────────────────────────────────────────────
    {
      name: 'ctaHeadline',
      title: 'Final CTA — Headline',
      type: 'string',
      description: 'e.g. "Gain The Edge. Stay Ahead."',
      group: 'finalCta',
    },
    {
      name: 'ctaAccentWords',
      title: 'Final CTA — Accent Words (blue/purple gradient)',
      type: 'string',
      description: 'Comma-separated words to highlight (e.g. "The Edge")',
      group: 'finalCta',
    },
    {
      name: 'ctaSubheadline',
      title: 'Final CTA — Subheadline',
      type: 'string',
      description: 'e.g. "Institutional intelligence. Delivered daily."',
      group: 'finalCta',
    },
    {
      name: 'ctaButtonText',
      title: 'Final CTA — Button Text',
      type: 'string',
      group: 'finalCta',
    },
    {
      name: 'ctaButtonUrl',
      title: 'Final CTA — Button URL',
      type: 'string',
      group: 'finalCta',
    },
    {
      name: 'ctaImage',
      title: 'Final CTA — Circular Visual (GammaStrat-07)',
      type: 'image',
      description: 'Circular glow/target with GS mark. Upload GammaStrat-07.png here.',
      options: { hotspot: true },
      group: 'finalCta',
    },

    // ─── LOGO STRIP ─────────────────────────────────────────────────────────
    {
      name: 'logoStripLabel',
      title: 'Logo Strip — Label Text',
      type: 'string',
      description: 'e.g. "Trusted by traders at"',
      group: 'logoStrip',
    },
    {
      name: 'logoStripItems',
      title: 'Logo Strip — Companies',
      type: 'array',
      description: 'Upload a logo for each company. If no image is uploaded, the company name shows as text.',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Company Name', type: 'string' },
            { name: 'logo', title: 'Logo Image',   type: 'image', options: { hotspot: false } },
          ],
          preview: { select: { title: 'name', media: 'logo' } },
        },
      ],
      group: 'logoStrip',
    },

    // ─── STATS BAR ──────────────────────────────────────────────────────────
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
      title: 'Stats — Stat Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Value (e.g. "99.99%")', type: 'string' },
            { name: 'label', title: 'Label (e.g. "Uptime")', type: 'string' },
            { name: 'sub',   title: 'Sub-text',              type: 'string' },
          ],
          preview: { select: { title: 'value', subtitle: 'label' } },
        },
      ],
      group: 'stats',
    },

    // ─── BLOG SECTION ───────────────────────────────────────────────────────
    {
      name: 'blogHeadline',
      title: 'Blog — Section Headline',
      type: 'string',
      group: 'blog',
    },
    {
      name: 'blogSubheadline',
      title: 'Blog — Section Subheadline',
      type: 'string',
      group: 'blog',
    },
    {
      name: 'blogCtaText',
      title: 'Blog — CTA Button Text',
      type: 'string',
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
      title: 'Contact — Phone Number',
      type: 'string',
      group: 'contact',
    },
    {
      name: 'contactAddress',
      title: 'Contact — Address',
      type: 'text',
      rows: 2,
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
      description: 'Use {year} as placeholder for current year',
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
    // ─── DISCLAIMER ─────────────────────────────────────────────────────────
    {
      name: 'disclaimerText',
      title: 'Legal Disclaimer Text',
      type: 'text',
      rows: 20,
      description: 'Full legal disclaimer shown at the bottom of the homepage and pricing page.',
      group: 'disclaimer',
    },
    {
      name: 'disclaimerVisible',
      title: 'Show Disclaimer',
      type: 'boolean',
      description: 'Toggle to show/hide the disclaimer section.',
      initialValue: true,
      group: 'disclaimer',
    },
  ],
}