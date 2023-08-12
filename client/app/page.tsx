import styles from '@/app/page.module.css'
import CTAButton from '@/components/Button/Button'

export default function Page() {
  return (
    <div className={styles.container}>
       <div className={styles.main}>
          <h1 className={styles.landingLogo}>S_NC</h1>
          <p className={styles.landingTagline}>Your fitness life simplified.</p>
          <CTAButton text="Get Started." />
       </div>
    </div>
  )
}