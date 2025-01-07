"use client"

import * as React from "react"
import { Button } from '@/src/app/components/ui/button'
import { ArrowUpRight } from 'lucide-react'

 
import styles from './Home.module.scss';
import { CardDemo } from "../Card";




export default function Home() {

      
    return (
        <div className={styles.home}>
            <div className={styles.homeGrid}>
                <div className={styles.homeGridLeft}>
                    <div className={styles.homeGridLeftHeading}>
                        <nav className={styles.homeNav}>
                            <h1 className={styles.homeNavLogo}>SINC.</h1>
                            <span className={styles.homeNavTagline}>Master your physique.</span>
                        </nav>
                    </div>
                    <div className={styles.homeGridLeftSection}>
                        <h2 className={styles.welcomeBackMsg}>Welcome back, <strong>Devin</strong>. Here's your day at a glance.</h2>
                        <CardDemo />
                    </div>
                    <div className={styles.homeGridLeftSection}>
                        <div className={styles.homeGridContent}>
                            <div className={styles.homeGridContentDescriptions}>
                                <p className={styles.homeDescription}>SINC is your all-in-one gym companion, designed to help you achieve your fitness goals with ease. Whether you're building muscle, cutting fat, or planning the perfect workout routine, SINC offers personalized tools and guidance tailored to your unique needs.</p>
                                <p className={styles.homeDescription}>From customized meal plans and detailed progress tracking to expert tips and community support, SINC empowers you to stay consistent and reach new heights.</p>
                                <p className={styles.homeDescription}>Start your fitness transformation today—download SINC and take the first step towards a stronger, healthier you.</p>
                            </div>
                            <div className={styles.homeGetStarted}>
                                <h2>Start by completing the quiz over on the right.</h2>
                                <Button className={styles.homeGetStartedButton}>Complete the quiz <ArrowUpRight /></Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.homeGridRight}>
                    <div className={styles.homeQuizContainer}>
                        <div className={styles.homeQuizHeading}>
                            <h3>Welcome to SINC.</h3>
                            <p>Complete the quiz below to get your profile started.</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}