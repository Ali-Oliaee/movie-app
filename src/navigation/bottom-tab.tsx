import React from 'react';
import {Colors} from '../theme/colors';
import styles from './bottom-tab-styles';
import SearchScreen from '@screens/Search';
import HomeIcon from '../assets/icons/homeIcon';
import HeartIcon from '../assets/icons/heartIcon';
import SearchIcon from '../assets/icons/searchIcon';
import {TouchableOpacity, View} from 'react-native';
import {HomeScreen, ProfileScreen} from '../screens';
import ProfileIcon from '../assets/icons/profileIcon';
import {BlurView} from '@react-native-community/blur';
import CategoryIcon from '../assets/icons/categoryIcon';
import RightArrowIcon from '../assets/icons/right-arrow';
import HomeIconFilled from '../assets/icons/homeIconFilled';
import HeartIconFilled from '../assets/icons/heartIconFilled';
import ProfileIconFilled from '../assets/icons/profileIconFilled';
import CategoryIconFilled from '../assets/icons/categoryIconFilled';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomTab: React.FC = () => {
  const screenOptions = {
    headerShown: false,
    tabBarLabel: '',
    tabBarStyle: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      borderTopWidth: 0,
      position: 'absolute',
      bottom: 20,
      height: 60,
    },
  };

  const iconRenderer = ({active, name}: {name: string; active: boolean}) => {
    return name === 'Home' ? (
      active ? (
        <HomeIconFilled />
      ) : (
        <HomeIcon />
      )
    ) : name === 'Search' ? (
      <SearchIcon color={active ? Colors.white : Colors.black} />
    ) : name === 'Likes' ? (
      active ? (
        <HeartIconFilled />
      ) : (
        <HeartIcon />
      )
    ) : name === 'Profile' ? (
      active ? (
        <ProfileIconFilled />
      ) : (
        <ProfileIcon />
      )
    ) : name === 'Category' ? (
      active ? (
        <CategoryIconFilled />
      ) : (
        <CategoryIcon />
      )
    ) : (
      <></>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={screenOptions as any}
      tabBar={props => {
        if (props.state.index !== 1) {
          return (
            <View style={styles.container}>
              <BlurView
                style={styles.blurView}
                blurType="dark"
                blurAmount={70}
                overlayColor="transparent"
              />
              {[...Array(5)].map((el, index) => (
                <TouchableOpacity
                  key={`${index}route`}
                  style={styles.tabButton}
                  disabled={
                    props.state.routeNames[index] === 'Likes' ||
                    props.state.routeNames[index] === 'Chats'
                  }
                  onPress={() =>
                    props.navigation.navigate(props.state.routeNames[index])
                  }>
                  {iconRenderer({
                    name: props.state.routeNames[index],
                    active: index === props.state.index,
                  })}
                </TouchableOpacity>
              ))}
            </View>
          );
        }
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Category" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Likes" component={HomeScreen} />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={props => ({
          headerShown: true,
          headerTitle: 'Profile',
          headerTitleStyle: {
            color: Colors.white,
            fontSize: 22,
            marginTop: 2,
          },
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: Colors.backgroundColor,
            shadowColor: 'transparent',
          },
          headerLeft: () => (
            <TouchableOpacity>
              <RightArrowIcon
                onPress={props.navigation.goBack}
                style={{
                  transform: [{rotate: '180deg'}, {scale: 2}],
                  marginLeft: 20,
                }}
              />
            </TouchableOpacity>
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
