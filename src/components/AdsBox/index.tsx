import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';

const AdsBox: React.FC = () => {
  return (
    <View style={styles.adsContainer}>
      <Image
        source={require('../../assets/images/noise-pattern.png')}
        style={styles.noiseImage}
      />
      <Text style={styles.adsText}>
        Great news! You can now upgrade to our Pro mode at a discount of 60%
        off. Don't miss out on this limited-time offer!
      </Text>
      <Image
        source={require('../../assets/images/blade-runner.png')}
        style={[styles.adsImage, styles.adsImage1]}
      />
      <Image
        source={require('../../assets/images/budddie.png')}
        style={[styles.adsImage, styles.adsImage2]}
      />
      <Image
        source={require('../../assets/images/life.png')}
        style={[styles.adsImage, styles.adsImage3]}
      />
      <Image
        source={require('../../assets/images/revenant.png')}
        style={[styles.adsImage, styles.adsImage4]}
      />
      <Image
        source={require('../../assets/images/spider-head.png')}
        style={[styles.adsImage, styles.adsImage5]}
      />
      <Image
        source={require('../../assets/images/big4.png')}
        style={[styles.adsImage, styles.adsImage6]}
      />
    </View>
  );
};

export default AdsBox;
