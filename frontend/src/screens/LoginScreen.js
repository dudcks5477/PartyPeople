import React from 'react-native';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import LoginPartyImage from '../assets/LoginParty.jpg';
import {styles} from '../styles/LoginStyle'; 

const LoginScreen = () => {
  const navigation = useNavigation();

  return(
    <ImageBackground source={LoginPartyImage} style={styles.background}>
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>Party UP</Text>
        <Text style={styles.subHeaderText}>우리 집에서 만나는 새로운 문화</Text>
      </View>
      <TouchableOpacity style={styles.signUpButton} onPress={() => {
        console.log('가입하기 버튼 클릭됨');
        navigation.navigate('SignNumber');
      }}>
        <Text style={styles.signUpButtonText}>가입하기</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={() => {
        console.log('로그인 버튼 클릭됨');
        navigation.navigate('SignNumber');
      }}>
        <Text style={styles.loginButtonText}>로그인</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default LoginScreen;