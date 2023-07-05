import React from 'react';
import {View, Image, Text} from 'react-native';
import PropTypes from 'prop-types';
import placeholderImage from '../assets/party1.jpeg';
import {styles} from '../styles/CardStyle';

const Card = ({partyData}) => {
  const {imageDetails = [], partyName, content, partyDateTime, partyLocation, time, address} = partyData;

  const imageUrl = imageDetails.length > 0 ? imageDetails[0].uri : null;
  console.log('dd', imageUrl); // 완성되면 지우기
  

  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        {imageUrl ? ( 
          <Image
            source={{uri: imageUrl}}
            style={styles.image}
          />
        ) : (
          // placholder 이미지를 여기에 추가 할 수 있다.
          <Image
            source={placeholderImage}
            style={styles.image}
          />
        )
        }
        <Text style={styles.title}>{partyName}</Text>
        <Text style={styles.description}>{content}</Text>
        <Text style={styles.title}>{partyDateTime}</Text>
        <Text style={styles.title}>{partyLocation}</Text>
        <Text style={styles.title}>{time}</Text>
        <Text style={styles.title}>{address}</Text>
      </View>
    </View>
  );
};

Card.propTypes = {
  partyData: PropTypes.shape({
    imageDetails: PropTypes.arrayOf(
      PropTypes.shape({
        uri: PropTypes.string,
      })
    ),
    partyName: PropTypes.string,
    content: PropTypes.string,
    partyDateTime: PropTypes.string,
    partyLocation: PropTypes.string,
    time: PropTypes.string,
    address: PropTypes.string,
  })
};

export default Card;