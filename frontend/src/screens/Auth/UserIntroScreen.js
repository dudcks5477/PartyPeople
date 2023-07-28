import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';

import ProgressBar from '../../components/ProgressBar';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import {styles as agreementStyles} from '../../styles/AgreementStyle';
import {styles as userIntroStyles} from '../../styles/UserIntroStyle';

const UserIntro = () => {
  const [text, setText] = useState('');

  const navigation = useNavigation();
  
  return(
    <View style={agreementStyles.background}>
      <View style={agreementStyles.container}>
        <ProgressBar progress={100}/>

        <Text style={agreementStyles.title}>자기소개를</Text>
        <Text style={agreementStyles.title}>입력해주세요</Text>
        <Text style={agreementStyles.subTitle}>나를 소개할 수 있는 내용을 자유롭게 적어주세요.</Text>

        <View style={userIntroStyles.inputContainer}>
          <TextInput
            style={userIntroStyles.input}
            onChangeText={setText}
            value={text}
            textAlignVertical='top'
            placeholder='예) 관심사, 취미, 좋아하는 노래 등'
            placeholderTextColor='gray'
            multiline
          />
        </View>

        <Text style={agreementStyles.subTitle}>
          {`다른 메신저의 아이디를 기재할 경우 사기, 변태, 욕설 등의 위험에 노출될
있습니다.`}</Text>

      </View>
      <View
        style={[agreementStyles.btnContainer, {marginLeft: 30}]}
      >
        <Button 
          text='나가기'
          onPress={() => navigation.navigate('UserPhoto')}
          style={agreementStyles.outBtn}
        />
        <Button
          text='완료'
          onPress={() => navigation.navigate('Home')}
          style={[agreementStyles.inBtn, {
            backgroundColor: '#B39DDB'
          }]}
        />
      </View>
    </View>
  );
};

export default UserIntro;