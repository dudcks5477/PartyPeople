import React, {useState, useEffect} from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import {styles} from '../styles/WishlistStyle';
import Card from '../components/Card';

const WishilistScreen = () => {
  const [partyData, setPartyData] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null); // 에러 메세지 상태 추가
  const navigation = useNavigation();

  useEffect(() => {
    const fetchWishlist = async() => {
      try {
        const storedUserId = await AsyncStorage.getItem('userId');
        console.log(storedUserId);
        const response = await axios.get(`http://3.35.21.149:8080/wishlist/${storedUserId}`);

        // 응답 데이터 유효성 검사
        if (Array.isArray(response.data)) {
          setPartyData(response.data);
        } else {
          console.error('Invalid response data');
          setErrorMessage('Something went wrong. Please try again later.');
        }
      } catch(e) {
        console.log('Wishlist fetch error', e);
        setErrorMessage('Falied to fetch wishlist. Please check your connection and try again.'); // 에러 처리
      }
    };
    const unsubscribe = navigation.addListener('focus', fetchWishlist);

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wishlists</Text>
      {/* 에러 메시지 표시 */}
      { errorMessage && (
        <Text style={styles.errorMessage}>
          {errorMessage}
        </Text>
      )}
      {/* FlatList 사용 */}
      <FlatList
        data={partyData}
        keyExtractor={(item) => item.id.toString()} // 고유한 키 사용
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => navigation.navigate('PartyDetail', item.id)}
          >
            <Card partyData={item} style={{ height: '10%' }} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default WishilistScreen;