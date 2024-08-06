import type { CollectionConfig } from 'payload/types'

const Exercises: CollectionConfig = {
  slug: 'exercise',

  admin: {
    useAsTitle: 'excerciseName',
  },

  upload: {
    filesRequiredOnCreate: false,
    staticDir: '../../../media/',
    staticURL: '/media',
  },

  fields: [
    {
      name: 'exceriseGif',
      type: 'upload',
      relationTo: 'media',
    },

    {
      name: 'excerciseName',
      type: 'text',
    },

    {
      name: 'exerciseInstructions',
      type: 'richText',
    },

    {
      name: 'expertDemonstration',
      type: 'text',
    },

    {
      name: 'targetedMuscle',
      type: 'relationship',
      relationTo: 'muscle',
      hasMany: true,
    },

    {
      name: 'alternateExcerises',
      type: 'relationship',
      relationTo: 'exercise',
      hasMany: true,
    },

    // {
    //     name: 'exerciseTags',
    //     type: 'relationship',
    //     relationTo: 'tags',
    //     hasMany: true

    // }
  ],
}

export default Exercises
