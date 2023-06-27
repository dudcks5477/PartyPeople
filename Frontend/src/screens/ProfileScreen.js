import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
  Button,
} from 'react-native';
import {Rating} from 'react-native-ratings';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Line from '../components/Line';
import axios from 'axios';
import PartyItem from './PartyItem';
import {useNavigation} from '@react-navigation/native';

const ProfileScreen = () => {
  const [hostedParties, setHostedParties] = useState([]);
  const [participatedParties, setParticipatedParties] = useState([]);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [userDetails, setUserDetails] = useState({
    subscribers: 0,
    idCertified: false,
    cellPhoneCertified: false,
    rating: 0,
  });

  const navigation = useNavigation();

  useEffect(() => {
    axios
      .get('/api/hostedParties')
      .then(response => setHostedParties(response.data))
      .catch(error => console.log(error));

    axios
      .get('/api/participatedParties')
      .then(response => setParticipatedParties(response.data))
      .catch(error => console.log(error));

    axios
      .get('/api/userDetails')
      .then(response => setUserDetails(response.data))
      .catch(error => console.log(error));
  }, []);

  const [userComment, setUserComment] = useState('');

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSubscribe = () => {
    axios
      .post('/api/subscribe')
      .then(() => setIsSubscribed(true))
      .catch(error => console.log(error));
  };

  const handlePartySelect = partyId => {
    navigation.navigate('PartyDetail', {partyId});
  };

  const renderPartyItem = ({item}) => (
    <TouchableOpacity onPress={() => handlePartySelect(item.id)}>
      <PartyItem party={item} />
    </TouchableOpacity>
  );

  return (
    <View>
      <TouchableOpacity onPress={handleGoBack} style={styles.topNav}>
        <MaterialIcons
          name="chevron-left"
          size={40}
          color="gray"
          style={{marginRight: 2}}
        />
        <Text style={styles.profileText}>프로필</Text>
      </TouchableOpacity>

      <Line />
      <View style={styles.userInfo}>
        <MaterialIcons
          name="account-circle"
          size={60}
          color="gray"
          style={{marginRight: 2}}
        />
        <View
          style={{
            marginLeft: 50,
            alignItems: 'center',
          }}>
          <Text>Subscribers</Text>
          <Text
            style={{
              marginTop: 5,
            }}>
            {userDetails.subscribers}
          </Text>
        </View>
        {userDetails.idCertified && (
          <View style={styles.certifiedContainer}>
            <Text style={{color: 'black', marginLeft: 5}}>ID certified</Text>
          </View>
        )}
        {userDetails.cellPhoneCertified && (
          <View style={styles.certifiedContainer}>
            <Text style={{color: 'black', marginLeft: 5}}>
              Cellphone certified
            </Text>
          </View>
        )}
      </View>
      <View style={styles.ratingContainer}>
        <Rating
          imageSize={20}
          readonly
          startingValue={userDetails.rating}
          style={{paddingVertical: 10}}
        />
      </View>
      <Button
        title={isSubscribed ? '구독중' : '구독하기'}
        onPress={handleSubscribe}
        disabled={isSubscribed}
      />
      <View style={styles.section}>
        <Text>Recent Party / Host</Text>
        <FlatList
          data={hostedParties}
          renderItem={renderPartyItem}
          keyExtractor={item => item.id}
        />
        {/* Add Comments Here */}
      </View>
      <Line style={{marginTop: 40}} />
      <View style={styles.section}>
        <Text>Recent Party / Participate In</Text>
        <FlatList
          data={participatedParties}
          renderItem={renderPartyItem}
          keyExtractor={item => item.id}
        />
        {/* Add Comments Here */}
        <FlatList
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          data={Image}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View style={{alignItems: 'center', marginRight: 10}}>
              <Image
                style={{width: 346, height: 154, borderRadius: 10}}
                source={item}
              />
            </View>
          )}
        />
        <Text>Comment</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray'}}
          onChangeText={text => setUserComment(text)}
          value={userComment}
        />
      </View>
      <Line style={{marginTop: 5}} />
      <View
        style={{
          width: '90%',
          marginHorizontal: '5%',
          marginTop: 5,
        }}>
        <Text>Recent Party / Participate In</Text>
        <FlatList
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          data={Image}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View style={{alignItems: 'center', marginRight: 10}}>
              <Image
                style={{width: 346, height: 154, borderRadius: 10}}
                source={item}
              />
            </View>
          )}
        />
        <Text>Comment</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray'}}
          onChangeText={text => setUserComment(text)}
          value={userComment}
        />
      </View>
    </View>
  );
};

const styles = {
  topNav: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginHorizontal: '5%',
    marginTop: 20,
    marginBottom: 10,
  },
  profileText: {
    color: 'gray',
    fontSize: 40,
    fontWeight: 'bold',
  },
  userInfo: {
    width: '90%',
    marginHorizontal: '5%',
    marginTop: 10,
    flexDirection: 'row',
  },
  certifiedContainer: {
    borderWidth: 1,
    borderColor: '#e1d45a',
    borderRadius: 5,
    flexDirection: 'row',
    padding: 2,
    height: 25,
    marginLeft: 10,
    backgroundColor: '#e1d45a',
  },
  ratingContainer: {
    alignSelf: 'flex-start',
    marginLeft: '5%',
    marginTop: 10,
  },
  section: {
    width: '90%',
    marginHorizontal: '5%',
  },
};

export default ProfileScreen;
