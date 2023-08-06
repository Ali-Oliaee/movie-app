import {SvgProps, SvgXml} from 'react-native-svg'

const PlayIcon: React.FC<SvgProps> = (props) => {
    const xml = `<svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.83333 4.99434C6.83333 4.04802 1.98295 1.02064 1.43273 1.56498C0.882512 2.10932 0.829607 7.82806 1.43273 8.42369C2.03585 9.02142 6.83333 5.94065 6.83333 4.99434Z" fill="#07090E" stroke="#07090E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
    return <SvgXml xml={xml} {...props} />
}

export default PlayIcon