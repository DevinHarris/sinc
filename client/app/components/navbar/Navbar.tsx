import { PiMagnifyingGlassLight } from 'react-icons/pi'
import styles from './navbar.module.css'
import User from '@/types/user'

export default function Navbar({ user, children }: {
    user: User,
    children: React.ReactNode
}) {
    return (
        <div className={styles.navbarContainer}>
            <nav className={styles.navbar}>
               
                <div className={styles.searchBarContainer}>
                    <input className={styles.searchBar} type="text" placeholder="Search your space" />
                    <span className={styles.searchIcon}>
                        <PiMagnifyingGlassLight />
                    </span>
                </div>
            </nav>
        </div>
    )
}