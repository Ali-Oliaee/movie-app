import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 2,
    paddingHorizontal: 6,
    backgroundColor: 'rgba(257,257,257,0.2)',
    borderRadius: 4,
    marginEnd: 6,
    marginBottom: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  invisible: {
    display: 'none',
  },
  title: {
    color: Colors.white,
    fontSize: 10,
  },
  rateIcon: {
    marginStart: 6,
  },
});

export default styles;
