import Button from '@/components/Button'
import styles from '@/goals/Goals.module.scss'

export default function Page() {

    return (
        <div className={styles.goalsPage}>
            <header className={styles.goalsHeader}>
                <h1>Goals</h1>
                <p>Here you'll find different programs based on your goal.</p>
            </header>
            <main>
                <div className={styles.goalsBar}>
                    <div className={styles.goalsCategories}>
                            <Button>
                                <span>Cutting</span>
                            </Button>
                            <Button inverted>
                                <span>Bulking</span>
                            </Button>
                            <Button inverted>
                                <span>Mass</span>
                            </Button>
                            <Button inverted>
                                <span>Tone</span>
                            </Button>
                        </div>
                    <div className={styles.goalsSearch}>
                        <input className={`${styles.searchBar} shadow-sm`} placeholder='Search...' type='text' />
                    </div>
                </div>
            </main>
        </div>
    )
}