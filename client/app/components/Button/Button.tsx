import Link from 'next/link'
import styles from '@/components/Button/button.module.css'


interface Props {
    text: string,
    className?: string,
    children?: React.ReactNode
}

export default function CTAButton({ text, className, children }: Props) {
    return (
        <Link href="/dashboard" prefetch={true} className={styles.landingBtn}>
            {children}
        </Link>
    )
}