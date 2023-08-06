import {SvgProps, SvgXml} from 'react-native-svg'

const LikeIcon: React.FC<SvgProps> = (props) => {
    const xml = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.7083 8.02963C17.7 5.91641 16.5913 3.92907 14.4055 3.22492C12.9046 2.74058 11.2697 3.00992 10 4.83282C8.73031 3.00992 7.09541 2.74058 5.59451 3.22492C3.40847 3.92915 2.29978 5.91686 2.29176 8.03035C2.27154 12.2335 6.53054 15.4497 9.99894 16.987L10 16.9865L10.0011 16.987C13.4697 15.4496 17.729 12.2331 17.7083 8.02963Z" stroke="white" stroke-width="1.5" stroke-linecap="square"/>
    </svg>`
    return <SvgXml xml={xml} {...props} />
}

export default LikeIcon