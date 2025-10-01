import {defineField, defineType} from 'sanity'
import {CodeIcon} from '@sanity/icons'

export const mdxType = defineType({
  name: 'mdx',
  title: 'MDX Content',
  type: 'object',
  icon: CodeIcon,
  fields: [
    defineField({
      name: 'code',
      type: 'code',
      title: 'MDX Code',
      options: {
        language: 'markdown',
        languageAlternatives: [
          {title: 'MDX', value: 'mdx'},
          {title: 'Markdown', value: 'markdown'},
        ],
        withFilename: false,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'preview',
      type: 'text',
      title: 'Preview Text',
      description: 'Auto-generated preview of the content',
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      code: 'code.code',
    },
    prepare({code}) {
      // Extract first heading or first line for preview
      const firstLine = code?.split('\n')[0] || 'MDX Content'
      const title = firstLine.replace(/^#+\s*/, '') || 'MDX Content'
      
      return {
        title: title.substring(0, 50) + (title.length > 50 ? '...' : ''),
        subtitle: 'MDX Content',
        media: CodeIcon,
      }
    },
  },
})