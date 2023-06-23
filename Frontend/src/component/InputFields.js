import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from './Styles/AddStyles';

const InputFields = ({
  partyName,
  setPartyName,
  numOfPeople,
  setNumOfPeople,
  coin,
  setCoin,
}) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.inputRow}>
        <Text style={styles.inputLabel}>파티이름</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => setPartyName(text)}
          value={partyName}
        />
      </View>

      <View style={styles.inputRow}>
        <Text style={styles.inputLabel}>최대인원</Text>
        <TextInput
          style={styles.textInput}
          value={numOfPeople.toString()}
          keyboardType={'numeric'}
          onChangeText={text => {
            const parsedNum = parseInt(text);
            if (!isNaN(parsedNum) && parsedNum <= 100) {
              setNumOfPeople(parsedNum);
            }
          }}
        />
      </View>

      <View style={styles.inputRow}>
        <Text style={styles.inputLabel}>파티코인</Text>
        <TextInput
          style={styles.textInput}
          value={coin}
          keyboardType={'numeric'}
          onChangeText={text => {
            setCoin(text);
          }}
        />
      </View>
    </View>
  );
};

export default InputFields;
