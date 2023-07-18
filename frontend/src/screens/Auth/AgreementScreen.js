import React, { useState, useEffect } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useNavigation } from '@react-navigation/native';
import {styles} from '../../styles/AgreementStyle'; 


import ProgressBar from '../../components/ProgressBar';

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
    <View style={styles.container}>
      <ProgressBar progress={20}/>
      
      <Text style={styles.title}>안녕하세요!</Text>
      <Text style={styles.title}>Party UP이 처음이신가요?</Text>

      <Text style={styles.subTitle}>원활한 서비스 사용을 위해 약관에 동의해주세요.</Text>

      <View>
        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
          <BouncyCheckbox
            key={`all-${checkAll}`}
            isChecked={checkAll}
            onPress={handleCheckAll}
            textStyle={{
              textDecorationLine: 'none'
            }}
          />
          <Text style={{fontSize: 15}}>약관 전체 동의</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
          <BouncyCheckbox
            key={`1-${check1}`}
            isChecked={check1}
            onPress={(isChecked) => setCheck1(isChecked)}
            textStyle={{
              textDecorationLine: 'none'
            }}
          />
          <Text>
            <Text style={{color:'red', fontSize: 15}}>(필수)</Text>
            <Text style={{fontSize: 15}}> 서비스 이용 약관</Text>
          </Text>
        </View>
        
        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
          <BouncyCheckbox
            key={`2-${check2}`}
            isChecked={check2}
            onPress={(isChecked) => setCheck2(isChecked)}
            textStyle={{
              textDecorationLine: 'none'
            }}
          />
          <Text>
            <Text style={{color:'red', fontSize: 15}}>(필수)</Text>
            <Text style={{fontSize: 15}}> 개인정보 처리방침</Text>
          </Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
          <BouncyCheckbox
            key={`3-${check3}`}
            isChecked={check3}
            onPress={(isChecked) => setCheck3(isChecked)}
            textStyle={{
              textDecorationLine: 'none'
            }}
          />
          <Text>
            <Text style={{color:'red', fontSize: 15}}>(필수)</Text>
            <Text style={{fontSize: 15}}> 위치기반 서비스 이용약관</Text>
          </Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
          <BouncyCheckbox
            key={`4-${check4}`}
            isChecked={check4}
            onPress={(isChecked) => setCheck4(isChecked)}
            textStyle={{
              textDecorationLine: 'none'
            }}
          />
          <Text>
            <Text style={{color:'red', fontSize: 15}}>(필수)</Text>
            <Text style={{fontSize: 15}}> 만 18세 이상입니다</Text>
          </Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
          <BouncyCheckbox
            text=""
            key={`5-${check5}`}
            isChecked={check5}
            onPress={(isChecked) => setCheck5(isChecked)}
            textStyle={{
              textDecorationLine: 'none'
            }}
          />
          <Text style={{fontSize: 15}}>(선택) 마케팅 푸시 알림 수신 동의</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <BouncyCheckbox
            key={`6-${check6}`}
            isChecked={check6}
            onPress={(isChecked) => setCheck6(isChecked)}
            textStyle={{
              textDecorationLine: 'none'
            }}
          />
          <Text style={{fontSize: 15}}>(선택) 야간 푸시 알림 수신 동의</Text>
        </View>
        <Text style={{fontSize: 9, textAlign: 'center'}}>21시~08시 사이에는 알림을 받지 않습니다.</Text>
      </View>

      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={{alignItems: 'center', backgroundColor: '#DDD', padding: 10, marginTop: 10, marginRight: 10}}
          onPress={() => navigation.navigate('Login')}
        >
          <Text>나가기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{alignItems: 'center', backgroundColor: '#DDD', padding: 10, marginTop: 10}}
          onPress={() => navigation.navigate('UserInfoScreen')}
        >
          <Text>다음</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AgreementScreen;