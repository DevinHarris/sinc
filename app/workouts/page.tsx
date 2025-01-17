import Link from "next/link";
import AuthAccess from "@/app/AuthAccess";
import type { Workout } from "@/lib/types";
import styles from './Workouts.module.scss'

export default async function Page() {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/workout`);
    const workouts = await res.json();
    console.log(workouts)

    return (
           <div className={styles.workoutsPageWrapper}>
                <header className={styles.workoutsHeader}>
                    <h1>Workouts by SINC</h1>
                    <p>Tailored routines designed to maximize results and elevate your training. From strength to aesthetics, SINC provides expert-crafted programs for every goal. Stay focused, stay consistent, and stay in SINC.</p>
                </header>
                <main className={styles.mainWorkoutsContent}>
                    <h2>All workouts:</h2>
                    <div className={styles.workoutsGrid}>
                        {
                            workouts?.docs.map((workout: Workout, index: number)=> {
                                return (
                                    <div className={styles.workoutsGridItem} key={index}>
                                        <Link href={`/workouts/${workout.id}`}>
                                            <h2>{workout.workoutName}</h2>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </main>
           </div>
    )
}