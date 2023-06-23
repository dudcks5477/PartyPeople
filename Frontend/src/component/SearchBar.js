import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import {searchBarStyle} from './searchBarStyle';

export default function SearchBar() {
  const [query, setQuery] = useState('');

  return (
    <View style={searchBarStyle.container}>
      <TextInput
        style={searchBarStyle.input}
        value={query}
        onChange={setQuery}
        placeholder="언제든 파티 찾기"
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
}
