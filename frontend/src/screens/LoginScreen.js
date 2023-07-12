import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

import {styles} from '../styles/LoginStyle';
import naverIcon from '../assets/naverLogo.png';
import googleIcon from '../assets/googleLogo.png';
// import useGoogleSignIn from '../hooks/useGoogleSignIn';
import { useNaverSignIn } from '../hooks/useNaverSignIn';

const LoginScreen = () => { 
  const navigation = useNavigation();

  // const {signInWithGoogle, isSignInProgress: isGoogleSignInProgress} = useGoogleSignIn();
  const {signInWithNaver, isSignInProgress: isNaverSignInProgress} = useNaverSignIn();

  return (
    <View style={styles.container}>
      <Text style={styles.appName}>Party UP</Text>
      <TouchableOpacity
        style={[styles.signInButton, styles.allButton]}
        // onPress={signInWithGoogle}
        // disabled={isGoogleSignInProgress}
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
        onPress={() => navigation.navigate('Home')}
      >
        <Icon name="user-o" size={20} color="#000"/>
        <Text style={styles.buttonText}>Guest</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
