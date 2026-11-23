import {defineField, defineType} from 'sanity'

export const partner = defineType({
  name: 'partner',
  title: 'Thank You Partner',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Business name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'Website link',
      type: 'url',
      description: 'Starts with https://',
      validation: (rule) =>
        rule.required().uri({scheme: ['http', 'https']}),
    }),
    defineField({
      name: 'order',
      title: 'Order on page',
      type: 'number',
      description: 'Optional. Leave blank to put it at the end.',
      validation: (rule) => rule.integer().min(1),
    }),
  ],
  preview: {
    select: {title: 'name', subtitle: 'url', media: 'logo'},
  },
})
