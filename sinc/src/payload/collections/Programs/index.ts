import type { CollectionConfig } from 'payload/types'

import { checkUserPurchases } from './access/checkUserPurchases'

const Programs: CollectionConfig = {
  slug: 'program',

  admin: {
    useAsTitle: 'programName',
  },

  fields: [
    {
      name: 'programName',
      type: 'text',
    },

    {
      name: 'programDescription',
      type: 'richText',
    },

    {
      name: 'workouts',
      type: 'relationship',
      relationTo: 'workout',
      hasMany: true,
    },

    {
      name: 'goals',
      type: 'relationship',
      relationTo: 'goal',
      hasMany: true,
    },

    {
      name: 'startDate',
      type: 'date',
    },

    {
      name: 'endDate',
      type: 'date',
    },

    {
      name: 'enablePaywall',
      label: 'Enable Paywall',
      type: 'checkbox',
    },
  ],

  access: {
    read: checkUserPurchases,
  },
}

export default Programs
