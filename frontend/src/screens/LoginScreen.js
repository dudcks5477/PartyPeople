import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import NaverLogin, {getProfile as getNaverProfile} from '@react-native-seoul/naver-login';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

import {styles} from '../styles/LoginStyle';
import naverIcon from '../assets/naverLogo.png';
import googleIcon from '../assets/googleLogo.png';

GoogleSignin.configure({
  webClientId: '<My_WEB_CLIENT_ID>',
  offlineAccess: true,
});

const initials = {
  kConsumerKey: '<My_naver_app_key>',
  kConsumerSecret: '<My_naver_app_secret>',
  kServiceAppName: '<My_service_app_name>',
  kServiceAppUrlScheme: '<My_service_app_url_scheme>' // only for ios
};

const LoginScreen = () => {
  const [isSignInProgress, setIsSignInProgress] = useState(false);
  const [naverToken, setNaverToken] = useState(null);
  const navigation = useNavigation();

  const signInWithGoogle = async () => {
    try {
      setIsSignInProgress(true);
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signInWithGoogle();
      console.log(userInfo);
    } catch(error) {
      console.log(error);
    } finally {
      setIsSignInProgress(false);
    }
  };

  const signInWithNaver = async () => {
    try {
      setIsSignInProgress(true);
      const result = await NaverLogin.login(initials);
      if (result.accessToken) {
        setNaverToken(result.accessToken);
        getNaverUserInfo(result.accessToken);
      } else {
        console.log(result);
      }
    } catch(error) {
      console.log(error);
    } finally {
      setIsSignInProgress(false);
    }
  };

  const getNaverUserInfo = async (token) => {
    try {
      const profileResult = await getNaverProfile(token);
      console.log(profileResult);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appName}>Party UP</Text>
      <TouchableOpacity
        style={[styles.signInButton, styles.allButton]}
        onPress={signInWithGoogle}
        disabled={isSignInProgress}
      >
        <Image source={googleIcon} style={styles.icon} />
        <Text style={styles.buttonText}>Sign in With Google</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.signInButton, styles.allButton]}
        onPress={signInWithNaver}
        disabled={isSignInProgress}
      >
        <Image source={naverIcon} style={styles.icon} />
        <Text style={styles.buttonText}>Sign in With Naver</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.signInButton, styles.allButton]}
        onPress={() => navigation.navigate('Home')}
      >
        <Icon name="user-o" size={20} color="#000"/>
        <Text style={styles.buttonText}>Guest</Text>
      </TouchableOpacity>
    </View>
  );

};

export default LoginScreen;