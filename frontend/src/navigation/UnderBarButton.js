import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import WishlistScreen from '../screens/WishlistScreen';
import ChatScreen from '../screens/ChatScreen';

const Tab = createBottomTabNavigator();

const UnderBarButton = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size}) => {
          const icons = {
            Map: 'map',
            wishilist: 'favorite',
            Home: 'home',
            Chat: 'chat',
            PrivateProfile: 'person',
          };
          const iconName = icons[route.name];
          return (
            <MaterialIcons
              name={iconName}
              color={focused ? '#B39DDB' : 'white'}
              size={size}
            />
          );
        },
        tabBarActiveTintColor: '#B39DDB',
        tabBarInactiveTintColor: 'white',
        tabBarStyle: { backgroundColor: 'black' }
      })}>
      {/* <Tab.Screen 
        name="Map" 
        component={MapScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Wishilist"
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
      /> */}
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          headerShown: false,
        }}
      />
      {/* <Tab.Screen
      name="PrivateProfile"
      component={PrivateProfile}
      options={{
        headerShown: false,
      }}
    />   */}
    </Tab.Navigator>
  );
};

export default UnderBarButton;