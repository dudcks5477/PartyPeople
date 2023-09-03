import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  chatContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  container: {
    flex: 1, 
    backgroundColor: '#222',
  },
  title: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 20,
  },
  tabWrapper: {
    flexDirection: 'row',
    marginBottom: 13,
  },
  tabButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabButtonText: {
    marginRight: 35
  },
  notificationBadge: {
    backgroundColor: 'black',
    borderRadius: 50,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
  },
  text: {
    color: '#fff',
    fontSize: 14
  },
  lineStyleMessage: {
    width: 60, 
    marginLeft: '0%', 
    backgroundColor: 'black'
  },
  lineStyleNotification: {
    width: 75, 
    marginLeft: '26%', 
    backgroundColor: 'black'
  },
  subText: {
    color: '#fff',
    fontSize: 12
  },
  smallText: {
    color: '#fff',
    fontSize: 10
  },
  lineStyle: {
    marginBottom: 10
  },
  flatListStyle: {
    flex: 1,
    width: '90%',
    marginHorizontal: '5%',
  }
});