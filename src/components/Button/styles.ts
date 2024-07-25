import {TextStyle, ViewStyle} from 'react-native';
import light from '../../theme/light';

const container: ViewStyle = {
  width: '100%',
  alignItems: 'center',
  paddingVertical: 15,
  borderWidth: 1,
  borderColor: light.primary,
  borderRadius: 10,
  backgroundColor: light.primary,
};

const text = (disabled: boolean): TextStyle => ({
  fontFamily: 'Gilroy-Bold',
  fontSize: 19,
  letterSpacing: 1,
  color: disabled ? '#aaa' : '#fff',
});

export const styles = {
  container,
  text,
};
