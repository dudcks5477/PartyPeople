import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    position: 'absolute',
    top: 52,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  centeredContent: {
    alignItems : 'center'
  },
  input: {
    width: 341,
    height: 37,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
    backgroundColor: '#D2D2D2'
  },
  text: {
    width: 341,
    color: 'white',
    fontSize: 12,
    textAlign: 'center'
  },
  NextButton: {
    position: 'absolute',
    top: 600,
    width: 206,
    height: 49,
    backgroundColor: 'rgba(210, 210, 210, 0.5)',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  NextButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
});