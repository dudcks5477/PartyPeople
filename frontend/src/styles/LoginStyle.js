import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
    backgroundColor: 'transparent',
  },
  appName: {
    color: '#B39DDB',
    position: 'absolute',
    top: '30%',
    alignSelf: 'center',
    fontSize: 37,
    fontWeight: 'bold',
  },
  signInButton: {
    width: '100%',
    height: 48,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  allButton: {
    backgroundColor: '#d2d2d2'
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  icon: {
    width: 20,
    height: 20,
  }
});
