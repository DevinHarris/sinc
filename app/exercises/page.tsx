import AuthAccess from '@/app/AuthAccess'
import styles from './Exercises.module.scss'

export default function Page() {

    return (
        <AuthAccess>
            <div className={styles.exercisesPage}>
                <h1>Exercises Page.</h1>
            </div>
        </AuthAccess>
    )
}