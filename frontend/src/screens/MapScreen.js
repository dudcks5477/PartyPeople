import React, { useRef, useState, useCallback, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import axios, { CancelToken, isCancel } from 'axios';
import PropTypes from 'prop-types';
import { styles } from '../styles/MapStyle';
import PartyModal from './PartyModal';

const MapScreen = () => {
  
  const [parties, setParties] = useState([]);
  const [selectedParty, setSelectedParty] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  
  const mapRef = useRef(null);

  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [region, setRegion] = useState({
    latitude: 37.5665,
    longitude: 126.9780,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    const source = CancelToken.source();

    const fetchData = async () => {
      try {
        const response = await axios.get('http://3.35.21.149:8080/party');
        const data = response.data;
        setParties(data);
        console.log('selectedParty', selectedParty?.id);
        console.log('selectedParty', selectedParty);
      } catch (e) {
        if (isCancel(e)) {
          console.log('Request canceled', e.message);
        } else {
          console.log(e);
        }
      }
    };

    fetchData();

    return () => {
      source.cancel();
    };
  }, [isFocused], [selectedParty]);

  const handleMarkerPress = useCallback((party) => {
    setSelectedParty(party);
    console.log('ss', selectedParty);
    setModalVisible(true);
  }, []);

  const renderPartyMarkers = useCallback(() => (
    parties.map((party, index) => (
      <Marker
        key={index}
        coordinate={{
          latitude: party.latitude,
          longitude: party.longitude,
        }}
        onPress={() => handleMarkerPress(party)}
      />
    ))
  ), [parties, handleMarkerPress]);

  const handlePartyDetailPress = useCallback(() => {
    console.log('select', selectedParty.id);
    navigation.navigate('PartyDetail', selectedParty.id);
    setModalVisible(false);
  }, [navigation, selectedParty]);

  const handlePlaceSelected = useCallback((data, details) => {
    const { geometry } = details;
    const { location } = geometry;
    const { lat, lng } = location;
    
    mapRef.current.animateToRegion({
      latitude: lat,
      longitude: lng,
      latitudeDelta: region.latitudeDelta,
      longitudeDelta: region.longitudeDelta,
    });
  }, [region]);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        ref={mapRef}
        initialRegion={region}
        onRegionChangeComplete={setRegion}
      >
        {renderPartyMarkers()}
      </MapView>

      <PartyModal
        isVisible={modalVisible}
        party={selectedParty}
        onDetailPress={handlePartyDetailPress}
        onClose={() => setModalVisible(false)}
      />

      <GooglePlacesAutocomplete
        minLength={2}
        placeholder='Search'
        query={{
          key: '',
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

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddScreen')}
      >
        <Text style={styles.addButtonText}>
          + Add
        </Text>
      </TouchableOpacity>
    </View>
  );
};

MapScreen.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  party: PropTypes.object,
  onDetailPress: PropTypes.func,
  onClose: PropTypes.func,
};

export default MapScreen;