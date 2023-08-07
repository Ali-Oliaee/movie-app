import React from 'react';
import {Text} from 'react-native';
import {Fonts} from './theme/fonts';
import {Colors} from './theme/colors';
import MainNavigator from './navigation';
import setDefaultProps from 'react-native-simple-default-props';

const App: React.FC = () => {
  const defaultText = {
    style: [{color: Colors.white}, {fontFamily: Fonts.regular}],
  };
  setDefaultProps(Text, defaultText);

  return <MainNavigator />;
};

export default App;
