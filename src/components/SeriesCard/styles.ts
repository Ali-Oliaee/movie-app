import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 200,
    height: 140,
    marginEnd: 8,
  },
  checkButton: {
    position: 'absolute',
    top: 8,
    right: 10,
    zIndex: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  icon: {
    transform: [{scale: 1.6}],
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
    paddingStart: 6,
    color: Colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
  time: {
    paddingStart: 6,
    color: Colors.white,
    paddingBottom: 10,
    fontSize: 10,
  },
});

export default styles;
