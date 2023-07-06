import React, {useState} from 'react';
import {View, Image, ActivityIndicator} from 'react-native';
import placeholderImage from '../assets/party1.jpeg';
import PropTypes from 'prop-types';
import {styles} from '../styles/CardStyle';
import CardInfo from './CardInfo';

const Card = ({partyData}) => {

  // For image loading
  const [isLoading, setIsLoading] = useState(false);

  const {imageDetails = [], partyName, content} = partyData;

  const imageUrl = imageDetails.length > 0 ? imageDetails[0].uri : null;
  
  console.log('dd', imageUrl); // 완성되면 지우기
  

  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        {imageUrl ? ( 
          <>
            <Image
              source={{uri: imageUrl}}
              style={styles.image}
              onLoadStart={() => setIsLoading(true)}
              onLoadEnd={() => setIsLoading(false)}
            />
            {isLoading && <ActivityIndicator style={styles.loadingIndicator} />}
          </>
        ) : (
          // placholder 이미지를 여기에 추가 할 수 있다.
          <Image
            source={placeholderImage}
            style={styles.image}
          />
        )}
        <CardInfo 
          title={partyName} 
          content={content}
          partyLocation={partyData.partyLocation}
          time={partyData.time}
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
  })
};

export default Card;