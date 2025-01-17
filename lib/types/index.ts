export type CoverProps = {
    children: React.ReactNode,
    height?: string,
    displayType?: 'flex' | 'grid',
    backgroundColor?: string,
    backgroundVideo?: string,
    backgroundImage?: string,
    textColor?: string,
    borderBottom?: string
}

export type HightlightLinkProps = {
    linkTo: string,
    linkText: string
}

export type ExerciseData = {
    id: string,
    exerciseName: string,
    expertDemonstration: string,
    exerciseDescription: string,
    exerciseInstructions: [{
        children: [
            {
                text: string
            }
        ]
    }],
    targetedMuscle: {}
}

export type Workout = {
    id: string,
    workoutName: string,
    workoutDisplayMedia: string,
    workoutPreviewTextPrimary: string,
    workoutPreviewTextSecondary: string,
    workoutGoals: string,
    workoutDescription: [{
        children: [
            {
                text: string
            }
        ]
    }],
    exercises: [{
        id: string,
        exerciseName: string
    }],
    programName: [],
    
}
