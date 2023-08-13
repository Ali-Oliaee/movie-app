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
    zIndex: 9999,
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
  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    zIndex: 99,
  },
  content: {
    paddingVertical: 8,
    minHeight: 130,
    justifyContent: 'flex-end',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  kind: {
    color: Colors.white,
    fontSize: 10,
    marginStart: 4,
    marginTop: 2,
  },
  description: {
    color: Colors.white,
    fontSize: 10,
    marginVertical: 4,
    paddingHorizontal: 8,
  },
  tagsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingStart: 8,
  },
});

export default styles;
