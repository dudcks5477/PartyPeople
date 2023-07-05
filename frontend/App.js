import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import UnderBarButton from './src/navigation/UnderBarButton';
import MapScreen from './src/screens/MapScreen';
import WishlistScreen from './src/screens/WishlistScreen';
import ChatScreen from './src/screens/ChatScreen';
import PrivateProfileScreen from './src/screens/PrivateProfileScreen';

const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen 
        name="Login" 
        component={LoginScreen}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        name="BottomTab"
        component={UnderBarButton}
      />
      <Stack.Screen
        name="Map"
        component={MapScreen}
        options= {{
          headerShown: true
        }}
      />
      <Stack.Screen
        name="Wishlist"
        component={WishlistScreen}
      />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
      />
      <Stack.Screen
        name="PrivateProfile"
        component={PrivateProfileScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;  