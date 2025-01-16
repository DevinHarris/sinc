import Link from 'next/link'
import { auth } from '@/auth'
import { CardDemo } from '../Card'
import styles from './Sidebar.module.scss'

export default async function Sidebar({
  
    children,
    element,
    data,
    ...delegated
}: {
    children?: React.ReactNode,
    data?: {
        title: string,
        userName: string,
    }
    element?: React.ReactNode,

}) {

    const session = await auth();
    console.log(session);
   
    return (
       <aside className={styles.sideBar}>
         <div className={styles.homeGridLeft} {...delegated}>
                    <div className={styles.homeGridLeftHeading}>
                        <nav className={styles.homeNav}>
                            <Link href="/">
                                <h1 className={styles.homeNavLogo}>SINC.</h1>
                            </Link>
                            <span className={styles.homeNavTagline}>Master your body.</span>
                        </nav>
                    </div>
                    <div className={styles.homeGridLeftSection}>
                        {
                            session && (
                               <div>
                                 <h2 className={styles.welcomeBackMsg}>Welcome back, <strong>{session.user?.name?.split(" ")[0]}</strong>. Here's your day at a glance.</h2>
                                 <nav className='w-full' style={{ paddingInlineEnd: '1rem'}}>
                                    <ul style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <li>
                                            <Link href="/me"><strong>Dashboard</strong></Link>
                                        </li>
                                        <li>
                                            <Link href="/me/workouts"><strong>Workout Space</strong></Link>
                                        </li>
                                        <li>
                                            <Link href="/nutrisinc"><strong>NutriSINC</strong></Link>
                                        </li>
                                    </ul>
                                 </nav>
                                </div>
                            )
                        }
                    </div>
                    <div className={`${styles.homeGridLeftSection} ${styles.notifications}`}>
                        
                        <div className={styles.homeGridContent}>
                            
                        <CardDemo avatarSrc={session?.user?.image!} />
                            <div className={styles.homeGridContentDescriptions}>
                                <p className={styles.homeDescription}><strong>SINC</strong> is your all-in-one gym companion, designed to help you achieve your fitness goals with ease. Whether you're building muscle, cutting fat, or planning the perfect workout routine, SINC offers personalized tools and guidance tailored to your unique needs.</p>
                                <p className={styles.homeDescription}>From customized meal plans and detailed progress tracking to expert tips and community support, SINC empowers you to stay consistent and reach new heights.</p>
                                <p className={styles.homeDescription}>Start your fitness transformation today—download SINC and take the first step towards a stronger, healthier you.</p>
                            </div>
                            {/* <div className={styles.homeGetStarted}>
                                <h2>Start by completing the quiz over on the right.</h2>
                                <Button className={styles.homeGetStartedButton}>Complete the quiz <ArrowUpRight /></Button>
                            </div> */}
                        </div>
                    </div>
                </div>
       </aside>
    )
}