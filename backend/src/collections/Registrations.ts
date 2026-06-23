import type { CollectionConfig } from 'payload'

export const Registrations: CollectionConfig = {
  slug: 'registrations',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['name', 'email', 'company', 'status', 'createdAt'],
  },
  access: {
    create: () => true,
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Full Name',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email',
      required: true,
    },
    {
      name: 'company',
      type: 'text',
      label: 'Company',
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Phone',
    },
    {
      name: 'message',
      type: 'textarea',
      label: 'Message',
    },
    {
      name: 'pageSlug',
      type: 'text',
      label: 'Page Slug',
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    },
    {
      name: 'status',
      type: 'select',
      label: 'Status',
      defaultValue: 'new',
      options: [
        { label: 'New', value: 'new' },
        { label: 'Contacted', value: 'contacted' },
        { label: 'Qualified', value: 'qualified' },
        { label: 'Archived', value: 'archived' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
  ],
  timestamps: true,
}
