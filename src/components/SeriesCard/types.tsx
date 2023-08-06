import {ImageProps} from 'react-native';

export default interface Props {
  image: ImageProps;
  name: string;
  time: string;
  isChecked?: boolean;
}
