import {StyleSheet} from 'react-native';
import light from '../../theme/light';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logout: {
    zIndex: 10,
    position: 'absolute',
    top: 70,
    right: 20,
  },
  logoutImage: {
    width: 30,
    height: 30,
  },
  containerLogoWEA: {
    padding: 20,
  },
  logoWEA: {
    alignSelf: 'center',
  },
  title: {
    fontFamily: 'Gilroy-Bold',
    fontSize: 24,
    color: light.text,
    margin: 20,
  },
  input: {
    borderColor: light.grayText,
    marginHorizontal: 30,
  },
  eventList: {
    paddingBottom: 20,
  },
  eventContainer: {
    flexDirection: 'row',
    paddingVertical: 40,
    paddingHorizontal: 20,
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: light.border,
  },
  logo: {
    width: 90,
    height: 90,
  },
  eventInfo: {
    width: 230,
  },
  eventName: {
    fontFamily: 'Gilroy-Bold',
    fontSize: 18,
    color: light.text,
  },
  eventOrganizer: {
    fontFamily: 'Gilroy-Light',
    fontSize: 14,
    color: light.text,
  },
  eventDate: {
    fontFamily: 'Gilroy-Medium',
    fontSize: 18,
    color: light.grayText,
    marginVertical: 10,
  },
  eventPrice: {
    fontFamily: 'Gilroy-Bold',
    fontSize: 22,
    color: light.primary,
  },
  eventParkingOptionsButton: {
    alignSelf: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 7,
    marginVertical: 8,
  },
  eventParkingOptions: {
    fontFamily: 'Gilroy-Medium',
    fontSize: 16,
    textDecorationLine: 'underline',
    marginLeft: 7,
    color: '#000',
  },
  logoParking: {
    width: 23,
    height: 23,
  },

  empty: {
    width: 200,
    height: 200,
  },
});
