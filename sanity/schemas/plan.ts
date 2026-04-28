export default {
  name: 'plan',
  title: 'Pricing Plan',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Plan Name',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price (e.g. $10)',
      type: 'string',
    },
    {
      name: 'period',
      title: 'Period (e.g. /mth)',
      type: 'string',
    },
    {
      name: 'billing',
      title: 'Billing Note (e.g. Billed annually.)',
      type: 'string',
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'highlight',
      title: 'Highlighted Plan',
      type: 'boolean',
      description: 'Set to true for the featured/recommended plan',
    },
    {
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
    },
    {
      name: 'shopifyVariantId',
      title: 'Shopify Variant ID',
      type: 'string',
      description: 'Shopify product variant ID for checkout integration',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
}
