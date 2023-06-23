import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {styles} from './Styles/AddStyles';

const Header = ({handleGoBack}) => {
  return (
    <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
      <MaterialIcons
        name="chevron-left"
        size={24}
        color="white"
        style={styles.backButtonIcon}
      />
      <Text style={styles.title}>생성</Text>
    </TouchableOpacity>
  );
};

export default Header;
