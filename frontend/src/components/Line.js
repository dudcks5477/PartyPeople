import React from 'react';
import {View, StyleSheet} from 'react-native';
import propTypes from 'prop-types';

const Line = ({style}) => {
  return <View style={[styles.line, style]} />;
};

Line.propTypes = {
  style: propTypes.object,
};

const styles = StyleSheet.create({
  line: {
    borderBottomWidth: 0.5,
    borderColor: '#D2D2D2',
    width: '90%',
    marginHorizontal: '5%',
  }
});

export default Line;