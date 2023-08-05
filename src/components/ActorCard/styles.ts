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
  name: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    padding: 6,
    color: Colors.white,
    fontSize: 12,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

export default styles;
