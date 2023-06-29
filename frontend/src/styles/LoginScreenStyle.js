import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItem: 'center',
    backgroundColor: '#222',
    paddingHorizontal: '5%',
  },
  loginText: {
    color: '#fff',
    position: 'absolute',
    top: 92,
    alignSelf: 'center',
    fontSize: 32,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 60,
    width: '100%',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    backgroundColor: '#d2d2d2',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  button: {
    width: '100%',
    backgroundColor: '#000',
    padding: 12,
    marginBottom: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  }
});