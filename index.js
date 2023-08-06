import App from './src/App';
import {Fonts} from './src/theme/fonts';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {setCustomText} from 'react-native-global-props';

const customTextProps = {style: {color: 'white'}};
setCustomText(customTextProps);

AppRegistry.registerComponent(appName, () => App);
