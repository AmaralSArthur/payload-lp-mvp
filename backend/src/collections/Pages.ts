import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Page Title',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      label: 'Slug',
      required: true,
      unique: true,
      admin: {
        description: 'URL-friendly path (e.g., "home", "about")',
      },
    },
    {
      name: 'metaDescription',
      type: 'textarea',
      label: 'Meta Description',
    },
    {
      name: 'sections',
      type: 'blocks',
      label: 'Page Sections',
      blocks: [
        {
          slug: 'hero',
          labels: {
            singular: 'Hero Section',
            plural: 'Hero Sections',
          },
          fields: [
            {
              name: 'headline',
              type: 'text',
              label: 'Headline',
              required: true,
            },
            {
              name: 'subheadline',
              type: 'textarea',
              label: 'Subheadline',
            },
            {
              name: 'ctaText',
              type: 'text',
              label: 'CTA Button Text',
            },
            {
              name: 'ctaLink',
              type: 'text',
              label: 'CTA Button Link',
            },
            {
              name: 'backgroundImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Background Image',
            },
          ],
        },
        {
          slug: 'features',
          labels: {
            singular: 'Features Section',
            plural: 'Features Sections',
          },
          fields: [
            {
              name: 'sectionTitle',
              type: 'text',
              label: 'Section Title',
              required: true,
            },
            {
              name: 'sectionSubtitle',
              type: 'textarea',
              label: 'Section Subtitle',
            },
            {
              name: 'features',
              type: 'array',
              label: 'Features',
              minRows: 1,
              maxRows: 6,
              fields: [
                {
                  name: 'icon',
                  type: 'text',
                  label: 'Icon (emoji or icon name)',
                  required: true,
                },
                {
                  name: 'title',
                  type: 'text',
                  label: 'Feature Title',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'textarea',
                  label: 'Feature Description',
                  required: true,
                },
              ],
            },
          ],
        },
        {
          slug: 'cta',
          labels: {
            singular: 'CTA Section',
            plural: 'CTA Sections',
          },
          fields: [
            {
              name: 'headline',
              type: 'text',
              label: 'Headline',
              required: true,
            },
            {
              name: 'subheadline',
              type: 'textarea',
              label: 'Subheadline',
            },
            {
              name: 'buttonText',
              type: 'text',
              label: 'Button Text',
              required: true,
            },
            {
              name: 'buttonLink',
              type: 'text',
              label: 'Button Link',
            },
            {
              name: 'backgroundColor',
              type: 'select',
              label: 'Background Color',
              options: [
                { label: 'Primary', value: 'primary' },
                { label: 'Dark', value: 'dark' },
                { label: 'Light', value: 'light' },
                { label: 'White', value: 'white' },
              ],
              defaultValue: 'primary',
            },
          ],
        },
        {
          slug: 'registrationForm',
          labels: {
            singular: 'Registration Form',
            plural: 'Registration Forms',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Section Title',
              required: true,
              defaultValue: 'Get Started',
            },
            {
              name: 'subtitle',
              type: 'textarea',
              label: 'Section Subtitle',
            },
            {
              name: 'submitButtonText',
              type: 'text',
              label: 'Submit Button Text',
              required: true,
              defaultValue: 'Submit',
            },
            {
              name: 'successMessage',
              type: 'text',
              label: 'Success Message',
              required: true,
              defaultValue: 'Thanks! We will be in touch shortly.',
            },
          ],
        },
        {
          slug: 'richText',
          labels: {
            singular: 'Rich Text Section',
            plural: 'Rich Text Sections',
          },
          fields: [
            {
              name: 'content',
              type: 'richText',
              label: 'Content',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'status',
      type: 'select',
      label: 'Status',
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
