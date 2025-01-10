import AuthAccess from '../../AuthAccess';
import styles from './ProgramPage.module.scss';

export default function Page() {
    return (
        <AuthAccess>
            <div className={styles.programsPageWrapper}>
                <header className={styles.programHeader}>
                    <h1>Pure Aesthethics.</h1>
                    <p>Welcome to Pure Aeshethics, you gateway to your perfect phyisque.</p>
                </header>
            </div>
        </AuthAccess>
    )
}