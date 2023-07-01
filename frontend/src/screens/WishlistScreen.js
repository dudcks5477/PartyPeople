import React, {useState, useEffect} from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import {styles} from '../styles/WishlistStyle';
import Card from '../components/Card';

const WishilistScreen = () => {
  // const [wishlist, setWishlist] = useState([]);
  const [partyData, setPartyData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchWishlist = async() => {
      try {
        const storedUserId = await AsyncStorage.getItem('userId');
        console.log(storedUserId);
        const response = await axios.get(`http://3.35.21.149:8080/wishlist/${storedUserId}`);

        setPartyData(response.data);
      } catch(e) {
        console.log('Wishlist fetch error', e);
      }
    };
    const unsubscribe = navigation.addListener('focus', fetchWishlist);

    return unsubscribe;
  }, [navigation]);

  return (
    <ScrollView style={{backgroundColor: '#222'}}>
      <View>
        <Text style={styles.title}>Wishlists</Text>
      </View>
      { partyData && partyData.map((party, index ) =>(
        <TouchableOpacity
          key={index}
          style={styles.cardContainer}
          onPress={() => navigation.navigate('PartyDetail', party.id)}
        >
          <Card partyData={party} style={{height: '10%'}}/>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default WishilistScreen;