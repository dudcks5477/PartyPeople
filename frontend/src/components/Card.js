import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Config from 'react-native-config';
import { ScrollView } from 'react-native-gesture-handler';

const Card = ({partyData}) => {
  const [partyDataState, setPartyDataState] = useState({
    address: '',
    date: '',
    time: '',
    partyName: '',
    numOfPeople: '',
    description: '',
  });

  return (
    <>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.title}>{partyDataState.partyName}</Text>
          <Text style={styles.description}>{partyDataState.description}</Text>
          <Text style={styles.title}>{partyDataState.numOfPeople}</Text>
          <Text style={styles.title}>{partyDataState.date}</Text>
          <Text style={styles.title}>{partyDataState.time}</Text>
          <Text style={styles.title}>{partyDataState.address}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 5,
    margin: 10,
    width: '90%',
    aspectRatio: 1.5,
  },
  image: {
    width: '100%',
    height: '60%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginHorizontal: 10,
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
    marginHorizontal: 10,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});

export default Card;