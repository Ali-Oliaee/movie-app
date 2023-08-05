import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 250,
    height: 400,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  content: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  kind: {
    color: '#fff',
    fontSize: 10,
    marginStart: 10,
    marginTop: 2,
  },
  description: {
    color: '#fff',
    fontSize: 10,
    marginVertical: 4,
  },
});

export default styles;
