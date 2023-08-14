import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Props from './types';
import styles from './styles';
import AppLayout from '@layouts/AppLayout';
import LinearGradient from 'react-native-linear-gradient';
import RightArrowIcon from '@assets/icons/right-arrow';
import LikeIcon from '@assets/icons/like';
import {ActorCard, Tag, SeriesCard} from '@components/index';
import PlayIcon from '@assets/icons/play';
import CheckIcon from '@assets/icons/check';
import CancelIcon from '@assets/icons/cancel';
import BellIcon from '@assets/icons/bell';
import HeartFilledIcon from '@assets/icons/heartFilled';

const MovieScreen: React.FC<Props> = ({navigation}) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  return (
    <AppLayout>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.backButton} onPress={navigation.goBack}>
          <RightArrowIcon />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.likeButton}
          onPress={() => setIsLiked(!isLiked)}>
          {isLiked ? (
            <HeartFilledIcon
              style={{
                transform: [{scale: 1.3}],
              }}
            />
          ) : (
            <LikeIcon />
          )}
        </TouchableOpacity>
        <View style={styles.bannerContainer}>
          <LinearGradient
            colors={['rgba(0,0,0,0.5)', 'rgba(0,0,0,0.0)']}
            style={styles.linearGradientTop}
          />
          <Image
            source={require('@assets/images/silo.png')}
            style={styles.banner}
          />
          <View style={styles.bannerContent}>
            <View>
              <View style={styles.titleContainer}>
                <Text style={styles.bannerTitle}>Silo</Text>
                <View style={styles.titleDot} />
                <Text style={styles.bannerTitle}>TV Series</Text>
                <View style={styles.titleDot} />
                <Text style={styles.bannerTitle}>Apple TV+</Text>
              </View>
              <View style={styles.bannerTags}>
                <Tag title="Sci-fi" />
                <Tag title="2023" />
                <Tag title="+17" />
                <Tag title="8.1" isRate />
              </View>
              <TouchableOpacity style={styles.playButton}>
                <PlayIcon style={styles.playButtonIcon} />
                <Text style={styles.playButtonText}>Continue Watching</Text>
              </TouchableOpacity>
            </View>
            <View>
              <View style={styles.seasonTag}>
                <Text style={styles.seasonTagText}>Season 1</Text>
                <TouchableOpacity style={styles.seasonTagButton}>
                  <CheckIcon style={styles.icon} />
                </TouchableOpacity>
              </View>
              <View style={styles.tag2container}>
                <View style={styles.tagContent}>
                  <Text style={styles.seasonTagText}>Season 2</Text>
                  <TouchableOpacity style={styles.seasonTagButton}>
                    <CancelIcon style={styles.icon} />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.bellButton}>
                  <BellIcon style={styles.bellIcon} />
                  <Text style={styles.seasonTagText}>Season 2</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <LinearGradient
            colors={['rgba(0,0,0,0)', '#000']}
            style={styles.linearGradientBottom}
          />
        </View>
        <Text style={styles.description}>
          In a ruined and toxic future, a community exists in a giant
          underground silo that plunges hundreds of stories deep; there, people
          live in a society full of regulations they believe are meant to
          protect them.
        </Text>
        <View style={styles.episodeContainer}>
          <View style={styles.row}>
            <View style={styles.flexRow}>
              <Text style={styles.rowTitle}>Season 1</Text>
              <Text style={styles.rowSubtitle}>10/10 Episode</Text>
            </View>
            <TouchableOpacity style={styles.castLinkContainer}>
              <Text style={styles.castLink}>See All</Text>
              <RightArrowIcon />
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <SeriesCard
              name="Season 1 - Episode 1"
              image={require('@assets/images/dicaprio.png')}
              time="43 min"
              isChecked
            />
            <SeriesCard
              name="Season 1 - Episode 2"
              image={require('@assets/images/dicaprio.png')}
              time="50 min"
              isChecked
            />
            <SeriesCard
              name="Season 1 - Episode 3"
              image={require('@assets/images/dicaprio.png')}
              time="39 min"
              isChecked
            />
          </ScrollView>
        </View>
        <View style={styles.castContainer}>
          <View style={styles.row}>
            <Text style={styles.rowTitle}>Cast</Text>
            <TouchableOpacity style={styles.castLinkContainer}>
              <Text style={styles.castLink}>See All</Text>
              <RightArrowIcon />
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <ActorCard
              name="Leonardo DiCaprio"
              image={require('@assets/images/dicaprio.png')}
            />
            <ActorCard
              name="Scarlett Johansson"
              image={require('@assets/images/scarlett-johansson.png')}
            />
            <ActorCard
              name="George Clooney"
              image={require('@assets/images/george-clooney.png')}
            />
            <ActorCard
              name="Johnny Depp"
              image={require('@assets/images/johnny-depp.jpg')}
            />
          </ScrollView>
        </View>
      </ScrollView>
    </AppLayout>
  );
};

export default MovieScreen;
