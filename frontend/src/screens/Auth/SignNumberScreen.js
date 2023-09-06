import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from '../../styles/SignNumberStyle';


const AgreementScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>가입을 진행해 보세요!</Text>
      <View style={styles.centeredContent}>
        <TextInput
          style={styles.input}
          placeholder="전화번호"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholderTextColor="rgba(0, 0, 0, 0.17)"
        />
        <Text style={styles.text}>전화번호 입력은 당사 서비스 약관 및 개인정보 보호정책에 동의하는 것입니다. 감사합니다.</Text>
      </View>

      <TouchableOpacity style={styles.NextButton} onPress={() => {
        console.log('가입하기 버튼 클릭됨');
        navigation.navigate('UserInfo');
      }}>
        <Text style={styles.NextButtonText}>다음</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AgreementScreen;