import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 20,
    zIndex: 20,
    transform: [{rotate: '180deg'}, {scale: 2}],
  },
  likeButton: {
    position: 'absolute',
    top: 60,
    right: 20,
    zIndex: 20,
  },
  bannerContainer: {
    height: 500,
    width: '100%',
    position: 'relative',
  },
  banner: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  bannerContent: {
    position: 'absolute',
    bottom: 30,
    zIndex: 20,
    marginHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '94%',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleDot: {
    width: 4,
    height: 4,
    borderRadius: 100,
    backgroundColor: Colors.white,
    marginHorizontal: 4,
    marginTop: 2,
  },
  bannerTitle: {
    color: Colors.white,
    fontSize: 17,
    fontWeight: 'bold',
  },
  bannerTags: {
    flexDirection: 'row',
    marginTop: 10,
  },
  playButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
  },
  playButtonIcon: {
    transform: [{scale: 1.4}],
    resizeMode: 'contain',
    marginRight: 6,
  },
  playButtonText: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  seasonTag: {
    marginTop: 8,
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 8,
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
  },
  seasonTagText: {
    color: Colors.white,
    fontSize: 12,
    marginEnd: 6,
  },
  tagContent: {
    flexDirection: 'row',
  },
  seasonTagButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  tag2container: {
    marginTop: 4,
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
  },
  bellButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    paddingVertical: 6,
  },
  bellIcon: {
    transform: [{scale: 1.2}],
    marginRight: 4,
  },
  icon: {
    transform: [{scale: 1.4}],
  },
  linearGradientTop: {
    width: '100%',
    height: 150,
    position: 'absolute',
    top: 0,
    zIndex: 10,
  },
  linearGradientBottom: {
    width: '100%',
    height: 180,
    position: 'absolute',
    bottom: 0,
    zIndex: 10,
  },
  description: {
    color: Colors.white,
    marginHorizontal: 12,
    fontSize: 14,
  },
  castContainer: {
    marginHorizontal: 12,
    marginTop: 20,
  },
  episodeContainer: {
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
  rowSubtitle: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 12,
    marginStart: 8,
    marginTop: 2,
  },
  castLinkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  castLink: {
    fontSize: 12,
    color: Colors.white,
    marginRight: 6,
  },
});

export default styles;
