import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#222'
  },
  container: {
    flex: 1,
    width: '100%',
    marginLeft: '5%',
    marginRight: '5%',
    backgroundColor: '#222'
  },
  title: {
    fontSize: 30,
    fontFamily: 'GamjaFlower-Regular',
    color: '#fff'
  },
  subTitle: {
    marginTop: 12,
    marginBottom: 50,
    fontSize: 12,
    color: '#fff'
  },
  subContainer: {
    flex: 1
  },
  agreements: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 10,
  },
  importText: {
    color: 'red',
    fontSize: 15,
  },
  textAgreements: {
    fontSize: 15,
    color: '#fff'
  },
  btnContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    borderRadius: 14
  },
  outBtn: {
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#fff', 
    padding: 10, 
    marginRight: 20,
    width: 100
  },
  inBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    width: 100,
    marginRight: 40,
  },
});