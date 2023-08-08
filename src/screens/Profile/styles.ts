import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    justifyContent: 'space-between',
    flex: 1,
  },
  header: {
    alignItems: 'center',
    marginTop: 50,
  },
  headerImage: {
    width: 120,
    height: 120,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: Colors.white,
  },
  body: {
    flex: 1,
    padding: 18,
    marginTop: 30,
  },
  field: {
    marginVertical: 10,
  },
  label: {
    fontSize: 14,
    color: 'rgba(257,257,257,0.7)',
  },
  value: {
    fontSize: 16,
    color: Colors.white,
    paddingVertical: 5,
  },
});

export default styles;
