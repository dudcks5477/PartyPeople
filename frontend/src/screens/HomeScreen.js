import React from 'react';
import {View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {styles} from '../styles/HomeScreenStyle';
import {SearchBar} from '../components/SearchBar';
import {Line} from '../components/Line';

export default function HomeScreen() {


  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.containerNotch}>
        <View style={styles.containerSearch}>
          <SearchBar />
          <Line style={{ marginTop: 20 }} />
        </View>
      </SafeAreaView>
    </View>
  );
}