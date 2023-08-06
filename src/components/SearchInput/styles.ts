import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    backgroundColor: 'rgba(257,257,257,0.1)',
    borderRadius: 4,
    marginEnd: 10,
    marginBottom: 6,
    flexDirection: 'row',
    alignItems: 'center',
    height: 46,
  },
  icon: {
    marginEnd: 8,
  },
  input: {
    flex: 1,
    color: Colors.white,
    fontSize: 16,
  },
});

export default styles;
