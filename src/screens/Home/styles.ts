import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/colors';
import {Fonts} from '../../theme/fonts';

const styles = StyleSheet.create({
  categoryContainer: {
    marginTop: 30,
    marginBottom: 20,
  },
  categoryItem: {
    paddingHorizontal: 10,
    marginHorizontal: 6,
  },
  categoryItemText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
    fontFamily: Fonts.bold,
  },
  categoryItemTextActive: {
    color: Colors.white,
  },
  forYouBox: {
    marginHorizontal: 12,
    marginTop: 20,
  },
  forYouBoxHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  forYouBoxHeaderText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  forYouBoxHeaderLinkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  forYouBoxHeaderLink: {
    fontSize: 12,
    color: Colors.white,
    marginRight: 6,
  },
});

export default styles;
