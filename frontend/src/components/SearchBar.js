import React, {useState} from 'react';
import {View, TextInput} from 'react-native';

export default function SearchBar() {
  const [query, setQuery] = useState('');

  return (
    <View style={{flexDirection: 'row'}}>
      <TextInput
        style={{
          flex: 1,
          height: 56,
          borderRadius: 13,
          marginTop: 46,
          marginLeft: 14,
          marginRight: 14,
          backgroundColor: '#D2D2D2',
        }}
        value={query}
        onChangeText={setQuery}
        placeholder='언제든 파티 찾기'
        autoCapitalize='none'
        autoCorrect={false}
      />
    </View>
  );
}