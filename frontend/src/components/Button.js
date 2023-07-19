import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import {styles} from '../styles/AgreementStyle';

const Button = ({ text, onPress, style }) => {
  <TouchableOpacity style={[styles.btnContainer, style]} onPress={onPress}>
    <Text>{text}</Text>
  </TouchableOpacity>;
};

export default Button;