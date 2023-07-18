import { StyleSheet } from 'react-native';

export const progressStyles = (progress) => StyleSheet.create({
  container: {
    height: 5,
    width: '90%',
    marginTop: 10,
    marginBottom: 30
  },
  emptyBar: {
    flexDirection: 'row', 
    height: '100%', 
    width: '100%', 
    backgroundColor:'#d2d2d2',
    borderRadius: 10
  },
  fillBar: {
    backgroundColor: '#B39DDB', 
    width: `${progress}%`,
    borderRadius: 10
  }
});