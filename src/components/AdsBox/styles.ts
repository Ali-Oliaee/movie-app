import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/colors';

const styles = StyleSheet.create({
  adsContainer: {
    marginTop: 30,
    width: '100%',
    height: 104,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    position: 'relative',
    overflow: 'hidden',
  },
  noiseImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    zIndex: 2,
  },
  adsText: {
    position: 'absolute',
    maxWidth: '54%',
    height: '100%',
    lineHeight: 20,
    color: Colors.white,
    fontSize: 12,
    top: 8,
    left: 8,
    fontWeight: 'bold',
    zIndex: 3,
  },
  adsImage: {
    position: 'absolute',
    zIndex: 3,
    resizeMode: 'contain',
  },
  adsImage1: {
    width: 80,
    height: 80,
    right: -54,
    bottom: -30,
  },
  adsImage2: {
    right: 24,
    bottom: -6,
    height: 50,
    width: 80,
  },
  adsImage3: {
    right: 112,
    bottom: -30,
    width: 50,
    height: 100,
  },
  adsImage4: {
    width: 50,
    height: 50,
    right: -12,
    top: 0,
  },
  adsImage5: {
    width: 70,
    height: 100,
    right: 40,
    top: -36,
  },
  adsImage6: {
    width: 100,
    height: 72,
    right: 90,
    top: -20,
  },
});

export default styles;
