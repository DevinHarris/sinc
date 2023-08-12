import styles from './dashboard.module.css'


export default function Page() {
    return (
        <div className={styles.dashboardContainer}>
            <header className={styles.dashboardHeader}>
                <h1 className={styles.dashboardHeading}>Hello and Welcome to SINC</h1>
                <h2 className={styles.dashboardSubHeading}>This is your Fitness Space.</h2>
            </header>
        </div>
    )
}