"use client"

import { useState, useEffect } from 'react'
import Navbar from '@/components/navbar/Navbar'
import styles from './dashboard.module.css'
import User from '@/types/user'
import Sidebar from '@/components/sidebar/sidebar'
import Footer from '@/components/Footer/Footer'
import Space from '@/components/Space/Space'

export default function Page() {

    const initUser: User = {
        userName: "Devin",
        fullName: "Devin Chance",
        email: "dvnchnc@icloud.com",
        avatar: "/img/profile-avi-2.jpg"
    }

    // using a generic to pass the initUser interface to useState

    const [user, setUser] = useState<User>(initUser);

    

    useEffect(() => {

        console.log(user);

    })

    return (
        <div className={styles.dashboardPage}>
            
            {/* <img className={styles.sidebarLogo} src="/img/logo.svg" alt="logo" /> */}

            <div className={styles.dashboardMainGridContainer}>
                <header className={styles.dashboardHeader}>
                    {/* <Navbar user={user} /> */}
                </header>
                <Sidebar user={user} />
                <main className={styles.mainContent}>
                    Main content a
                    {/* <div className={styles.mainContentHeading}>
                        <h1 className={styles.dashboardHeading}>Hello {user.userName}, welcome to your Fitness Space</h1>
                        <div className={styles.dashboardSpaces}>
                            <Space spaceType="current" dropShadowColor="CDD3D0" backgroundColor="#CDD3D0" buttonText="Go" buttonColor="#000000" date={new Date().toLocaleTimeString()}>
                                
                            </Space> 
                            <Space spaceType="single" dropShadowColor="#ACBFD6" backgroundColor="#ACBFD6" buttonText="Go" buttonColor="#92B0BA">
                                <h1>Devin</h1>
                            </Space> 

                        </div>
                    </div> */}
                </main>
                <Footer />
            </div>
           
        </div>
    )
}