import React from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import PropTypes from 'prop-types';
import {styles} from '../styles/MapStyle2';

const Map = ({ region, handleMarkerPress }) => {
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      initialRegion={region}
      onRegionChangeComplete={(region) => {
        handleMarkerPress(region);
      }}
    >
      <Marker coordinate={region} />
    </MapView>
  );
};

Map.propTypes = {
  region: PropTypes.object.isRequired,
  handleMarkerPress: PropTypes.object,
};

export default Map;