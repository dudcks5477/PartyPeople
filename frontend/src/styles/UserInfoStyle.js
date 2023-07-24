import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  info: {
    flexDirection: 'row', 
    alignItems: 'center', 
    flexWrap: 'wrap'
  },
  infoName: {
    marginBottom: 10, 
    color: 'white', 
    marginRight: 30
  },
  infoTextInput: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1, 
    marginBottom: 10, 
    borderRadius: 5, 
    width: 298, 
  },
  infoInput: { 
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1, 
    marginBottom: 10, 
    borderRadius: 5, 
    paddingLeft: 3, 
    width: 298, 
    justifyContent: 'center'
  },
  infoSexSelect1: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  infoSexSelect2: { 
    backgroundColor: 'white', 
    padding: 20, 
    borderRadius: 5, 
    width: '80%'}
});