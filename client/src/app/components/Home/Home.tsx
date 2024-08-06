import FullScreenWrapper from '@/components/FullScreenWrapper'
import Button from '@/components/Button'
import styles from '@/components/Home/Home.module.scss'

export default function Home() {

    return (
        <div className='homePage'>
            <header className={styles.homePageHeader}>
                <video className={styles.heroVid} autoPlay muted loop>
                    <source src='/images/bg-vid.mp4' type='video/mp4' />
                </video>
                <h1 className={styles.homePageHeading}>You're finally gonna build<br></br> your dream physique.</h1>
               
                <p className={styles.introText}>Introducing <span className="font-bold">SINC</span>. Your new training partner.</p>
                <div className={styles.ctaBtns}>
                    <Button href='/signup' className='shadow-md'>
                        <span>Sign up</span>
                    </Button>
                    <Button href='/goals' inverted className='shadow-md'>
                        <span>Programs</span>
                    </Button>
                </div>
            </header>
            <main className={styles.mainHomeContent}>
                <section className={`${styles.homeCalloutSection} ${styles.homeSection}`}>
                    <h1>Welcome to SINC</h1>
                    <p>You've never worked out like this before.</p>
                </section>
            </main>
        </div>
    )
}