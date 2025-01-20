import { auth } from "@/auth"
import { Dumbbell, Ruler, UtensilsCrossed } from "lucide-react";
import AuthAccess from "@/app/AuthAccess"

import styles from './Me.module.scss'

export default async function Page() {

    const session = await auth();

    return (
        <AuthAccess>
           <div className={styles.mePageWrapper}>
                <header className={styles.mePageHeader}>
                        <div className={styles.mePageHeaderAvatar}>
                            <img src={session?.user?.image!} />
                        </div>
                        <div className={styles.mePageHeaderQuickStats}>
                            <h1>This is your <strong>SINC</strong> dashboard, {session?.user?.name?.split(" ")[0]}.</h1>
                            <div className={styles.quickStats}>
                                <span><Dumbbell /> 200lbs.</span>
                            </div>
                        </div>
                </header>
                <main>
                    <div className={styles.progressPhotos}>
                        <h1>Progress Photos</h1>
                        <p className={styles.progressPhotosDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo adipisci recusandae odio consequatur eaque, veritatis officia ipsa voluptatibus voluptatem fuga natus magnam porro? Voluptas vel sapiente voluptatum quisquam nihil rem.</p>
                        <div className={styles.progressPhotosContainer}>
                            <div className={styles.progressPhoto}></div>
                            <div className={styles.progressPhoto}></div>
                            <div className={styles.progressPhoto}></div>
                        </div>
                    </div>
                    <div className={styles.stats}>
                        <h1>Your Stats</h1>
                    </div>
                </main>
           </div>
        </AuthAccess>
    )
}