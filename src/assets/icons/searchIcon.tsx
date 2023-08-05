import {SvgProps, SvgXml} from 'react-native-svg'

const SearchIcon: React.FC<SvgProps> = (props) => {
    const xml = `<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="9.76659" cy="9.76657" r="8.98856" fill-opacity="0.6" stroke="#A7A7A7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16.0183 16.4851L19.5423 20" stroke="#A7A7A7" fill-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
    return <SvgXml xml={xml} {...props} />
}

export default SearchIcon