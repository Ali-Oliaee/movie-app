import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {AdsBox, HomeBanner} from '../../components';
import AppLayout from '../../layouts/AppLayout';
import {homeCategory} from '../../utils/genres';
import styles from './styles';

const HomeScreen: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState<number>(1);

  return (
    <AppLayout>
      <ScrollView style={{flex: 1, height: 1000}}>
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
        <AdsBox />
      </ScrollView>
    </AppLayout>
  );
};

export default HomeScreen;
