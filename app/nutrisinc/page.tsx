import { SquareArrowDown } from 'lucide-react';
import Cover from '../components/Cover';
import styles from './NutriSinc.module.scss';

export default function NurtiSincPage() {

    return (
        <div className={styles.nurtiSincPage}>
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
        </div>
    )
}