import type { CollectionConfig } from 'payload/types'

const Muscles: CollectionConfig = {
  slug: 'muscle',

  admin: {
    useAsTitle: 'muscleName',
  },

  fields: [
    {
      name: 'muscleName',
      type: 'text',
    },

    {
      name: 'muscleDescription',
      type: 'richText',
    },
  ],
}

export default Muscles
