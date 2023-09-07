import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from '../../styles/SignNumberStyle';


const AgreementScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>인증 번호를 입력해 주세요</Text>
      <View style={styles.centeredContent}>
        <TextInput
          style={styles.input}
          placeholder="● ● ● ● ● ●"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholderTextColor="rgba(0, 0, 0, 0.17)"
        />
        <Text style={styles.text}>받지 못하셨나요? 그럼 여길 눌러보세요!</Text>
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