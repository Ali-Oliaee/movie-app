import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 8,
    marginEnd: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  invisible: {
    display: 'none',
  },
  title: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: 'bold',
    marginEnd: 4,
  },
});

export default styles;
