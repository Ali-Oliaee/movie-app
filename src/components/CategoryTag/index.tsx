import React from 'react';
import Props from './types';
import styles from './styles';
import {Text, View} from 'react-native';

const CategoryTag: React.FC<Props> = ({title, number}) => {
  return (
    <View style={[styles.container, !title && styles.invisible]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.number}>{number ?? 0}</Text>
    </View>
  );
};

export default CategoryTag;
