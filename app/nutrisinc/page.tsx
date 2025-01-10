import AuthAccess from '../AuthAccess';
import styles from './nutrisincPage.module.scss';

export default function nutrisincPage() {

    return (
        <div className={styles.nutrisincPageWrapper}>
            <h1>nutriSINC</h1>

            <AuthAccess>
                <div className={styles.nutrisincAppContainer}>
                    <p>OMG PROTECTED CONTENT!</p>
                </div>
            </AuthAccess>
        </div>
    )
}