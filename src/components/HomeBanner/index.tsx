import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import Props from './types';
import Tag from '../Tag';
import LinearGradient from 'react-native-linear-gradient';
import LikeIcon from '@assets/icons/like';
import HeartFilledIcon from '@assets/icons/heartFilled';

const HomeBanner: React.FC<Props> = ({
  image,
  name,
  kind,
  description,
  genres,
  year,
  age,
  rate,
  isLiked,
  onPress,
}) => {
  const [isLike, setIsLike] = useState<boolean>(isLiked ?? false);

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1}
      onPress={onPress}>
      <TouchableOpacity
        style={styles.likeButton}
        onPress={() => setIsLike(!isLike)}>
        {isLike ? (
          <HeartFilledIcon
            style={{
              transform: [{scale: 1.3}],
            }}
          />
        ) : (
          <LikeIcon />
        )}
      </TouchableOpacity>
      <Image resizeMode="cover" source={image ?? ''} style={styles.image} />
      <LinearGradient
        colors={['rgba(0,0,0,0.0)', '#000']}
        style={styles.content}>
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
