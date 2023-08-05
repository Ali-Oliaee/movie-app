
import {SvgProps, SvgXml} from 'react-native-svg'

const HeartIconFilled: React.FC<SvgProps> = (props) => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.2499 9.63556C21.24 7.09969 19.9096 4.71489 17.2866 3.86991C15.4855 3.28869 13.5236 3.61191 12 5.79939C10.4764 3.61191 8.51447 3.28869 6.71339 3.86991C4.09014 4.71498 2.75971 7.10024 2.75008 9.63643C2.72582 14.6801 7.83662 18.5397 11.9987 20.3844L12 20.3838L12.0013 20.3844C16.1636 18.5396 21.2748 14.6797 21.2499 9.63556Z" stroke="white" stroke-opacity="1" stroke-width="1.5" stroke-linecap="square"/>
    </svg>`
    return <SvgXml xml={xml} {...props} />
}

export default HeartIconFilled