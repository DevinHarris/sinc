import type { CollectionConfig } from 'payload/types'

const Workouts: CollectionConfig = {
  slug: 'workout',

  admin: {
    useAsTitle: 'workoutName',
  },

  fields: [
    {
      name: 'workoutName',
      type: 'text',
    },

    {
      name: 'workoutDescription',
      type: 'richText',
    },

    {
      name: 'exercises',
      type: 'relationship',
      relationTo: 'exercise',
      hasMany: true,
    },

    {
      name: 'goals',
      type: 'text',
    },

    {
      name: 'focusedMuscles',
      type: 'relationship',
      relationTo: 'muscle',
      hasMany: true,
    },

    {
      name: 'programName',
      type: 'relationship',
      relationTo: 'program',
      hasMany: true,
    },
  ],
}

export default Workouts
