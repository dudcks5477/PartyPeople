import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from './Styles/AddStyles';

const PartyDescription = ({description, setDescription}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={{color: 'white'}}>파티 소개</Text>
      <TextInput
        style={styles.partyDescription}
        multiline={true}
        onChangeText={text => setDescription(text)}
        value={description}
      />
    </View>
  );
};

export default PartyDescription;
