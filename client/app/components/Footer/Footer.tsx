import Link from 'next/link'
import { PiBarbellLight, PiBowlFoodLight, PiCalendarBlankLight } from 'react-icons/pi'
import styles from './footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.dashboardFooter}>
            <div className={styles.footerNav}>
                    <nav>
                        <ul>
                            <li className={`${styles.footerNavItems} ${styles.footerNavLinkActive}`}>
                                <Link href="/workouts">
                                    <PiBarbellLight />
                                </Link>
                            </li>
                            <li className={styles.footerNavItems}>
                                <Link href="/calendar">
                                    <PiBowlFoodLight />
                                </Link>
                            </li>
                            <li className={styles.footerNavItems}>
                                <Link href="/meals">
                                    <PiCalendarBlankLight />
                                </Link>
                            </li>
                        </ul>
                    </nav>
    </div>
        </footer>
    )
}