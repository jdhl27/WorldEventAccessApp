import {Platform, StyleSheet} from 'react-native';
import light from '../../theme/light';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: light?.background,
    backgroundColor: light?.background,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: Platform.OS === 'ios' ? 15 : 5,
    marginVertical: 10,
  },

  input: {
    flex: 1,
    fontFamily: 'Gilroy-Medium',
    letterSpacing: 1,
    fontSize: 16,
    marginLeft: 10,
    color: light?.text,
  },

  textError: {
    fontFamily: 'Gilroy-Light',
    fontSize: 14,
    color: light?.error,
  },
});
