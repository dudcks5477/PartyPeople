import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 30,
  },
  cardContainer: {
    alignItems: 'center', 
    marginTop: 10
  },
  cardImage: {
    width: 362,
    height: 154,
    borderRadius:8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
  },
  cardText: {
    position: 'absolute',
    left: 16,
    bottom: 16,
    textAlign: 'left',
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold'
  }
});