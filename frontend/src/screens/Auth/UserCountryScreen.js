import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import countries from '../../data/countries.json';
import ProgressBar from '../../components/ProgressBar';
import Button from '../../components/Button';
import {styles as agreementStyles} from '../../styles/SignNumberStyle';
import {styles as userCountryStyles} from '../../styles/UserCountryStyle';

const UserCountry = () => {
  const [search, setSearch] = useState('');
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [selectedCountry, setSelectedCountry] = useState('');

  const navigation = useNavigation();

  const handleSearch = (text) => {
    setSearch(text);
    const newFilteredCountries = countries.filter(country => country.toLowerCase().includes(text.toLowerCase()));
    setFilteredCountries(newFilteredCountries);
  };

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={userCountryStyles.item} onPress={() => console.log(item)}>
        <RadioButton
          title={item}
          status={ selectedCountry === item ? 'checked' : 'unchecked' }
          onPress={() => handleSelectCountry(item)}
        />
        <Text style={userCountryStyles.text}>{item}</Text>
      </TouchableOpacity>
    );
  };
  
  return (
    <View style={agreementStyles.background}>
      <View style={agreementStyles.container}>
        <ProgressBar progress={80}/>

        <Text style={agreementStyles.title}>국적을 선택해주세요.</Text>
        <Text style={agreementStyles.subTitle}>이후 변경할 수 없으니 정확히 선택해주세요.</Text>

        <SearchBar
          containerStyle={userCountryStyles.searchBarContainer}
          inputContainerStyle={userCountryStyles.searchBarInputContainer}
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

        <View
          style={[agreementStyles.btnContainer, { paddingTop: 10 }]}
        >
          <Button 
            text='나가기'
            onPress={() => navigation.navigate('UserPhoto')}
            style={agreementStyles.outBtn}
          />
          <Button
            text='다음'
            onPress={() => navigation.navigate('UserIntro')}
            style={[agreementStyles.inBtn, {
              backgroundColor: selectedCountry ? '#B39DDB' : '#fff'
            }]}
          />
        </View>

      </View>
    </View>
  );
};

export default UserCountry;