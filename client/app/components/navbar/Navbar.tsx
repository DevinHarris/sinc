
import styles from './navbar.module.css'

export default function Navbar() {
    return (
        <div className={styles.navbarContainer}>
            <nav className={styles.navbar}>
                <div className={styles.searchBarContainer}>
                    <input className={styles.searchBar} type="text" placeholder="Search your space" />
                </div>
            </nav>
        </div>
    )
}