"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { CirclePlus, Heart, HeartCrack, CircleCheck, ArrowRightCircleIcon } from 'lucide-react'
import { Toaster, toast } from 'sonner'
import type { Workout } from '@/lib/types';
import styles from './Workout.module.scss'

interface ExerciseData {
    exerciseName: string
}

export default function WorkoutPage() {

    const [workout, setWorkout] = useState<Workout>();
    const [completed, setCompleted] = useState<string[]>([]);
    const params = useParams<{ id: string }>();


    useEffect(() => {
       
        if (workout && completed.length === workout.exercises.length) {
            toast.message('Workout Complete.', {
                description: `You just finished ${workout?.workoutName}. Remember to rate for other SINC members.`
            })
        }

    }, [completed])

    const handleOnAdd = async () => {

        const workoutReq = await fetch("/api/workout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ workoutName: workout?.workoutName, sourceId: workout?.id })
        })

        const res = await workoutReq.json();
        console.log(res);
        toast.message('Workout added!', {
            description: `${workout?.workoutName} has been added to your workout space.`
        })

        console.log(workout);
    }

    const handleOnCompleted = (exercise: ExerciseData) => {
       
        
        if (!completed.includes(exercise.exerciseName)) {
            setCompleted(prevState => {
                

                return [...prevState, exercise.exerciseName]
            })

            
            toast.success('You completed an exercise!');
        } else {
            toast.error('You\'ve already completed this exercise.');
        }

        
        
    }

    const handleOnLike = () => {
        toast.success(`You liked ${workout?.workoutName}`)
    }


    const handleOnDislike = () => {
        toast.error(`You disliked ${workout?.workoutName}`)
    }

    useEffect(() => {

        const getWorkout = async () => {

            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/workout/${params.id}`);
                const data = await res.json();

                setWorkout(data);

            } catch(err) {
                console.log(err)
            }
        }

        getWorkout();

    }, [])



    return (
        
        <div className={styles.exercisePage}>
            <Toaster />
        <header className={styles.exercisePageHeader}>
            {
                workout && (
                    <div className={styles.exercisePageHeaderDemoMedia}>
              
            <video autoPlay loop muted>
                        <source src={`/images/${workout?.workoutDisplayMedia}`} type='video/mp4'></source>
                    </video>
            </div>
                )
            }
            <div className={styles.exercisePageHeaderInfo}>
                <div className={styles.exercisePageHeaderInfoContent}>
                    <h1 className={styles.exerciseName}>{workout?.workoutName}</h1>
                    <p className={styles.exerciseDescription}>{workout?.workoutGoals}</p>
                    
                    <div className={styles.exerciseActions}>
                                    <CirclePlus className={styles.actionBtns} onClick={handleOnAdd}/>
                                    <Heart className={styles.actionBtns} onClick={handleOnLike} />
                                    <HeartCrack className={styles.actionBtns} onClick={handleOnDislike} />
                                </div>
                    <div className={styles.workoutProgress}>
                        <span><strong>Workout Progress: </strong> {completed.length} / <strong>{workout?.exercises.length}</strong></span>
                        <div className={styles.progressBar} style={{ width: `${(completed.length * 100) / workout?.exercises?.length!}%`, backgroundColor: `${completed.length ===  workout?.exercises.length ? 'hsl(182, 91%, 65%)' : 'hsl(0, 0%, 37%)'}` }}></div>
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
                workout?.exercises.length && (
                    <ul>
                        {
                            workout?.workoutDescription.map((exercise, index) => (
                                <li className={styles.exerciseName} key={index}>{exercise.children[0].text}</li>
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
        <div className={styles.navigation}>
           <h3 className={styles.exercisesUsed}>Exercises used in this workout:</h3>
           <p>Click the exercise below for more information.</p>
           {
                workout?.exercises.length && (
                    <ul>
                        {
                            workout?.exercises.map((exercise, index) => (
                                <li className={styles.exerciseName} key={index + 1}><Link href={`/exercises/${exercise.id}`}>
                                    { `${index + 1}. ${exercise.exerciseName}` }    
                                </Link> <ArrowRightCircleIcon style={{ display: 'inline-block' }} size={15}  />
                                  <CircleCheck onClick={() => handleOnCompleted(exercise) } />
                                </li>
                            ))
                        }
                    </ul>
                )
           }
        </div>
    </main>
   
</div>
    )
}