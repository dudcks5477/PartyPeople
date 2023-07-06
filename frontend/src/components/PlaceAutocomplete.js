import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import PropTypes from 'prop-types';
import {styles} from '../styles/MapStyle2';

const PlaceAutocomplete = ({ handlePlaceSelected }) => {
  return (
    <GooglePlacesAutocomplete
      minLength={2}
      placeholder='언제든 파티 위치 검색'
      query={{
        key: 'my key',
        language: 'ko',
        components: 'country: kr',
      }}
      keyboardShouldPersistTaps={'handled'}
      fetchDetails={true}
      onPress={handlePlaceSelected}
      onFail={(error) => console.log(error)}
      onNotFound={() => console.log('no results')}
      keepResultsAfterBlur={true}
      enablePoweredByContainer={false}
      styles={styles.search}
    />
  );
};

PlaceAutocomplete.propTypes = {
  handlePlaceSelected: PropTypes.object.isRequired
};

export default PlaceAutocomplete;