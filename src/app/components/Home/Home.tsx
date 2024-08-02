import FullScreenWrapper from '@/components/FullScreenWrapper'
import Button from '@/components/Button'
import styles from '@/components/Home/Home.module.scss'

export default function Home() {

    return (
        <FullScreenWrapper className='homePage'>
            <header className={styles.homePageHeader}>
                <h1 className={styles.homePageHeading}>You're finally gonna build<br></br> your dream physique.</h1>
               
                <p className={styles.introText}>Introducing sinc. Your new training partner.</p>
                <div className={styles.ctaBtns}>
                    <Button href='/signup'>
                        <span>Sign up</span>
                    </Button>
                    <Button href='/goals' inverted>
                        <span>Programs</span>
                    </Button>
                </div>
            </header>
        </FullScreenWrapper>
    )
}