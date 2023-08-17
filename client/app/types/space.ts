export default interface Space {
    date?: string,
    backgroundColor: string,
    buttonText: string,
    buttonColor: string,
    children?: React.ReactNode
    dropShadowColor: string,
    spaceType: 'current' | 'single' | 'half' | 'full',
    spaceClassName?: string
    // size: 'small' | 'medium' | 'half' | 'large' | 'full'
}