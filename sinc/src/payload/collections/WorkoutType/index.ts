import type { CollectionConfig } from 'payload/types'

const WorkoutType: CollectionConfig = {
  slug: 'workoutType',

  fields: [
    {
      name: 'Workout Type Name',
      type: 'text',
    },
  ],
}

export default WorkoutType
