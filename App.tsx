import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationRoot from './src/navigation';
import {AuthProvider} from './src/context/AuthContext';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <NavigationRoot />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
