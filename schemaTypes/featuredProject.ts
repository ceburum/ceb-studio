import {defineArrayMember, defineField, defineType} from 'sanity'

export const featuredProject = defineType({
  name: 'featuredProject',
  title: 'Featured Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short description',
      type: 'string',
      description: 'One line shown under the title on the home page.',
    }),
    defineField({
      name: 'cover',
      title: 'Cover photo',
      type: 'image',
      description: 'The photo shown on the home page.',
      options: {hotspot: true},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Album',
      type: 'array',
      description:
        'Photos that open when someone taps this project. Drag to reorder.',
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
    defineField({
      name: 'link',
      title: 'Facebook or YouTube link (optional)',
      type: 'url',
      description:
        'Paste the link to the post or video. A button shows under the project. The post must be set to Public.',
      validation: (rule) => rule.uri({scheme: ['http', 'https']}),
    }),
    defineField({
      name: 'order',
      title: 'Order on page',
      type: 'number',
      description: 'Lower numbers show first (1, 2, 3...)',
      validation: (rule) => rule.required().integer().min(1),
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
    select: {title: 'title', subtitle: 'description', media: 'cover'},
  },
})
