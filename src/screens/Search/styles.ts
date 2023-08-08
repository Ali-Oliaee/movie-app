import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 60,
    marginHorizontal: 10,
  },
  filterButton: {
    backgroundColor: 'rgba(257,257,257,0.1)',
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 12,
    alignContent: 'center',
    justifyContent: 'center',
    height: 40,
  },
  sectionContainer: {
    marginHorizontal: 12,
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  rowTitle: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  LinkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Link: {
    fontSize: 12,
    color: Colors.white,
    marginRight: 6,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default styles;
