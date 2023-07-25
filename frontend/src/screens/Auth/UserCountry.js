import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import { SearchBar } from 'react-native-elements';

import ProgressBar from '../../components/ProgressBar';
import {styles as agreementStyles} from '../../styles/AgreementStyle';

const countries = ['Korea', 'Japan', 'China', 'United States', 'Canada', 'Australia'];

const UserCountry = () => {
  const [search, setSearch] = useState('');
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const handleSearch = (text) => {
    setSearch(text);
    const newFilteredCountries = countries.filter(country => country.toLowerCase().includes(text.toLowerCase()));
    setFilteredCountries(newFilteredCountries);
  };

  const renderItem = ({item}) => {
    <TouchableOpacity onPress={() => console.log(item)}>
      <Text>{item}</Text>
    </TouchableOpacity>;
  };
  
  return (
    <View style={agreementStyles.background}>
      <View style={agreementStyles.container}>
        <ProgressBar progress={80}/>

        <Text style={agreementStyles.title}>국적을 선택해주세요.</Text>
        <Text style={agreementStyles.subTitle}>이후 변경할 수 없으니 정확히 선택해주세요.</Text>

        <SearchBar
          placeholder='국적 검색'
          onChangeText={handleSearch}
          value={search}
          lightTheme
        />

        <FlatList
          data={filteredCountries}
          renderItem={renderItem}
          keyExtractor={item => item}
        />

      </View>
    </View>
  );
};

export default UserCountry;