import Logo from '@/components/Logo'
import styles from '@/components/Navbar/Navbar.module.scss'

export default function Navbar() {

    return (
        <nav className={`${styles.navbar} shadow-sm`}>
            <div className={styles.logoWrapper}><Logo href='/' /></div>
            {/* <ul>
                <li>sign up</li>
                <li>download</li>
            </ul> */}
        </nav>
    )
}