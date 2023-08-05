import {SvgProps, SvgXml} from 'react-native-svg'

const HomeIcon: React.FC<SvgProps> = (props) => {
    const xml = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.63099 17.3095V14.7539C7.63098 14.1039 8.16091 13.5757 8.81749 13.5713H11.2226C11.8823 13.5713 12.4171 14.1008 12.4171 14.7539V14.7539V17.3175C12.4169 17.8694 12.8619 18.3204 13.4192 18.3334H15.0226C16.6209 18.3334 17.9166 17.0506 17.9166 15.4682V15.4682V8.19822C17.9081 7.57571 17.6129 6.99114 17.115 6.61088L11.6314 2.23777C10.6708 1.47633 9.30515 1.47633 8.34449 2.23777L2.885 6.61882C2.3852 6.99754 2.08947 7.58308 2.08331 8.20615V15.4682C2.08331 17.0506 3.37904 18.3334 4.97741 18.3334H6.58078C7.15194 18.3334 7.61496 17.875 7.61496 17.3095V17.3095" stroke="white" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
    return <SvgXml xml={xml} {...props} />
}

export default HomeIcon