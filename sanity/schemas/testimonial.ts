export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'quote',
      title: 'Short Quote',
      type: 'string',
      description: 'The headline quote shown in large text',
    },
    {
      name: 'body',
      title: 'Full Testimonial',
      type: 'text',
      rows: 4,
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title / Role',
      type: 'string',
    },
    {
      name: 'stars',
      title: 'Star Rating',
      type: 'number',
      validation: (Rule: any) => Rule.min(1).max(5),
    },
    {
      name: 'avatar',
      title: 'Avatar Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
}
