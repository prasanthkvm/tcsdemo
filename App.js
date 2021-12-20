import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './src/pages/home';
import RegisterScreen from './src/pages/register';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{
            title: 'My SNCB',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#000',
            },
          }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Details"
          options={{
            title: 'Create an account',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#000',
              color: '#fff',
            },
          }}
          component={RegisterScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
