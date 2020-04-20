import * as React from 'react';
import { Platform } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PlacesListScreen from './screens/PlacesListScreen';
import PlaceDetailScreen from './screens/PlaceDetailScreen';
import NewPlaceScreen from './screens/NewPlaceScreen';
import MapScreen from './screens/MapScreen';
import Colors from './constants/Colors';

const Stack = createStackNavigator();



function App() {
  const defaultHeader = {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="PlacesList" options={{ ...defaultHeader }}
          component={PlacesListScreen} />
        <Stack.Screen name="PlaceDetail" options={{ ...defaultHeader }} component={PlaceDetailScreen} />
        <Stack.Screen name="NewPlacet" options={{ ...defaultHeader }} component={NewPlaceScreen} />
        <Stack.Screen name="Map" options={{ ...defaultHeader }} component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


