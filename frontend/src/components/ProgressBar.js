import React from 'react';
import {View} from 'react-native';
import {progressStyles} from '../styles/PrgoressBarStyle';
import PropTypes from 'prop-types';

const ProgressBar = ({progress}) => {
  const styles = progressStyles(progress);

  return (
    <View style={styles.container}>
      <View style={styles.emptyBar}>
        <View style={styles.fillBar}/>
      </View>
    </View>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};

ProgressBar.defaultProps = {
  progress: 0
};

export default ProgressBar;