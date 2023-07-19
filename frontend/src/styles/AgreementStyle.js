import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginLeft: '5%',
    marginRight: '5%',
  },
  title: {
    fontSize: 30,
    fontFamily: 'GamjaFlower-Regular',
  },
  subTitle: {
    marginTop: 12,
    marginBottom: 50,
    fontSize: 12,
  },
  subContainer: {
    flex: 1
  },
  agreements: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 10
  },
  importText: {
    color: 'red',
    fontSize: 15
  },
  textAgreements: {
    fontSize: 15
  },
  btnContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  outBtn: {
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#DDD', 
    padding: 10, 
    marginRight: 20,
    width: 100
  },
  inBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDD',
    padding: 10,
    width: 100,
    marginRight: 40,
  }
});