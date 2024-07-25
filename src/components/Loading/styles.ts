import {StyleSheet} from 'react-native';
import light from '../../theme/light';

export const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: light?.background,
  },
  loading: {
    width: 200,
    height: 200,
  },
});
