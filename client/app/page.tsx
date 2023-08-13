import Link from 'next/link'
import styles from './page.module.css'

export default function Page() {
  return (
    <div className={styles.container}>
       <div className={styles.main}>
          <div className={styles.mainSidebar}>
              <video autoPlay muted loop className={styles.sidebarVideo}>
                <source src="/img/landingbg.mp4"></source>
              </video>
          </div>

         <div className={styles.mainContent}>
          <div>
                <h1 className={styles.landingLogo}>S_NC</h1>
                <p className={styles.landingTagline}>Your fitness life simplified.</p>
                <Link href="/dashboard" className={styles.dashboardLink}>Get Started</Link>
          </div>
         </div>
       </div>
    </div>
  )
}