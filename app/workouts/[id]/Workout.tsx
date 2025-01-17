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
    const params = useParams<{ id: string }>();


   

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

        if (!res.success) {
            toast.message('Workout couldn\'t be added', {
                description: `${workout?.workoutName} is already in your Workout Space.`
            })
        }
        toast.message('Workout added!', {
            description: `${workout?.workoutName} has been added to your workout space.`
        })

        console.log(workout);
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
              
            <video autoPlay={true} playsInline loop muted>
                        <source src={workout.workoutDisplayMedia} type='video/mp4'></source>
                    </video>
            </div>
                )
            }
            <div className={styles.exercisePageHeaderInfo}>
                <div className={styles.exercisePageHeaderInfoContent}>
                    <h1 className={styles.exerciseName}>{workout?.workoutName}</h1>
                    <p className={styles.exerciseDescription}>{workout?.workoutPreviewTextPrimary}</p>
                    
                    <div className={styles.exerciseActions}>
                                    <CirclePlus className={styles.actionBtns} onClick={handleOnAdd}/>
                                    <Heart className={styles.actionBtns} onClick={handleOnLike} />
                                    <HeartCrack className={styles.actionBtns} onClick={handleOnDislike} />
                                </div>
                
                </div>
            </div>
        </header>
    <main className={styles.exerciseMainContent}>
        <div className={styles.exerciseInstructions}>
            <h2 className={styles.exerciseInstructionsHeading}>ABOUT THIS WORKOUT.</h2>
            <p><strong>{workout?.workoutPreviewTextSecondary}</strong></p>
            <p>Add this workout to your <strong>Workout Space</strong> for more details.</p>
           
        </div>
       
        
    </main>
   
</div>
    )
}