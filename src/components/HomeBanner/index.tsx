import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import styles from './styles';
import Props from './types';
import Tag from '../Tag';

const HomeBanner: React.FC<Props> = ({
  image,
  name,
  kind,
  description,
  genres,
  year,
  age,
  rate,
}) => {
  return (
    <View style={styles.container}>
      <Image resizeMode="cover" source={image ?? ''} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.kind}>{kind}</Text>
        </View>
        <Text style={styles.description}>{description}</Text>
        <ScrollView horizontal>
          {genres?.map((genre, index) => (
            <Tag key={index} title={genre} />
          ))}
          <Tag title={String(year ?? '')} />
          <Tag title={age ?? ''} />
          <Tag title={String(rate ?? '')} isRate />
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeBanner;
