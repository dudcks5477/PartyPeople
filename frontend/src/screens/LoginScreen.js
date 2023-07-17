import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import {styles} from '../styles/LoginStyle';
import naverIcon from '../assets/naverLogo.png';
import googleIcon from '../assets/googleLogo.png';
import { useNaverSignIn } from '../hooks/useNaverSignIn';
import Config from 'react-native-config';

const LoginScreen = () => { 
  const navigation = useNavigation();
  const [isGoogleSignInProgress, setGoogleSignInProgress] = useState(false);

  GoogleSignin.configure({
    webClientId: Config.GOOGLE_WEB_CLIENT_ID, // From Google API console
  });

  const signInWithGoogle = async () => {
    setGoogleSignInProgress(true);
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
      navigation.navigate('Agreement');
    } catch(error) {
      console.log('Error:', error);
    } finally {
      setGoogleSignInProgress(false);
    }
  };

  const {signInWithNaver, isSignInProgress: isNaverSignInProgress} = useNaverSignIn();

  return (
    <ImageBackground source={require('../assets/LoginParty.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.appName}>Party UP</Text>
        <TouchableOpacity
          style={[styles.signInButton, styles.allButton]}
          onPress={signInWithGoogle}
          disabled={isGoogleSignInProgress}
        >
          <Image source={googleIcon} style={styles.icon} />
          <Text style={styles.buttonText}>Sign in With Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.signInButton, styles.allButton]}
          onPress={signInWithNaver}
          disabled={isNaverSignInProgress}
        >
          <Image source={naverIcon} style={styles.icon} />
          <Text style={styles.buttonText}>Sign in With Naver</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.signInButton, styles.allButton]}
          onPress={() => navigation.navigate('BottomTab', {screen: 'Home'})}
        >
          <Icon name="user-o" size={20} color="#000"/>
          <Text style={styles.buttonText}>Guest</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
