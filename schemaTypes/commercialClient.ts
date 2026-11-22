import {defineArrayMember, defineField, defineType} from 'sanity'

export const commercialClient = defineType({
  name: 'commercialClient',
  title: 'Commercial Client',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Order on page',
      type: 'number',
      description: 'Lower numbers show first (1, 2, 3...)',
      validation: (rule) => rule.required().integer().min(1),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Photos',
      type: 'array',
      description: 'Leave empty to show "Photos coming soon". Drag to reorder.',
      of: [
        defineArrayMember({
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
  ],
  orderings: [
    {
      title: 'Page order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
  preview: {
    select: {title: 'name', media: 'logo'},
  },
})
