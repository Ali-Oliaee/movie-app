import React from 'react';
import {Text, View} from 'react-native';
import {HomeBanner} from '../../components';

const HomeScreen: React.FC = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <HomeBanner />
    </View>
  );
};

export default HomeScreen;
