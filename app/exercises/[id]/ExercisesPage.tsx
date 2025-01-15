"use client"
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { HeartCrack, ArrowRight, CirclePlus, Heart, Weight } from 'lucide-react'
import { Toaster, toast } from 'sonner'
import YouTube from 'react-youtube'

import AuthAccess from '@/app/AuthAccess'
import type { ExerciseData } from '@/lib/types'
import styles from './Exercise.module.scss';
import { Button } from '@/components/ui/button';

export default function ExercisePage() {

    const params = useParams<{ id: string }>();
    console.log(params);

    const [exerciseData, setExerciseData] = useState<ExerciseData>();

    const handleOnAdd = () => {
        toast.message('Exercise added!', {
            description: `${exerciseData?.exerciseName} have been added to your exercise space.`
        })
    }

    const handleOnLike = () => {
        toast.success(`You liked ${exerciseData?.exerciseName}`)
    }


    const handleOnDislike = () => {
        toast.error(`You disliked ${exerciseData?.exerciseName}`)
    }

    const opts = {
        playerVars: {
            autoplay: 1
        }
    }

    useEffect(() => {
        const getExercise = async () => {
            try {

                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/exercise/${params.id}`);
                const data = await res.json();

                setExerciseData(data);
                console.log(data)
    
            } catch (err) {
                console.log (err)
            }
        }

        getExercise();
    }, [])


    return (
                <div className={styles.exercisePage}>
                    <Toaster />
                    <header className={styles.exercisePageHeader}>
                        <div className={styles.exercisePageHeaderDemoMedia}>
                            <YouTube videoId={exerciseData?.expertDemonstration.split("=")[1]}iframeClassName="youtubeDemo" style={{ width: "100%" }} opts={opts} />
                        {/* <video autoPlay loop muted>
                                    <source src="/images/exercise_demo_1.mp4" type='video/mp4'></source>
                                </video> */}
                        </div>
                        <div className={styles.exercisePageHeaderInfo}>
                            <div className={styles.exercisePageHeaderInfoContent}>
                                <h1 className={styles.exerciseName}>{exerciseData?.exerciseName}</h1>
                                <p className={styles.exerciseDescription}>{exerciseData?.exerciseDescription}</p>
                                
                                <div className={styles.exerciseActions}>
                                    <CirclePlus className={styles.actionBtns} onClick={handleOnAdd}/>
                                    <Heart className={styles.actionBtns} onClick={handleOnLike} />
                                    <HeartCrack className={styles.actionBtns} onClick={handleOnDislike} />
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
                                    {
                                        exerciseData?.exerciseInstructions.length && (
                                            <ul>
                                                {
                                                    exerciseData?.exerciseInstructions.map((instruction, index) => (
                                                        <li className={styles.exerciseName} key={index}>{index + 1} - {instruction.children[0].text}</li>
                                                    ))
                                                }
                                            </ul>
                                        )
                                }
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