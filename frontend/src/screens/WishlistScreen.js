import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import {styles} from '../styles/WishlistStyle';

const WishilistScreen = () => {

  return (
    <ScrollView style={{backgroundColor: '#222'}}>
      <View>
        <Text style={styles.title}>Wishlists</Text>
      </View>
    </ScrollView>
  );
};

export default WishilistScreen;