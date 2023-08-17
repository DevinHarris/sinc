import styles from './sidebar.module.css'
import User from '@/types/user'

export default function Sidebar({ user }: {
    user: User
}) {
    return (
        <aside className={styles.dashboardSidebar}>
            
            <div className={styles.dashboardSidebarContainer}>
                <div className={styles.dashboardSidebarAvatar}>
                    <img src={user.avatar} alt="avi" />
                </div>
                <div className={styles.sidebarMainContent}>
                    <div className={styles.sideBarHeading}>
                        <h1>Hello Devin</h1>
                        <p>Welcome to your Fitness Space.</p>
                    </div>
                </div>
            </div>
        </aside>
    )
}