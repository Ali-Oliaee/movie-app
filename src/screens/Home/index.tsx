import React from 'react';
import Props from './types';
import styles from './styles';
import {homeCategory} from '@utils/genres';
import AppLayout from '@layouts/AppLayout';
import RightArrowIcon from '@assets/icons/right-arrow';
import {AdsBox, HomeBanner, MovieCard} from '@components';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const [activeCategory, setActiveCategory] = React.useState<number>(1);

  return (
    <AppLayout>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <ScrollView horizontal style={styles.categoryContainer}>
          {homeCategory.map(({id, title}) => (
            <TouchableOpacity
              key={id}
              style={styles.categoryItem}
              onPress={() => setActiveCategory(id)}>
              <Text
                style={[
                  styles.categoryItemText,
                  id === activeCategory && styles.categoryItemTextActive,
                ]}>
                {title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <ScrollView horizontal>
          <HomeBanner
            image={require('@assets/images/jung_e.png')}
            name="Jung_E"
            kind="Movie"
            description="This riveting sci-fi action-drama from “Hellbound” director Yeon Sang-ho stars Kang Soo-youn, Kim Hyun-joo and Ryu Kyung-soo."
            genres={['Action', 'Sci-fi']}
            year={2023}
            age="+13"
            rate={6.8}
            onPress={() => navigation.navigate('Movie')}
          />
          <HomeBanner
            image={require('@assets/images/oppenheimer.png')}
            name="Oppenheimer"
            kind="Movie"
            description="J. Robert Oppenheimer led a team of scientists on the Manhattan World War II, resulting in the world's the first nuclear explosion."
            genres={['Thriller', 'Drama']}
            year={2023}
            age="+15"
            isLiked
            rate={8.8}
            onPress={() => navigation.navigate('Movie')}
          />
          <HomeBanner
            image={require('@assets/images/medellin.jpeg')}
            name="Medellin"
            kind="Movie"
            description="In order to save his younger brother from the hands of narcos, Reda gathers a team to raid the kidnappers in Medellín, Colombia."
            genres={['Action', 'Drama']}
            year={2023}
            age="+18"
            rate={7.1}
            onPress={() => navigation.navigate('Movie')}
          />
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
