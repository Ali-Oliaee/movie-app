import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import styles from './styles';
import AppLayout from '@layouts/AppLayout';
import RightArrowIcon from '@assets/icons/right-arrow';
import {ActorCard} from '@components/index';
import SearchInput from '@components/SearchInput';
import FilterIcon from '@assets/icons/filterIcon';
import MovieCard from '@components/MovieCard';
import {appCategory} from '@utils/genres';
import CategoryTag from '@components/CategoryTag';

const SearchScreen: React.FC = () => {
  const [searchKey, setSearchKey] = React.useState<string>('');

  return (
    <AppLayout>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <SearchInput value={searchKey} onChange={setSearchKey} />
          <TouchableOpacity style={styles.filterButton}>
            <FilterIcon />
          </TouchableOpacity>
        </View>
        <View style={styles.sectionContainer}>
          <View style={styles.row}>
            <Text style={styles.rowTitle}>Recent Search</Text>
            <TouchableOpacity style={styles.LinkContainer}>
              <Text style={styles.Link}>See All</Text>
              <RightArrowIcon />
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <MovieCard
              name="Blade Runner 2049"
              kind="Movie"
              image={require('@assets/images/blade-runner.png')}
            />
            <MovieCard
              name="The Revenant"
              image={require('@assets/images/revenant.png')}
              kind="Movie"
            />
            <MovieCard
              name="The Big 4"
              image={require('@assets/images/big4.png')}
              kind="TV"
            />
          </ScrollView>
        </View>
        <View style={styles.sectionContainer}>
          <View style={styles.row}>
            <Text style={styles.rowTitle}>Categories</Text>
            <TouchableOpacity style={styles.LinkContainer}>
              <Text style={styles.Link}>See All</Text>
              <RightArrowIcon />
            </TouchableOpacity>
          </View>
          <View style={styles.tagsContainer}>
            {appCategory.map(
              ({title, number, id}) =>
                id <= 11 && (
                  <CategoryTag key={id} title={title} number={number} />
                ),
            )}
          </View>
        </View>
        <View style={styles.sectionContainer}>
          <View style={styles.row}>
            <Text style={styles.rowTitle}>Based on actor</Text>
            <TouchableOpacity style={styles.LinkContainer}>
              <Text style={styles.Link}>See All</Text>
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
        <View style={styles.sectionContainer}>
          <View style={styles.row}>
            <Text style={styles.rowTitle}>Popular search</Text>
            <TouchableOpacity style={styles.LinkContainer}>
              <Text style={styles.Link}>See All</Text>
              <RightArrowIcon />
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <MovieCard
              name="Blade Runner 2049"
              kind="Movie"
              image={require('@assets/images/blade-runner.png')}
            />
            <MovieCard
              name="The Revenant"
              image={require('@assets/images/revenant.png')}
              kind="Movie"
            />
            <MovieCard
              name="The Big 4"
              image={require('@assets/images/big4.png')}
              kind="TV"
            />
          </ScrollView>
        </View>
      </ScrollView>
    </AppLayout>
  );
};

export default SearchScreen;
