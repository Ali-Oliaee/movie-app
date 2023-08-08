import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 280,
    height: 480,
    marginHorizontal: 10,
  },
  likeButton: {
    position: 'absolute',
    zIndex: 99,
    right: 12,
    top: 12,
    backgroundColor: 'rgba(257,257,257,0.5)',
    borderRadius: 8,
    width: 38,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  content: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.2)',
    minHeight: 170,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  kind: {
    color: Colors.white,
    fontSize: 10,
    marginStart: 10,
    marginTop: 2,
  },
  description: {
    color: Colors.white,
    fontSize: 12,
    marginVertical: 4,
  },
  tagsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});

export default styles;
