import { StyleSheet } from 'react-native';

export const progressStyles = (progress) => StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: 10, 
    marginBottom: 10
  },
  emptyBar: {
    flexDirection: 'row', 
    height: 5, 
    width: '90%', 
    backgroundColor:'#d2d2d2',
    borderRadius: 10
  },
  fillBar: {
    backgroundColor: '#B39DDB', 
    width: `${progress}%`,
    borderRadius: 10
  }
});