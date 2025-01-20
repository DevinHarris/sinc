import { QRCodeSVG } from 'qrcode.react'
import styles from './QRPage.module.scss'

export default function Page() {

    return (
        <div className={styles.qrPage}>
            <div className={styles.qrContentWrapper}>
            <div className={styles.qrCode}>
                    <QRCodeSVG 
                        style={{ width: '100%', height: '100%' }} 
                        value='https://sincfit.com' 
                        bgColor='#09090b' 
                        fgColor='#FFFFFF'
                        title='Build your new physique.'
                        level='M'
                    />
                </div>
                <h1>Your Last Fitness Journey Starts Now.</h1>
                <p>Take the first step towards achieving your fitness goals with <strong>SINC</strong>. Whether you're building strength, cutting fat, or enhancing performance, our platform delivers tailored workouts, nutrition plans, and progress tracking all in one place. Scan the QR code to join now and take control of your transformation.</p>
               
            
            </div>
        </div>
    )
}