export type CoverProps = {
    children: React.ReactNode,
    height?: string,
    displayType?: 'flex' | 'grid',
    backgroundColor?: string,
    backgroundVideo?: string,
    backgroundImage?: string,
    textColor?: string,
    borderBottom?: string
}

export type HightlightLinkProps = {
    linkTo: string,
    linkText: string
}