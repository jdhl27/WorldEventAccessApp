import React, {useState, useEffect} from 'react';
import {View, Text, Image, SafeAreaView, ScrollView, Alert} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '../../navigation';
import {getEventById, Event} from '../../api/events';
import LoadingComponent from '../../components/Loading/Loading';
import {styles} from './styles';
import ParkingTable from '../../components/ParkingTable/ParkingTable';
import ButtonComponent from '../../components/Button/Button';

type EventDetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'EventDetail'
>;

const EventDetailScreen: React.FC<EventDetailScreenProps> = ({route}) => {
  const {id} = route.params;
  const [event, setEvent] = useState<Event | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const eventData = await getEventById(id);
        setEvent(eventData);
      } catch (error) {
        console.error('Error fetching event details:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEventDetails();
  }, [id]);

  const parkingOptions = [
    {
      option: 'Free Parking',
      applies: event?.hasFreeParking ?? false,
      value: 0,
    },
    {
      option: 'Standard Parking',
      applies: event?.hasStandardParking ?? false,
      value: event?.standardParkingPrice,
    },
    {
      option: 'VIP Parking',
      applies: event?.hasVIPParking ?? false,
      value: event?.vipParkingPrice,
    },
  ];

  return (
    <LoadingComponent loading={isLoading}>
      {event && (
        <SafeAreaView style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.eventDetailContainer}>
              <Image
                source={
                  event.logo
                    ? {uri: event.logo}
                    : require('../../assets/images/calendar.png')
                }
                style={styles.logo}
              />
              <Text style={styles.eventName}>{event.name}</Text>
              <Text style={styles.eventOrganizer}>{event.organizer}</Text>
              <Text style={styles.eventDate}>
                {new Date(event.eventStartDate).toLocaleDateString()}
              </Text>
              <Text style={styles.eventPrice}>
                {event.visitorPrice || event.exhibitorPrice
                  ? '$' + (event.visitorPrice || event.exhibitorPrice)
                  : 'Free'}
              </Text>
              <Text style={styles.eventAddress}>{event.address}</Text>
              <Text style={styles.eventDescription}>{event.description}</Text>

              <Text style={styles.eventParkingOptions}>Parking options</Text>

              {parkingOptions.some(option => option.applies) && (
                <ParkingTable options={parkingOptions} />
              )}

              <ButtonComponent
                style={styles.buttonPay}
                text={
                  event.visitorPrice || event.exhibitorPrice
                    ? `Pay $${event.visitorPrice || event.exhibitorPrice}`
                    : 'Free'
                }
                onPress={() => {
                  Alert.alert(
                    'Successfully',
                    `The ${event.name} event was successfully purchased`,
                  );
                }}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      )}
    </LoadingComponent>
  );
};

export default EventDetailScreen;
