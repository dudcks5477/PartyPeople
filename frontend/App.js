// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import React from 'react';
// import LoginScreen from './src/screens/LoginScreen.js';
// import HomeScreen from './src/screens/HomeScreen.js';
// import UnderBarButton from './src/container/UnderBarButton.js';
// const Stack = createNativeStackNavigator();

// const App = () => (
//   <NavigationContainer>
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Login"
//         component={LoginScreen}
//         options={{
//           headerShown: false,
//         }}
//       />
//       <Stack.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           headerShown: false,
//         }}
//       />
//       <Stack.Screen
//         name="BottomTab"
//         component={UnderBarButton}
//         options={{headerShown: false}}
//       />
//     </Stack.Navigator>
//   </NavigationContainer>
// );

// export default App;  

import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
const App = () => {
  const [backendData, setBackendData] = useState("");


  useEffect(() => {
    axios.get('http://localhost:3000/pet')
  .then(response => {
    setBackendData(response.data); // 서버 응답 데이터 출력
  })
  .catch(error => {
    console.log(error);
  });
  }, []);

  return (
    <View>
      <Text>{backendData}</Text>
    </View>
  );
};

export default App;

