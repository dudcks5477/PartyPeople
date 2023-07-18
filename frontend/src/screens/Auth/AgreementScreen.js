import React from 'react';
import {View, Text} from 'react-native';

import ProgressBar from '../../components/ProgressBar';

const AgreementScreen = () => {

  return (
    <View>
      <ProgressBar progress={20}/>
      
      <Text>안녕하세요!</Text>
      <Text>Party UP이 처음이신가요?</Text>
      <Text>원할한 서비스 사용을 위해 약관에 동의해주세요.</Text>

      <Text>약관 전체 동의</Text>
        
      <Text>(필수) 서비스 이용 약관 </Text>
        
      <Text>(필수) 개인정보 처리방침  </Text>
        
      <Text>(필수) 위치기반 서비스 이용약관</Text>
        
      <Text>(필수) 만 18세 이상입니다.</Text>
        
      <Text>(선택) 마케팅 푸시 알림 수신 동의</Text>
        
      <Text>(선택) 야간 푸시 알림 수신 동의</Text>
      <Text>21시~08시 사이에는 알림을 받지 않습니다.</Text>

      <Text>나가기</Text><Text>다음</Text>
    </View>
  );
};

export default AgreementScreen;