import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    position: 'absolute',
    top: 177,
    alignItems: 'center'
  },
  headerText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff'
  },
  subHeaderText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff'
  },
  signUpButton: {
    position: 'absolute',
    top: 600,
    width: 206,
    height: 49,
    backgroundColor: 'rgba(210, 210, 210, 0.5)',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  loginButton: {
    position: 'absolute',
    top: 660,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  }
});
