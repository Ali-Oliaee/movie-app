import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 8,
    marginEnd: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  invisible: {
    display: 'none',
  },
  title: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    marginEnd: 4,
  },
});

export default styles;
