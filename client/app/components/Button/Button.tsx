import Link from 'next/link'
import styles from '@/components/Button/button.module.css'


interface Props {
    text: string,
    className?: string
}

export default function CTAButton({ text, className }: Props) {
    return (
        <Link href="/dashboard" prefetch={true} className={styles.landingBtn}>{text}</Link>
    )
}