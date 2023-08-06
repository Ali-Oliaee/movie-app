import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 120,
    height: 180,
    marginEnd: 8,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 4,
  },
  linearGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 62,
    justifyContent: 'flex-end',
  },
  name: {
    padding: 6,
    paddingBottom: 10,
    color: Colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default styles;
