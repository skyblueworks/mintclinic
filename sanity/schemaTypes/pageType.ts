import {DocumentIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const pageType = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'object',
      fields: [
        {name: 'bg', type: 'string', title: 'Bulgarian'},
        {name: 'en', type: 'string', title: 'English'},
      ],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'object',
      fields: [
        {name: 'bg', type: 'slug', title: 'Bulgarian', options: {source: 'title.bg'}},
        {name: 'en', type: 'slug', title: 'English', options: {source: 'title.en'}},
      ],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'content',
      type: 'object',
      fields: [
        {name: 'bg', type: 'mdx', title: 'Bulgarian'},
        {name: 'en', type: 'mdx', title: 'English'},
      ],
    }),
    defineField({
      name: 'metaDescription',
      type: 'object',
      fields: [
        {name: 'bg', type: 'text', title: 'Bulgarian', rows: 2},
        {name: 'en', type: 'text', title: 'English', rows: 2},
      ],
    }),
  ],
  preview: {
    select: {
      titleBg: 'title.bg',
      titleEn: 'title.en',
    },
    prepare({titleBg, titleEn}) {
      return {
        title: titleBg || titleEn || 'Untitled Page',
      }
    },
  },
})