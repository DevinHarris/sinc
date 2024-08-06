import type { CollectionConfig } from 'payload/types'

const Goals: CollectionConfig = {
  slug: 'goal',

  admin: {
    useAsTitle: 'goalName',
  },

  fields: [
    {
      name: 'goalName',
      type: 'text',
    },

    {
      name: 'goalDescription',
      type: 'richText',
    },
  ],
}

export default Goals
