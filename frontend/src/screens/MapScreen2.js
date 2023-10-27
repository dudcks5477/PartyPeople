import React, { useEffect, useState, useRef } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Geocoder from 'react-native-geocoding';
import { styles } from '../styles/MapStyle2';
import Map from '../components/Map';
import PlaceAutocomplete from '../components/PlaceAutoComplete';

Geocoder.init('API_KEY');

const MapScreen2 = () => {
  const mapRef = useRef(null);
  const navigation = useNavigation();
  const [address, setAddress] = useState('');
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [region] = useState({
    latitude: 37.5665,
    longitude: 126.9780,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    fetchCurrentLocation();
  }, []);

  const fetchCurrentLocation = () => {
    Geocoder.from(region.latitude, region.longitude)
      .then((json) => {
        const addressComponent = json.results[0].formatted_address;
        setAddress(addressComponent);
      })
      .catch((error) => {
        console.error('Error fetching current location:', error);
      });
  };

  const handlePlaceSelected = (data, details) => {
    const { geometry } = details;
    const { location } = geometry;
    const { lat, lng } = location;

    mapRef.current.animateToRegion({
      latitude: lat,
      longitude: lng,
      latitudeDelta: region.latitudeDelta,
      longitudeDelta: region.longitudeDelta,
    });

    setLatitude(lat);
    setLongitude(lng);
    setAddress(details.formatted_address);
  };

  return (
    <View style={styles.container}>
      <Map region={region} mapRef={mapRef} />

      <PlaceAutocomplete handlePlaceSelected={handlePlaceSelected} />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() =>
          navigation.navigate('AddScreen', { address, longitude, latitude })
        }
      >
        <Text style={styles.addButtonText}>위치 선택</Text>
      </TouchableOpacity>

      <View style={styles.addressContainer}>
        <Text>{address}</Text>
      </View>
    </View>
  );
};

export default MapScreen2;
