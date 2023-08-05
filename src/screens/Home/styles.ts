import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/colors';

const styles = StyleSheet.create({
  categoryContainer: {
    marginVertical: 20,
  },
  categoryItem: {
    padding: 10,
    marginHorizontal: 6,
  },
  categoryItemText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
    fontWeight: 'bold',
  },
  categoryItemTextActive: {
    color: Colors.white,
  },
});

export default styles;
