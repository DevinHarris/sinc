'use client'

import Link from 'next/link'
import { useForm, SubmitHandler } from 'react-hook-form'
import styles from './page.module.css'

interface Access {
  accessCode: string
}

export default function Page() {

  const { register, handleSubmit, watch, reset } = useForm<Access>();
  const onSubmit: SubmitHandler<Access> = data => console.log(data);



  return (
    <div className={styles.container}>
       <div className={styles.landingContainer}>
          <div className={styles.landingMain}>
            <h1>Introducing <span className={styles.landingLogo}>SINC</span></h1>
            <p>Your <span className={styles.activityHighlight}>fitness life</span> all in one place.</p>
            <div className={styles.landingBigLogo}>
              <div className={styles.landingBigLogoCenter}></div>
            </div>
            <div className={styles.ctaContainer}>
                <div className={styles.landingForm}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register('accessCode')} type='text' className={styles.landingFormField} placeholder='Enter Early Access Code' />
                        <button className={styles.landingEnterBtn}>Get Started</button>
                    </form>    
                </div>
            </div>
            <div className={styles.landingVideoContainer}>
              <video autoPlay muted loop className={styles.landingVideo} src='/img/landingbg-2.mp4'></video>
            </div>
          </div>
       </div>
    </div>
  )
}