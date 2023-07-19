import React, { useState, useEffect } from 'react';
import {View, Text} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useNavigation } from '@react-navigation/native';
import {styles} from '../../styles/AgreementStyle'; 

import ProgressBar from '../../components/ProgressBar';
import CheckBoxItem from '../../components/CheckBoxItem';
import Button from '../../components/Button';

const AgreementScreen = () => {
  const [checkAll, setCheckAll] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
  const [check6, setCheck6] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    setCheckAll(check1 && check2 && check3 && check4 && check5 && check6);
  }, [check1, check2, check3, check4, check5, check6]);

  const handleCheckAll = (isChecked) => {
    setCheckAll(isChecked);
    setCheck1(isChecked);
    setCheck2(isChecked);
    setCheck3(isChecked);
    setCheck4(isChecked);
    setCheck5(isChecked);
    setCheck6(isChecked);
  };

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <ProgressBar progress={20}/>
        
        <Text style={styles.title}>안녕하세요!</Text>
        <Text style={styles.title}>Party UP이 처음이신가요?</Text>

        <Text style={styles.subTitle}>원활한 서비스 사용을 위해 약관에 동의해주세요.</Text>

        <View style={styles.subContainer}>
          <View style={styles.agreements}>
            <BouncyCheckbox
              key={`all-${checkAll}`}
              isChecked={checkAll}
              onPress={handleCheckAll}
              textStyle={{
                textDecorationLine: 'none'
              }}
            />
            <Text style={styles.textAgreements}>약관 전체 동의</Text>
          </View>

          <CheckBoxItem checkValue={check1} setCheckValue={setCheck1} label=" 서비스 이용 약관" important={true} />
          
          <CheckBoxItem checkValue={check2} setCheckValue={setCheck2} label=" 개인정보 처리방침" important={true} />

          <CheckBoxItem checkValue={check3} setCheckValue={setCheck3} label=" 위치기반 서비스 이용약관" important={true} />

          <CheckBoxItem checkValue={check4} setCheckValue={setCheck4} label=" 만 18세 이상입니다." important={true} />

          <CheckBoxItem checkValue={check5} setCheckValue={setCheck5} label="(선택) 마케팅 푸시 알림 수신 동의" important={false}/>

          <CheckBoxItem checkValue={check6} setCheckValue={setCheck6} label="(선택) 야간 푸시 알림 수신 동의" important={false} />
        </View>


        <View style={styles.btnContainer}>
          <Button 
            text='나가기'
            onPress={() => navigation.navigate('Login')}
            style = {styles.outBtn}
          />
          <Button
            text='다음'
            onPress={() => {
              if (check1 && check2 && check3 && check4) {
                navigation.navigate('UserInfo');
              } else {
                alert('모든 필수 항목에 동의해주세요.');
              }
            }}
            style={[styles.inBtn, {
              backgroundColor: check1 && check2 && check3 && check4 ? '#B39DDB' : '#fff'
            }]}
          />
        </View>

      </View>
    </View>
  );
};

export default AgreementScreen;