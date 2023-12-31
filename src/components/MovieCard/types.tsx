import {ImageProps} from 'react-native';

export default interface Props {
  image: ImageProps;
  name: string;
  kind: 'Movie' | 'TV' | 'Anime' | 'Documentary' | 'Short' | 'Music Video';
}
