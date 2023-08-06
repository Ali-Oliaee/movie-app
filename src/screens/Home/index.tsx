import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {ActorCard, HomeBanner} from '../../components';
import AppLayout from '../../layouts/AppLayout';
import {homeCategory, appCategory} from '../../utils/genres';
import styles from './styles';
import MovieCard from '../../components/MovieCard';
import CategoryTag from '../../components/CategoryTag';
import SearchIconFilled from '../../assets/icons/searchIconFilled';
import SearchInput from '../../components/SearchInput';

const HomeScreen: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState<number>(1);
  const [searchKey, setSearchKey] = React.useState<string>('');

  return (
    <AppLayout>
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
          image={require('../../assets/images/oppenheimer.png')}
          name="Oppenheimer"
          kind="Movie"
          description="J. Robert Oppenheimer led a team of scientists on the Manhattan World War II, resulting in the world's the first nuclear explosion on July 16, 1945."
          genres={['Thriller', 'Drama']}
          year={2023}
          age="+15"
          rate={8.8}
        />
        <HomeBanner
          image={require('../../assets/images/jung_e.png')}
          name="Jung_E"
          kind="Movie"
          description="This riveting sci-fi action-drama from “Hellbound” director Yeon Sang-ho stars Kang Soo-youn, Kim Hyun-joo and Ryu Kyung-soo."
          genres={['Action', 'Sci-fi']}
          year={2023}
          age="+13"
          rate={6.8}
        />
        <HomeBanner
          image={require('../../assets/images/medellin.jpeg')}
          name="Medellin"
          kind="Movie"
          description="In order to save his younger brother from the hands of narcos, Reda gathers a team to raid the kidnappers in Medellín, Colombia."
          genres={['Action', 'Drama']}
          year={2023}
          age="+18"
          rate={7.1}
        />
      </ScrollView>
      {/* <ScrollView horizontal>
        <MovieCard
          image={require('../../assets/images/blade-runner.png')}
          name="Blade Runner 2049"
          kind="Movie"
        />
        <MovieCard
          image={require('../../assets/images/revenant.png')}
          name="The Revenant"
          kind="Movie"
        />
      </ScrollView> */}
      <SearchInput value={searchKey} onChange={setSearchKey} />
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        {appCategory.map(
          ({id, title, number}) =>
            id <= 11 && <CategoryTag key={id} title={title} number={number} />,
        )}
      </View>

      {/* <ScrollView horizontal>
        <ActorCard
          image={require('../../assets/images/dicaprio.png')}
          name="Leonardo DiCaprio"
        />
        <ActorCard
          image={require('../../assets/images/scarlett-johansson.png')}
          name="Scarlett Johansson"
        />
        <ActorCard
          image={require('../../assets/images/george-clooney.png')}
          name="George Clooney"
        />
        <ActorCard
          image={require('../../assets/images/johnny-depp.jpg')}
          name="Johnny Depp"
        />
      </ScrollView> */}
    </AppLayout>
  );
};

export default HomeScreen;
