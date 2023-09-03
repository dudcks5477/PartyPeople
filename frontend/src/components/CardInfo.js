import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {styles} from '../styles/CardStyle';

const CardInfo = ({ title, content, partyLocation, time, address }) => (
  <View>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.content}>{content}</Text>
    <Text style={styles.title}>{partyLocation}</Text>
    <Text style={styles.title}>{time}</Text>
    <Text style={styles.title}>{address}</Text>
  </View>
);

CardInfo.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  partyLocation: PropTypes.string,
  time: PropTypes.string,
  address: PropTypes.string,
};


export default CardInfo;