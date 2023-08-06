import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/colors';

const styles = StyleSheet.create({
  adsContainer: {
    marginTop: 30,
    width: '100%',
    height: 100,
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
    top: 20,
    left: 10,
    maxWidth: '50%',
    overflow: 'visible',
    lineHeight: 20,
    color: Colors.white,
    fontSize: 14,
    fontWeight: 'bold',
    zIndex: 3,
  },
  adsImage: {
    position: 'absolute',
    zIndex: 3,
    resizeMode: 'contain',
  },
  adsImage1: {
    width: 100,
    height: 100,
    right: -54,
    bottom: -50,
  },
  adsImage2: {
    right: 40,
    bottom: -24,
    height: 90,
    width: 100,
  },
  adsImage3: {
    right: 144,
    bottom: -50,
    width: 50,
    height: 150,
  },
  adsImage4: {
    width: 100,
    height: 100,
    right: -12,
    top: -54,
  },
  adsImage5: {
    width: 70,
    height: 140,
    right: 80,
    top: -36,
  },
  adsImage6: {
    width: 100,
    height: 100,
    right: 156,
    top: -20,
  },
});

export default styles;
