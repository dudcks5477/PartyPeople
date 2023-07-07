import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import {styles} from '../styles/PrivateProfileStyle';

const SettingItem = ({ iconName, label, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.settingsItem}>
    <View style={styles.itemTextContainer}>
      <MaterialIcons
        name={iconName}
        size={20}
        color="#ccc"
        style={styles.itemIcon}
      />
      <Text style={styles.itemText}>
        {label}
      </Text>
    </View>
    <MaterialIcons
      name="chevron-right"
      size={20}
      color="#ccc"
      style={styles.itemIcon}
    />
  </TouchableOpacity>
);

SettingItem.propTypes = {
  iconName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default SettingItem;