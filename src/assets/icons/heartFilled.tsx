import { SvgProps, SvgXml } from "react-native-svg"

const HeartFilledIcon: React.FC<SvgProps> = (props) => {
    const xml = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.1666 6.4237C14.16 4.73313 13.273 3.14326 11.5244 2.57994C10.3237 2.19246 9.01577 2.40794 8.00001 3.86626C6.98425 2.40794 5.67632 2.19246 4.47561 2.57994C2.72677 3.14332 1.83981 4.73349 1.8334 6.42428C1.81723 9.78677 5.22443 12.3598 7.99915 13.5896L8.00001 13.5892L8.00087 13.5896C10.7757 12.3597 14.1832 9.78644 14.1666 6.4237Z" fill="white" stroke="white" stroke-width="0.8" stroke-linecap="square"/>
    </svg>`
    return <SvgXml xml={xml} {...props} />
}

export default HeartFilledIcon