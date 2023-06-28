import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

const Line = ({ style }) => {
  return <View style={[styles.line, style]} />;
};

Line.propTypes = {
  style: PropTypes.object,
};

const styles = StyleSheet.create({
  line: {
    borderWidth: 0.5,
    borderColor: '#D2D2D2',
    height: 1,
    width: '90%',
    marginHorizontal: '5%',
  },
});

export default Line;
