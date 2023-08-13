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
  },
  tabButton: {
    width: '20%',
    height: Platform.select({
      android: 133,
      ios: 170,
    }),
    position: 'relative',
    zIndex: 99999,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.3)',
    alignItems: 'center',
    paddingTop: 20,
  },
});

export default styles;
