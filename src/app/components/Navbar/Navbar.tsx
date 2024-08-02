import styles from '@/components/Navbar/Navbar.module.scss'

export default function Navbar() {

    return (
        <nav className={styles.navbar}>
            <span className={styles.logo}>sinc</span>
            <ul>
                <li>sign up</li>
                <li>download</li>
            </ul>
        </nav>
    )
}