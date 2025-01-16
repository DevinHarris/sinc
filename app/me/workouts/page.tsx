import Link from 'next/link'
import { auth } from '@/auth'
import { db } from '@/server'
import { users, userWorkout } from '@/server/schema'
import styles from './UserWorkouts.module.scss'
import { eq } from 'drizzle-orm'

export default async function Page() {

    const session = await auth();

    // const res = await db.query.userWorkout.findMany({
    //     where: eq(userWorkout.userId, session?.user?.id!)
    // })

    const findUserId = await db.query.users.findFirst({
        where: eq(users.email, session?.user?.email!)
    })

    const id = findUserId?.id;
    const userWorkoutData = await db.query.userWorkout.findMany({
        where: eq(userWorkout.userId, id!)
    })

    console.log('workout data', userWorkoutData);

    return (
        <div className={styles.workoutsPageWrapper}>
        <header className={styles.workoutsHeader}>
            <h1>This is your Workout Space.</h1>
            <p>Your ultimate training companion. Workout Space provides expertly curated programs, in-depth exercise guides, and progress tracking to elevate your fitness game. Whether you're chasing strength, aesthetics, or endurance, this is where results take shape.</p>
        </header>
        <main className={styles.mainWorkoutsContent}>
            <h2>Your Workout Space:</h2>
           {
            userWorkoutData.length ? (
                <div>
                    <ul>
                    {
                        userWorkoutData.map((workout, index) => {
                            return (
                                <li key={index + 1}><Link href={`/workouts/${workout.workoutId}`}>{index + 1}: <strong>{workout.workoutName}</strong></Link></li>
                            )
                        })
                    }
                    </ul>
                </div>
            ) : (
                <div>
                    <p>You have currently have no workouts.</p>
                    <p>Add workouts to your space <Link href="/workouts"><strong>here</strong>.</Link></p>
                </div>
            )
           }
        </main>
   </div>
    )
}