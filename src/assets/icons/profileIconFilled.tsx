import {SvgProps, SvgXml} from 'react-native-svg'

const ProfileIconFilled: React.FC<SvgProps> = (props) => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8889 12.6188H11.9209C14.8489 12.6188 17.2299 10.2378 17.2299 7.30976C17.2299 4.38176 14.8489 1.99976 11.9209 1.99976C8.99189 1.99976 6.60989 4.38176 6.60989 7.30676C6.59989 10.2268 8.9669 12.6098 11.8889 12.6188ZM8.03789 7.30976C8.03789 5.16876 9.77989 3.42776 11.9209 3.42776C14.0609 3.42776 15.8019 5.16876 15.8019 7.30976C15.8019 9.44976 14.0609 11.1918 11.9209 11.1918H11.8919C9.75989 11.1838 8.03089 9.44376 8.03789 7.30976Z" fill="white" fill-opacity="1"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.99988 18.1731C3.99988 21.8701 9.96188 21.8701 11.9209 21.8701C15.3199 21.8701 19.8399 21.4891 19.8399 18.1931C19.8399 14.4961 13.8799 14.4961 11.9209 14.4961C8.52088 14.4961 3.99988 14.8771 3.99988 18.1731ZM5.49988 18.1731C5.49988 16.7281 7.65988 15.9961 11.9209 15.9961C16.1809 15.9961 18.3399 16.7351 18.3399 18.1931C18.3399 19.6381 16.1809 20.3701 11.9209 20.3701C7.65988 20.3701 5.49988 19.6311 5.49988 18.1731Z" fill="white" fill-opacity="1"/>
    </svg>`
    return <SvgXml xml={xml} {...props} />
}

export default ProfileIconFilled