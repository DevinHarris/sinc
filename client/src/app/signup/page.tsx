import Logo from '@/components/Logo';
import styles from './Signup.module.scss';
import FullScreenWrapper from '@/components/FullScreenWrapper';

export default function SignupPage() {

    return (
        <FullScreenWrapper>
           <div className={styles.signupPage}>
            <div className={styles.signupPageContainer}>
                    <h1 className={styles.signupPageLogo}>
                        <Logo className={styles.signupLogo} />
                        <span>SINC.</span>
                    </h1>
                </div>
                <div className={styles.signupPageText}>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae quae cumque tenetur voluptas! Mollitia nemo odio reprehenderit ducimus eveniet fugiat porro repellendus aperiam animi accusantium! Repudiandae similique voluptate ea porro.</p>
                
                </div>

                <div className={styles.signupForm}>
                    <form>
                        <input type="text" placeholder='First Name' />
                    </form>
                </div>

           </div>
        </FullScreenWrapper>
    )
}