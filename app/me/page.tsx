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
                    <h2>Programs.</h2>
                </main>
           </div>
        </AuthAccess>
    )
}