/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useMemo} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import LottieView from 'lottie-react-native';

import {RootStackParamList} from '../../navigation';
import {fetchEvents, Event} from '../../api/events';
import LoadingComponent from '../../components/Loading/Loading';
import {styles} from './styles';
import {useAuth} from '../../context/AuthContext';
import InputLogin from '../../components/Input/InputLogin';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState('');

  const {logout} = useAuth();

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const eventsData = await fetchEvents();
        setEvents(eventsData);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadEvents();
  }, []);

  const toggleParkingOptions = (eventId: string) => {
    setSelectedEventId(prevEventId =>
      prevEventId === eventId ? null : eventId,
    );
  };

  const filteredEvents = useMemo(() => {
    return events.filter(event =>
      event.name.toLowerCase().includes(searchText.toLowerCase()),
    );
  }, [events, searchText]);

  const renderEvent = ({item}: {item: Event}) => {
    const isParkingOptions = selectedEventId === item.id;

    return (
      <TouchableOpacity
        style={styles.eventContainer}
        onPress={() => {
          navigation.navigate('EventDetail', {id: item.id});
        }}>
        <Image
          source={
            item.logo
              ? {uri: item.logo}
              : require('../../assets/images/calendar.png')
          }
          style={styles.logo}
        />
        <View style={styles.eventInfo}>
          <Text style={styles.eventName}>{item.name}</Text>
          <Text style={styles.eventOrganizer}>{item.organizer}</Text>
          <Text style={styles.eventDate}>
            Date: {new Date(item.eventStartDate).toLocaleDateString()}
          </Text>
          <Text style={styles.eventPrice}>
            {item.visitorPrice || item.exhibitorPrice
              ? '$' + (item.visitorPrice || item.exhibitorPrice)
              : 'Free'}
          </Text>
          {item.hasFreeParking ||
          item.hasStandardParking ||
          item.hasVIPParking ? (
            <TouchableOpacity
              style={styles.eventParkingOptionsButton}
              onPress={() => toggleParkingOptions(item.id)}>
              <Image
                source={require('../../assets/images/parking.png')}
                style={styles.logoParking}
              />
              <Text style={styles.eventParkingOptions}>Parking options</Text>
            </TouchableOpacity>
          ) : null}
          {isParkingOptions && (
            <View>
              {item.hasFreeParking && (
                <Text style={styles.eventOrganizer}>
                  • Free Parking Available
                </Text>
              )}
              {item.hasStandardParking && (
                <Text style={styles.eventOrganizer}>
                  • Standard Parking Available (${item.standardParkingPrice})
                </Text>
              )}
              {item.hasVIPParking && (
                <Text style={styles.eventOrganizer}>
                  • VIP Parking Available (${item.vipParkingPrice})
                </Text>
              )}
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <LoadingComponent loading={isLoading}>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={styles.logout}
          onPress={async () => {
            await logout();
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{name: 'Auth'}],
              }),
            );
          }}>
          <Image
            source={require('../../assets/images/logout.png')}
            style={styles.logoutImage}
          />
        </TouchableOpacity>
        <View style={styles.containerLogoWEA}>
          <Image
            source={require('../../assets/images/logo_wea.png')}
            style={styles.logoWEA}
          />
        </View>
        <FlatList
          data={filteredEvents}
          ListHeaderComponent={
            <>
              <Text style={styles.title}>Upcoming Events!</Text>
              <InputLogin
                style={styles.input}
                messageError={null}
                password={false}
                placeholder={'Search for an event'}
                onChangeText={text => setSearchText(text)}
              />
            </>
          }
          renderItem={renderEvent}
          ListFooterComponent={
            filteredEvents.length === 0 ? (
              <></>
            ) : (
              <View style={{paddingBottom: 140}} />
            )
          }
          keyExtractor={item => item.id}
          contentContainerStyle={styles.eventList}
        />
        {filteredEvents.length === 0 ? (
          // <Text style={styles.title}>Uuppssss...</Text>
          <View>
            <LottieView
              source={require('../../assets/animations/empty.json')}
              style={styles.empty}
              autoPlay
              loop
            />
          </View>
        ) : null}
      </SafeAreaView>
    </LoadingComponent>
  );
};

export default HomeScreen;
