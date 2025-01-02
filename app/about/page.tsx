import { SquareArrowDown } from 'lucide-react'
import Cover from '../components/Cover'
import styles from './AboutPage.module.scss'

export default function Page() {

    return (
            <div className={styles.aboutPageContainer}>
                <header>
                    <Cover height='70vh' displayType='flex' backgroundColor='#000' textColor='#fff'>
                            <div className={styles.homeCoverContent}>
                                <h1 className={styles.homeCoverHeaderText}>All about SINC.</h1>
                                <span className={styles.homeCoverContentText}>SINC is your new fitness partner. Complete and packed with marcos you can understand.</span>
                                <span className={styles.homeCoverContentText}>Seriously, check out how everything works below.</span>
                                <div className={styles.homeCoverIconContainer}>
                                    <SquareArrowDown size={35} className={styles.homeCoverIcon} />
                                </div>
                            </div>
                        </Cover>
                </header>
            </div>
    )
}