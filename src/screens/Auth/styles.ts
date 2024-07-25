import {StyleSheet} from 'react-native';
import light from '../../theme/light';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  gradient: {
    flex: 1,
    justifyContent: 'center',
  },

  containerForm: {
    paddingHorizontal: 25,
    marginTop: 50,
  },

  containerLogoWEA: {
    position: 'absolute',
    top: 100,
    left: 140,
  },

  logoWEA: {
    alignSelf: 'center',
    width: 130,
    resizeMode: 'contain',
  },

  textTitle: {
    fontFamily: 'Gilroy-Bold',
    color: light.text,
    fontSize: 27,
    marginBottom: 30,
    textAlign: 'center',
  },

  buttonLogin: {
    marginVertical: 40,
  },

  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});
