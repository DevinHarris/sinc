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
                    <h2 style={{ fontWeight: '500' }}>Your Meal Plan: <span style={{ fontWeight: '700' }}>The Precision Shred Plan</span></h2>
                    <p>This meal plan isn’t just a guide—it’s your blueprint for cutting down to a shredded, lean 195 lbs while holding onto every ounce of hard-earned muscle. Packed with 150–200 grams of protein daily, this plan is designed to support your recovery, fuel intense workouts, and sculpt an aesthetic physique. With 60 grams of healthy fats for hormonal balance and 2,500 calories strategically portioned to keep you energized, you’ll be hitting your goals with precision and confidence.</p>
                   
                   <h2>Why It Works:</h2>
                   <p>Every meal is a calculated step forward. From post-workout protein-packed breakfasts to nutrient-dense dinners, each bite is an investment in your progress. By focusing on lean proteins, complex carbs, and healthy fats, you’re giving your body the tools to repair, recover, and grow stronger. The balance ensures you maintain fullness and muscle definition as you cut down.</p>

                   <h2>What Makes It Different:</h2>
                   <p>This isn’t about crash dieting or starvation—it’s about consistency, precision, and results. High-protein snacks and nutrient-dense meals mean no guesswork, no compromises, and no setbacks. Whether it’s the salmon and sweet potato dinner or the late-night casein protein dessert, every choice fuels your body with purpose.</p>

                   <h2>Stay Motivated:</h2>
                   <p>Results take time, but every meal, every rep, and every drop of sweat gets you closer. Think about how good it’ll feel to see those veins pop, your abs sharpen, and your strength increase even as the scale drops. This isn’t just a diet—it’s a lifestyle built for greatness. Stick to the plan, trust the process, and watch your hard work translate into the physique you’ve been chasing.</p>
                   <p>Let’s get after it—this is your moment to transform, to elevate, and to prove what’s possible. 🔥</p>
                   
                    <div className={styles.workoutsGrid}>
                        <h2>Your Meals:</h2>
                        <p><strong>Coming soon.</strong></p>
                    </div>
                </main>
           </div>
    )
}