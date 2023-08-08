import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 140,
    height: 220,
    marginEnd: 8,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 4,
    resizeMode: 'cover',
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
    paddingStart: 6,
    color: Colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
  kind: {
    paddingStart: 6,
    color: Colors.white,
    paddingBottom: 10,
    fontSize: 10,
  },
});

export default styles;
