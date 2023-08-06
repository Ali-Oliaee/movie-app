import React from 'react';
import Props from './types';
import styles from './styles';
import {TextInput, View} from 'react-native';
import SearchIcon from '../../assets/icons/searchIcon';
import {Colors} from '../../theme/colors';

const SearchInput: React.FC<Props> = ({value, onChange}) => {
  return (
    <View style={styles.container}>
      <SearchIcon style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor="rgba(255, 255, 255, 0.7)"
        value={value}
        onChangeText={onChange}
        cursorColor={Colors.white}
      />
    </View>
  );
};

export default SearchInput;
