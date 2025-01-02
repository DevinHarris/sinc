import { SquareArrowDown } from 'lucide-react'
import Cover from '../Cover';
import styles from './Home.module.scss';

export default function Home() {

    return (
        <div className={styles.home}>
           <header>
            <Cover height='70vh' displayType='flex' backgroundColor='#000' textColor='#fff'>
                    <div className={styles.homeCoverContent}>
                        <h1 className={styles.homeCoverHeaderText}>You won't be the same after this.</h1>
                        <span className={styles.homeCoverContentText}>SINC is your new fitness partner. Complete and packed with marcos you can understand.</span>
                        <span className={styles.homeCoverContentText}>Seriously, check out how everything works below.</span>
                        <div className={styles.homeCoverIconContainer}>
                            <SquareArrowDown size={35} className={styles.homeCoverIcon} />
                        </div>
                    </div>
                </Cover>
           </header>
           <main>
                <section className={styles.homeSection}>
                    <div className={styles.homeHowItWorks}>
                        <div className={styles.sectionHeading}>
                            <h2>How SINC Works</h2>
                        </div>
                    </div>
                </section>
           </main>

            
        </div>
    )
}