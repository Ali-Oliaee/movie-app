import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import Props from './types';

const ActorCard: React.FC<Props> = ({image, name}) => {
  return (
    <View style={styles.container}>
      <Image resizeMode="cover" source={image ?? ''} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default ActorCard;
