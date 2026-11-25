import {defineField, defineType} from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Price List Item',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description:
        'Use the exact name from the price list to change that item. A new name adds a new item at the end of its section.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Section',
      type: 'string',
      options: {
        list: ['Handyman', 'Plumbing', 'Electrical', 'Painting', 'Flooring', 'Other'],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'Type it as you want it shown, like $150, $85/hr, or $3.75 per sq ft.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'hide',
      title: 'Hide this item',
      type: 'boolean',
      description: 'Turn on to remove this item from the price list.',
      initialValue: false,
    }),
  ],
  preview: {
    select: {title: 'name', subtitle: 'price'},
  },
})
