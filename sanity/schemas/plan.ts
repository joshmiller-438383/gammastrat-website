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
      name: 'planId',
      title: 'Plan ID (slug)',
      type: 'string',
      description: 'Used to build the checkout URL. Use: free_trial, basic, or gamma',
    },
    {
      name: 'price',
      title: 'Price (e.g. $84)',
      type: 'string',
    },
    {
      name: 'period',
      title: 'Period (e.g. /mo)',
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
      name: 'badge',
      title: 'Badge Text (e.g. Most Popular)',
      type: 'string',
      description: 'Optional badge shown above the plan card',
    },
    {
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
    },
    {
      name: 'checkoutUrl',
      title: 'Checkout URL Override',
      type: 'url',
      description: 'Optional: override the checkout URL. Leave blank to auto-generate from Plan ID. Auto-generates: https://members.gammastrat.com/checkout?plan=<planId>',
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
