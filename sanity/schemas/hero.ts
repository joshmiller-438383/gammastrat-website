export default {
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'badge',
      title: 'Badge Text',
      type: 'string',
      description: 'Small text above the headline (e.g. "Trusted by 2.5M+ traders")',
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
      description: 'Main hero headline',
    },
    {
      name: 'subheadline',
      title: 'Subheadline',
      type: 'string',
      description: 'Secondary line in the headline',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'ctaPrimary',
      title: 'Primary CTA Text',
      type: 'string',
    },
    {
      name: 'ctaSecondary',
      title: 'Secondary CTA Text',
      type: 'string',
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    },
  ],
}
