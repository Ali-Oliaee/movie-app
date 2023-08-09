import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  blurView: {
    position: 'absolute',
    zIndex: 999,
    width: '100%',
    height: Platform.select({
      android: 66,
      ios: 84,
    }),
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderTopColor: 'red',
    borderTopWidth: 4,
  },
  tabButton: {
    width: '20%',
    height: Platform.select({
      android: 90,
      ios: 130,
    }),
    position: 'relative',
    zIndex: 99999,
    alignItems: 'center',
  },
});

export default styles;
