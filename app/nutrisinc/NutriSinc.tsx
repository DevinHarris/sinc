import Link from "next/link";
import type { Workout } from "@/lib/types";
import styles from './nutrisincPage.module.scss'

export default async function NutriSincPage() {

    // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/workout`);
    // const workouts = await res.json();
    // console.log(workouts)

    return (
           <div className={styles.workoutsPageWrapper}>
                <header className={styles.workoutsHeader}>
                    <h1> NurtiSINC</h1>
                    <p>Fuel your fitness journey with science-backed nutrition. NutriSINC is your go-to hub for meal plans, recipes, and nutritional advice tailored to your goals—whether you're cutting, bulking, or maintaining. Simplify your diet with tools designed to optimize performance, recovery, and overall health.</p>
                </header>
                <main className={styles.mainWorkoutsContent}>
                    <h2>Your Meal Plan:</h2>
                    <div className={styles.workoutsGrid}>
                        <p><strong>Coming soon.</strong></p>
                    </div>
                </main>
           </div>
    )
}