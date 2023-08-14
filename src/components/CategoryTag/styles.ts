import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: 'rgba(257,257,257,0.1))',
    borderRadius: 4,
    marginEnd: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: 140,
  },
  invisible: {
    display: 'none',
  },
  title: {
    color: Colors.white,
    fontSize: 12,
  },
  number: {
    marginStart: 8,
    color: 'rgba(255,255,255,0.6)',
    fontSize: 10,
  },
});

export default styles;
