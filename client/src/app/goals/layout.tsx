import styles from './layout.module.scss'

export default function GoalsLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <section className={styles.goalsLayout}>
            {children}
        </section>
    )
}