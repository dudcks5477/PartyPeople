import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from '../../styles/NickNameStyle';


const NumberCertiScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>사용자 이름</Text>
      <Text style={styles.text}>나중에 언제든지 변경할 수 있습니다.</Text>
      <View style={styles.centeredContent}>
        <TextInput
          style={styles.input}
          placeholder="#PartyPeople"
          placeholderTextColor="rgba(0, 0, 0, 0.17)"
        />
      </View>

      <TouchableOpacity style={styles.NextButton} onPress={() => {
        console.log('가입하기 버튼 클릭됨');
        navigation.navigate('Name');
      }}>
        <Text style={styles.NextButtonText}>다음</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NumberCertiScreen;