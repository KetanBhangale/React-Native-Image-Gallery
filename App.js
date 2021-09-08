// In App.js in a new project

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/HomeScreen';
import FullScreenImage from './src/FullScreenImage';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Gallery' }} />
        <Stack.Screen name="FullScreenImage" component={FullScreenImage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;