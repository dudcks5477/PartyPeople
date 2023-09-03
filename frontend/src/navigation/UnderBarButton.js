import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import WishlistScreen from '../screens/WishlistScreen';
import ChatScreen from '../screens/ChatScreen';
import PrivateProfileScreen from '../screens/PrivateProfileScreen';

const Tab = createBottomTabNavigator();

const ICONS = {
  Map: 'map',
  Wishlist: 'favorite',
  Home: 'home',
  Chat: 'chat',
  PrivateProfile: 'person',
};

const ACTIVE_COLOR = '#B39DDB';
const INACTIVE_COLOR = 'white';
const TAB_BAR_BACKGROUND = 'black';

const UnderBarButton = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size}) => {
          const iconName = ICONS[route.name];
          if (!iconName) {
            console.warn(`Icon not found for route: ${route.name}`);
            return null;
          }
          return (
            <MaterialIcons
              name={iconName}
              color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
              size={size}
            />
          );
        },
        tabBarActiveTintColor: ACTIVE_COLOR,
        tabBarInactiveTintColor: INACTIVE_COLOR,
        tabBarStyle: { backgroundColor: TAB_BAR_BACKGROUND }
      })}>
      <Tab.Screen 
        name="Map" 
        component={MapScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="PrivateProfile"
        component={PrivateProfileScreen}
        options={{
          headerShown: false,
        }}
      />  
    </Tab.Navigator>
  );
};

export default UnderBarButton;