import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
// import LoginScreen from './src/screens/LoginScreen.js';
// import HomeScreen from './src/screens/HomeScreen.js';
// import UnderBarButton from './src/container/UnderBarButton.js';
import MapScreen from './src/screens/MapScreen.js';
const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      {/* <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="HomeSearchBar"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BottomTab"
        component={UnderBarButton}
        options={{
          headerShown: false,
        }}
      /> */}
      <Stack.Screen
        name="MapScreen"
        component={MapScreen} 
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;  