import Link from 'next/link'
import { PiBarbellLight, PiBowlFoodLight, PiCalendarBlankLight } from 'react-icons/pi'
import styles from './sidebar.module.css'
import User from '@/types/user'

interface Props {
    user: User
}


export default function Sidebar({ user }: Props) {

    return (
        <aside className={styles.dashboardSidebar}>
            
            <div className={styles.dashboardSidebarContainer}>
                <div className={styles.dashboardSidebarAvatar}>
                    <img src={user.avatar} alt="avi" />
                </div>
                <div className={styles.sideBarNav}>
                    <nav>
                        <ul>
                            <li className={`${styles.sidebarNavItems} ${styles.sideNavLinkActive}`}>
                                <Link href="/workouts">
                                    <PiBarbellLight />
                                </Link>
                            </li>
                            <li className={styles.sidebarNavItems}>
                                <Link href="/calendar">
                                    <PiBowlFoodLight />
                                </Link>
                            </li>
                            <li className={styles.sidebarNavItems}>
                                <Link href="/meals">
                                    <PiCalendarBlankLight />
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </aside>
    )
}