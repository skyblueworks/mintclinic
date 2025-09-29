import {HeartIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const serviceType = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  icon: HeartIcon,
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
      name: 'category',
      type: 'string',
      options: {
        list: [
          {title: 'Aesthetics / Estetika', value: 'aesthetics'},
          {title: 'Surgery / Hirurgiya', value: 'surgery'},
          {title: 'Prosthetics / Protetika', value: 'prosthetics'},
          {title: 'Conservative / Konservativna', value: 'conservative'},
        ],
      },
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'gallery',
      type: 'array',
      of: [defineArrayMember({type: 'image', options: {hotspot: true}})],
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
      subtitle: 'category',
      media: 'mainImage',
    },
    prepare({titleBg, titleEn, subtitle, media}) {
      return {
        title: titleBg || titleEn || 'Untitled',
        subtitle,
        media,
      }
    },
  },
})