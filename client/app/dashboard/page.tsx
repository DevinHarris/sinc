import Navbar from '@/components/navbar/Navbar'
import styles from './dashboard.module.css'
import User from '@/types/user'
import Sidebar from '@/components/sidebar/sidebar'


export default function Page() {

    const user: User = {
        userName: "Devin",
        fullName: "Devin Chance",
        email: "dvnchnc@icloud.com",
        avatar: "/img/profile-avi-2.jpg"
    }

    return (
        <div className={styles.dashboardPage}>
            
            <img className={styles.sidebarLogo} src="/img/logo.svg" alt="logo" />
             <Sidebar user={user} />
            <div className={styles.dashboardMainContainer}>
                <header className={styles.dashboardHeader}>
                    <Navbar />
                </header>
                <main className={styles.mainContent}>
                <div className={styles.mainContentHeading}>
                        <h1 className={styles.dashboardHeading}>Hello {user.userName}, welcome to your Fitness Space</h1>
                </div>
                </main>
            </div>
           
        </div>
    )
}