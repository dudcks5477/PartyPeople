import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from '../../styles/NameStyle';


const NameScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>이름과 성을 입력해 주세요.</Text>
      <View style={styles.centeredContent}>
        <TextInput
          style={styles.input}
          placeholder="이름"
          value={firstName}
          onChangeText={setFirstName}
          placeholderTextColor="rgba(0, 0, 0, 0.17)"
        />
        <TextInput
          style={styles.input}
          placeholder="성"
          value={lastName}
          onChangeText={setLastName}
          placeholderTextColor="rgba(0, 0, 0, 0.17)"
        />
      </View>
      <Text style={styles.text}>PartyUP에서는 닉네임을 사용하지만, 인증을 위해 입력해주세요!</Text>

      <TouchableOpacity style={styles.NextButton} onPress={() => {
        console.log('가입하기 버튼 클릭됨');
        navigation.navigate('UserInfo');
      }}>
        <Text style={styles.NextButtonText}>다음</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NameScreen;