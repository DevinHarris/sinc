import Link from 'next/link';
import Image from 'next/image';
import { Search, UserRoundPlus } from 'lucide-react';
import styles from './Navbar.module.scss';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbarLeft}>
                <li className={styles.navbarLink}>
                    <Link href="/about">About</Link>
                </li>
                <li className={styles.navbarLink}>
                    <Link href="/nutrisinc">NurtiSinc</Link>
                </li>
            </ul>
            <div className={styles.centerLogo}>
                <Link href="/">
                    <Image src="/images/sinc-logo-white-3.png" width={50} height={50} alt="sinc-logo" />
                </Link>
            </div>
            <ul className={styles.navbarRight}>
                <li className={styles.navbarLink}>
                    <Link href="/signup">
                        <UserRoundPlus />
                    </Link>
                </li>
                <li className={styles.navbarLink}>
                    <Link href="/signup">
                        <Search />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}