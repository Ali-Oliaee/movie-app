import {SvgProps, SvgXml} from 'react-native-svg'

const CheckIcon: React.FC<SvgProps> = (props) => {
    const xml = `<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.66665 2L2.99998 5.66667L1.33331 4" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
    return <SvgXml xml={xml} {...props} />
}

export default CheckIcon