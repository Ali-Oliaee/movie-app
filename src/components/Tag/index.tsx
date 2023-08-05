import React from 'react';
import Props from './types';
import styles from './styles';
import {Text, View} from 'react-native';
import ImdbIcon from '../../assets/icons/ImdbIcon';

const Tag: React.FC<Props> = ({title, isRate}) => {
  return (
    <View style={[styles.container, !title && styles.invisible]}>
      <Text style={styles.title}>{title}</Text>
      {isRate && <ImdbIcon style={styles.rateIcon} />}
    </View>
  );
};

export default Tag;
