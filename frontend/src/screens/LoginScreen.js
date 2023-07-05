import React, {useState, useEffect} from 'react';
import {View, Text, Keyboard, TextInput, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from '../styles/LoginStyle';

export default function LoginScreen() {
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardStatus(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardStatus(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      // const response = await axios.post('http://3.35.21.149:8080/users/login', {
      //   email: email,
      //   password: password,
      // });

      // const userId = response.data.id;

      // await AsyncStorage.setItem('useId', JSON.stringify(userId));

      // console.log('a', userId);

      navigation.navigate('BottomTab', {screen: 'Home'});
    } catch(error) {
      console.error(error);
    }
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  
  return (
    <View style={styles.container}>
      {!keyboardStatus && 
        <Text style={styles.loginText}>로그인</Text>
      }
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='이메일'
          value={email}
          onChangeText={setEmail}
          autoCapitalize='none'
          keyboardType='email-address'
        />
        <TextInput
          style={styles.input}
          placeholder='비밀번호'
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>로그인</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>회원가입</Text>
      </TouchableOpacity>
    </View>
  );
}
