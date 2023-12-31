import React from 'react';
import Props from './types';
import styles from './styles';
import {Image, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ActorCard: React.FC<Props> = ({image, name}) => {
  return (
    <View style={styles.container}>
      <Image resizeMode="cover" source={image} style={styles.image} />
      <LinearGradient
        colors={['rgba(0,0,0,0.0)', '#000']}
        style={styles.linearGradient}>
        <Text style={styles.name}>{name}</Text>
      </LinearGradient>
    </View>
  );
};

export default ActorCard;
