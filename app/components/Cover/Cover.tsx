
import type { CoverProps } from '../../../lib/types'
import styles from './Cover.module.scss';

export default function Cover({
    children,
    displayType,
    height,
    backgroundImage,
    backgroundVideo,
    backgroundColor,
    borderBottom,
    textColor
}: CoverProps) {

    const stylesFromProps = {
        display: displayType === 'grid' ? 'grid' : 'flex',
        backgroundColor,
        height,
        color: textColor,
        borderBottom: borderBottom
    }

    return (
        <div className={styles.cover} style={stylesFromProps}>
            <div className={styles.coverContent}>
                 {children}
            </div>
        </div>
    )
}