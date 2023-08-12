import React from 'react';
import Props from './types';
import BannerProps from '@components/HomeBanner/types';
import styles from './styles';
import {homeCategory} from '@utils/genres';
import AppLayout from '@layouts/AppLayout';
import RightArrowIcon from '@assets/icons/right-arrow';
import {AdsBox, HomeBanner, MovieCard} from '@components';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {movies} from '@utils/movies';

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const [activeCategory, setActiveCategory] =
    React.useState<string>('Trending');

  return (
    <AppLayout>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <ScrollView horizontal style={styles.categoryContainer}>
          {homeCategory.map(({id, title}) => (
            <TouchableOpacity
              key={id}
              style={styles.categoryItem}
              onPress={() => setActiveCategory(title)}>
              <Text
                style={[
                  styles.categoryItemText,
                  title === activeCategory && styles.categoryItemTextActive,
                ]}>
                {title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <ScrollView horizontal>
          {movies[activeCategory].map((props: BannerProps, index: number) => (
            <HomeBanner
              key={index}
              {...props}
              onPress={() => navigation.navigate('Movie')}
            />
          ))}
        </ScrollView>
        <AdsBox />
        <View style={styles.forYouBox}>
          <View style={styles.forYouBoxHeader}>
            <Text style={styles.forYouBoxHeaderText}>For You</Text>
            <TouchableOpacity style={styles.forYouBoxHeaderLinkContainer}>
              <Text style={styles.forYouBoxHeaderLink}>See All</Text>
              <RightArrowIcon />
            </TouchableOpacity>
          </View>
          <ScrollView horizontal>
            <MovieCard
              image={require('@assets/images/medellin.jpeg')}
              name="Medellin"
              kind="Movie"
            />
            <MovieCard
              image={require('@assets/images/blade-runner.png')}
              name="Blade Runner"
              kind="Movie"
            />
            <MovieCard
              image={require('@assets/images/jung_e.png')}
              name="Jung_E"
              kind="Movie"
            />
          </ScrollView>
        </View>
      </ScrollView>
    </AppLayout>
  );
};

export default HomeScreen;
