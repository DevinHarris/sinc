import { HeartCrack, ArrowRight, CirclePlus, Heart } from 'lucide-react'


import styles from './Exercise.module.scss';
import { Button } from '@/components/ui/button';

export default function Page() {

    return (
                <div className={styles.exercisePage}>
                    <header className={styles.exercisePageHeader}>
                        <div className={styles.exercisePageHeaderDemoMedia}>
                        <video autoPlay loop muted>
                                    <source src="/images/exercise_demo_5.mp4" type='video/mp4'></source>
                                </video>
                        </div>
                        <div className={styles.exercisePageHeaderInfo}>
                            <div className={styles.exercisePageHeaderInfoContent}>
                                <h1 className={styles.exerciseName}>Planks.</h1>
                                <p className={styles.exerciseDescription}>Planks are a core-strengthening powerhouse. This simple yet effective exercise engages your entire body, building endurance, stability, and posture. Add planks to your routine to sculpt a stronger core and unlock the foundation of full-body strength.</p>
                                
                                <div className={styles.exerciseActions}>
                                    <CirclePlus />
                                    <Heart />
                                    <HeartCrack />
                                    <Button variant={"secondary"}>
                                        <a className={styles.learnMoreBtn} href="/">Learn More.</a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </header>
                <main className={styles.exerciseMainContent}>
                    <div className={styles.exerciseInstructions}>
                        <h2 className={styles.exerciseInstructionsHeading}>Instructions.</h2>
                        <div className={styles.exerciseInstructionsContent}>
                            <div className={styles.exerciseSteps}>
                                <h3>Start Position.</h3>
                                <p>Begin on the floor in a push-up position, with your forearms resting on the ground and elbows directly under your shoulders.</p>
                            </div>
                            <div className={styles.exerciseSteps}>
                                <h3>Align Your Body.</h3>
                                <p>Begin on the floor in a push-up position, with your forearms resting on the ground and elbows directly under your shoulders.</p>
                            </div>
                            <div className={styles.exerciseSteps}>
                                <h3>Hold the Position.</h3>
                                <p>Keep your body straight—head to heels. Tighten your core, glutes, and legs. No sagging or arching.</p>
                            </div>
                            <div className={styles.exerciseSteps}>
                                <h3>Time Yourself.</h3>
                                <p>Hold the plank for 20–60 seconds or as long as you can with good form.</p>
                            </div>
                            <div className={styles.exerciseSteps}>
                                <h3>Exercise Pro Tips. <ArrowRight /></h3>
                                <p> Gradually increase the duration as you build strength. </p>
                                <p>Add planks to your routine for serious core stability and total-body strength gains.</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className={styles.exerciseInstructions}>
                        <h2 className={styles.exerciseInstructionsHeading}>Rep and Set Range Recommendations.</h2>
                        <div className={styles.exerciseInstructionsContent}>
                            <div className={styles.exerciseSteps}>
                                <h3>For Hypertrophy (Muscle Growth)</h3>
                                <p>Reps: 8–12 per set / Sets: 3–5 </p>
                            </div>
                            <div className={styles.exerciseSteps}>
                                <h3>For Strength</h3>
                                <p>Reps: 4–6 per set / Sets: 4–6</p>
                            </div>
                            <div className={styles.exerciseSteps}>
                                <h3>For Toning (Endurance and Definition)</h3>
                                <p>Reps: Time-based holds (20–60 seconds per set) / Sets: 2–4</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="navigation">
                        <Button variant={"secondary"}>
                            <a href="/exercises">More exercises.</a>
                        </Button>
                    </div>
                </main>
            </div>
    )
}