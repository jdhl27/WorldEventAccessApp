import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/Home';
import AuthScreen from '../screens/Auth/Login';
import EventDetailScreen from '../screens/EventDetail/EventDetail';
import LoadingComponent from '../components/Loading/Loading';
import {useAuth} from '../context/AuthContext';

export type RootStackParamList = {
  Home: undefined;
  Auth: undefined;
  EventDetail: {id: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const NavigationRoot: React.FC = () => {
  const {token, isLoading} = useAuth();

  return (
    <LoadingComponent loading={isLoading}>
      <Stack.Navigator initialRouteName={token ? 'Home' : 'Auth'}>
        <Stack.Screen
          name="Auth"
          component={AuthScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EventDetail"
          component={EventDetailScreen}
          options={{
            headerTitle: 'Event detail',
            headerTitleStyle: {
              fontFamily: 'Gilroy-Bold',
              fontSize: 24,
            },
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Navigator>
    </LoadingComponent>
  );
};

export default NavigationRoot;
