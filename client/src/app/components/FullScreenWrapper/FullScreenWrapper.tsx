
import styles from '@/components/FullScreenWrapper/FullScreenWrapper.module.scss'
import { CSSProperties } from 'react'

export default function FullScreenWrapper({ 
    className,
    children,
    height = '100vh',
    ...delegated

}: {
    className?: string,
    children: React.ReactNode,
    height?: string | undefined
}) {

    return (
        <div className={`${styles.fullScreenWrapper} ${className}`} style={{ height: height }} {...delegated}>
            {children}
        </div>
    )
}