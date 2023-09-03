import React, {useState} from 'react';
import {View, Image, ActivityIndicator} from 'react-native';
import placeholderImage from '../assets/party1.jpeg';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import {styles} from '../styles/CardStyle';
import CardInfo from './CardInfo';

const Card = ({partyData}) => {

  // For image loading
  const [isLoading, setIsLoading] = useState(false);

  const extractPartyData = partyData => {
    const {imageDetails = [], partyName, content} = partyData;
    const imageUrl = imageDetails.length > 0 ? imageDetails[0].uri : null;
    return { imageUrl, partyName, content};
  };
  
  const {imageUrl, partyName, content} = extractPartyData(partyData);

  // Format the party date
  const formattedDate = partyData.partyDateTime ? format(new Date(partyData.partyDateTime), 'MMMM d, yyyy h:mm a') : null;
  
  // 완성되면 지우기
  console.log('dd', imageUrl); 
  

  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        {imageUrl ? ( 
          <>
            <Image
              accessible={true}
              accessibilityLabel='Party Image'
              source={{uri: imageUrl}}
              style={styles.image}
              onLoadStart={() => setIsLoading(true)}
              onLoadEnd={() => setIsLoading(false)}
              onError={(error) => {
                // Handle image loading error
                console.log('Image Loading error:', error);
              }}
            />
            {isLoading && <ActivityIndicator style={styles.loadingIndicator} />}
          </>
        ) : (
          // placholder 이미지를 여기에 추가 할 수 있다.
          <Image
            accessible={true}
            accessibilityLabel='Placeholder Image'
            source={placeholderImage}
            style={styles.image}
          />
        )}
        <CardInfo 
          title={partyName} 
          content={content}
          partyLocation={partyData.partyLocation}
          time={formattedDate} // formatting date relay
          address={partyData.address}  
        /> 
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
    partyLocation: PropTypes.string,
    time: PropTypes.string,
    address: PropTypes.string,
    partyDateTime: PropTypes.string,
  })
};

export default Card;