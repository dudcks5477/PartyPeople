import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import SignNumberScreen from './src/screens/Auth/SignNumberScreen';
import NumberCertiScreen from './src/screens/Auth/NumberCertiScreen';
import NameScreen from './src/screens/Auth/NameScreen';
import UserPhotoScreen from './src/screens/Auth/UserPhotoScreen';
import UserCountryScreen from './src/screens/Auth/UserCountryScreen';
import UserIntroScreen from './src/screens/Auth/UserIntroScreen';
import HomeScreen from './src/screens/HomeScreen';
import UnderBarButton from './src/navigation/UnderBarButton';
import MapScreen from './src/screens/MapScreen';
import AddScreen from './src/screens/AddScreen';
import MapScreen2 from './src/screens/MapScreen2';
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
        name="SignNumber"
        component={SignNumberScreen}
      />
      <Stack.Screen
        name="Certification"
        component={NumberCertiScreen}
      />
      <Stack.Screen
        name="Name"
        component={NameScreen}
      />
      <Stack.Screen
        name="UserPhoto"
        component={UserPhotoScreen}
      />
      <Stack.Screen
        name="UserCountry"
        component={UserCountryScreen}
      />
      <Stack.Screen
        name="UserIntro"
        component={UserIntroScreen}
      />
      <Stack.Screen
        name="BottomTab"
        component={UnderBarButton}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        name="Map"
        component={MapScreen}
        options= {{
          headerShown: true
        }}
      />
      <Stack.Screen
        name="Add"
        component={AddScreen}
      />
      <Stack.Screen
        name="Map2"
        component={MapScreen2}
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