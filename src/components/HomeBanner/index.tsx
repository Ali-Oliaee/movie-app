import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import Props from './types';
import Tag from '../Tag';
import LinearGradient from 'react-native-linear-gradient';

const HomeBanner: React.FC<Props> = ({
  image,
  name,
  kind,
  description,
  genres,
  year,
  age,
  rate,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1}
      onPress={onPress}>
      <Image resizeMode="cover" source={image ?? ''} style={styles.image} />
      <LinearGradient colors={['transparent', '#000']} style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.kind}>{kind}</Text>
        </View>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.tagsContainer}>
          {genres?.map((genre, index) => (
            <Tag key={index} title={genre} />
          ))}
          <Tag title={String(year ?? '')} />
          <Tag title={age ?? ''} />
          <Tag title={String(rate ?? '')} isRate />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default HomeBanner;
