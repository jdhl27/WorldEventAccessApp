import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/Home';
import AuthScreen from '../screens/Auth/Login';

export type RootStackParamList = {
  Home: undefined;
  Auth: {name: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const NavigationRoot: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Welcome'}}
      />
      <Stack.Screen name="Auth" component={AuthScreen} />
    </Stack.Navigator>
  );
};

export default NavigationRoot;
