import React from 'react';
import Props from './types';
import styles from './styles';
import CheckIcon from '../../assets/icons/check';
import LinearGradient from 'react-native-linear-gradient';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import CancelIcon from '../../assets/icons/cancel';

const SeriesCard: React.FC<Props> = ({
  image,
  name,
  time,
  isChecked = false,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.checkButton}>
        {isChecked ? (
          <CheckIcon style={styles.icon} />
        ) : (
          <CancelIcon style={styles.icon} />
        )}
      </TouchableOpacity>
      <Image resizeMode="cover" source={image} style={styles.image} />
      <LinearGradient
        colors={['rgba(0,0,0,0.0)', '#000']}
        style={styles.linearGradient}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.time}>{time}</Text>
      </LinearGradient>
    </View>
  );
};

export default SeriesCard;
