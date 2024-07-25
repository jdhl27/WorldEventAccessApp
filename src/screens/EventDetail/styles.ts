import {StyleSheet} from 'react-native';
import light from '../../theme/light';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  eventDetailContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginVertical: 20,
  },
  eventName: {
    fontFamily: 'Gilroy-Bold',
    fontSize: 24,
    color: light.text,
    marginBottom: 10,
  },
  eventOrganizer: {
    fontFamily: 'Gilroy-Light',
    fontSize: 16,
    color: light.text,
    marginBottom: 5,
  },
  eventDate: {
    fontFamily: 'Gilroy-Bold',
    fontSize: 16,
    color: light.text,
    marginBottom: 10,
  },
  eventDescription: {
    fontFamily: 'Gilroy-Light',
    fontSize: 16,
    color: light.text,
    marginBottom: 5,
    textAlign: 'justify',
  },
  eventParkingOptions: {
    fontFamily: 'Gilroy-Medium',
    fontSize: 16,
    textDecorationLine: 'underline',
    marginTop: 10,
  },
  eventPrice: {
    fontFamily: 'Gilroy-Bold',
    fontSize: 26,
    color: light.primary,
    marginBottom: 10,
  },
  eventAddress: {
    fontFamily: 'Gilroy-Bold',
    fontSize: 18,
    color: light.warning,
    marginBottom: 10,
  },
  parkingOptionsContainer: {
    marginVertical: 10,
  },
  buttonPay: {
    marginVertical: 40,
    width: 180,
  },
});
