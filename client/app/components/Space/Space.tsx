"use client"

import { useState, useEffect } from 'react'
import { PiBarbellLight, PiDrop, PiBowlFood } from 'react-icons/pi'
import Link from 'next/link'
import Space from '@/types/space';
import styles from './space.module.css'


export default function Space({ spaceClassName, date, backgroundColor, buttonText, buttonColor, children, spaceType, dropShadowColor }: Space) {

    const [ spaceSize, setSpaceSize ] = useState('')

    useEffect(() => {
       if (spaceType == "single") setSpaceSize("15%")
       if (spaceType == "current") setSpaceSize("30%")
       if (spaceType == "half") setSpaceSize("50%")
       if (spaceType == "full") setSpaceSize("95%")

    })

   

    return (
        <div className={`${styles.spaceContainer} ${spaceClassName}`} style={{ backgroundColor: backgroundColor, filter: `drop-shadow(0px 0px 10px ${dropShadowColor})`, width: spaceSize }}>
            
            <div className={styles.spaceMainContent}>
                { children }

                { date ? <div className={styles.spaceHeading}> {
                    (
                        <>
                            <h1>Today</h1>
                            <h2>It's Wednesday { date }</h2>
                        </>
                    )
                } </div> : null }

                {
                    spaceType == 'current' ? (
                        <div className={styles.currentMeta}>
                            <div className={styles.currentItem}>
                                <PiBarbellLight />
                                <span className={styles.workoutType}>Push</span>
                            </div>

                            <div className={styles.currentItem}>
                                <PiDrop />
                                <span className={styles.workoutType}>1.2 gallons drank</span>
                            </div>
                            <div className={styles.currentItem}>
                                <PiBowlFood />
                                <span className={styles.workoutType}>2/4 meals eaten</span>
                            </div>
                        </div>
                    ) : null
                }
            </div>
            <Link href="today" className={styles.spaceBtn} style={{ backgroundColor: buttonColor }}>
                { buttonText }
            </Link>
        </div>
    )
}