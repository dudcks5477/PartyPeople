import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  searchBarContainer: {
    width: '90%',
    alignself: 'center',
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    paddingBottom: 10,
  },
  searchBarInputContainer: {
    backgroundColor: '#EDEDED',
  },
  item: {
    width: '90%',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
    color: 'white'
  }
});