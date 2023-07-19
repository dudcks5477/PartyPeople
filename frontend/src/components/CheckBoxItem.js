import React from 'react';
import {View, Text} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {styles} from '../styles/AgreementStyle';

const CheckBoxItem = ({checkValue, setCheckValue, label, important}) => (
  <View style={styles.agreements}>
    <BouncyCheckbox
      key={label}
      isChecked={checkValue}
      onPress={(isChecked) => setCheckValue(isChecked)}
      textStyle={{ textDecorationColor: 'none' }}
    />
    <Text>
      {important && <Text style={styles.importText}>(필수)</Text>}
      <Text style={styles.textAgreements}>{label}</Text>
    </Text>
  </View>
);

export default CheckBoxItem;