import styles from '@/components/Button/Button.module.scss'

export default function Button({
    children,
    className,
    inverted,
    href,
    ...delegated
 }: {
    children: React.ReactNode,
    className?: string,
    inverted?: boolean
    href?: string
 }) {

    const Tag = typeof href === 'string' ? 'a' : 'button'
    return (
        <Tag
            className={`${styles.btn} ${className ? className : ''} ${inverted ? styles.inverted : ''}`}
            href={href}
            {...delegated}
        >
            {children}
        </Tag>
    )
}