
import {SvgProps, SvgXml} from 'react-native-svg'

const RightArrowIcon: React.FC<SvgProps> = (props) => {
    const xml = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.25 2.5L7.75 6L4.25 9.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
    return <SvgXml xml={xml} {...props} />
}

export default RightArrowIcon