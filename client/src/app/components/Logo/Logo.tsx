import Image from "next/image";
import { IoMdSquare } from "react-icons/io"
import { Montserrat } from 'next/font/google'
import SVGLogo from '/src/images/logo.svg'
import styles from '@/components/Logo/Logo.module.scss';

const montserrat = Montserrat({
    subsets: ['latin'], 
    weight: ['300', '400', '800']
})

export default function Logo({
    className,
    href,
    ...delegated
}: {
    className?: string,
    href?: string
}) {

    const Tag = typeof href === 'string' ? 'a' : 'span'

    return (
        <Tag className={`${styles.logo} ${className} ${montserrat.className}`} href={href} {...delegated}>
            <Image src={SVGLogo} alt="logo" width={0} height={0} />
        </Tag>
    )
}