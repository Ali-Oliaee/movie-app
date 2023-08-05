import React from 'react';
import Props from './types';
import styles from './styles';
import {StatusBar, View} from 'react-native';
import {Colors} from '../../theme/colors';

const AppLayout: React.FC<Props> = ({children}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.backgroundColor}
      />
      {children}
    </View>
  );
};

export default AppLayout;
