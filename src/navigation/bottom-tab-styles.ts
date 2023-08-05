import {StyleSheet} from 'react-native';
import {Colors} from '../theme/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.backgroundColor,
    maxHeight: 90,
    padding: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tabButton: {
    width: '20%',
    maxHeight: 35,
    alignItems: 'center',
  },
});

export default styles;
