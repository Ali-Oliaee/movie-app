import React from 'react';
import styles from './styles';
import {homeCategory} from '../../utils/genres';
import AppLayout from '../../layouts/AppLayout';
import RightArrowIcon from '../../assets/icons/right-arrow';
import {AdsBox, HomeBanner, MovieCard} from '../../components';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';

const MovieScreen: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState<number>(1);

  return <AppLayout />;
};

export default MovieScreen;
