import React, {useState} from 'react';
import {View, TouchableOpacity, Text, FlatList} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {styles} from '../styles/ChatStyle';
import Line from '../components/Line';

const ChatScreen = ({ navigation }) => {

  const [userId, setuserId] = useState();
  const [selectedTab, setSelectedTab] = useState('message');
  const [messageCount, setMessageCount] = useState(0);
  const [notificationCount, setNotificationCount] = useState(0);
  const [chatRooms, setChatRooms] = useState([]);

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        onPress={() => 
          navigation.navigate('ChatRoomScreen', {
            chatRoomId: item.chatRoomId,
            partyName: item.partyName,
            isHost: item.hostId === userId,
          })
        }
      >
        <View style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
          <MaterialIcons name="account-circle" size={60} color="gray" 
            style={{marginRight: 2}} />
          <View style={{ flexDirection: 'column'}}>
            <Text style={{ fontSize: 14 }}>{item.partyName}</Text>
            <Text style={{ fontSize: 12 }}>{item.hostId === 'myHostId' ? '주최자' : '참석자'}</Text>
            <Text style={{ fontSize: 10 }}>{`${item.attendeesCount}명 참석자`}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={{flex: 1, backgroundColor: '#222'}}>
      <Text>채팅</Text>
      <View style={{ marginTop: 20, width: '90%', marginHorizontal: '5%' }}>
        <View style={{ flexDirection: 'row', marginBottom: 13 }}>
          <TouchableOpacity onPress={() => setSelectedTab('message')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={[styles.text, {marginRight: 35}]}>Message</Text>
              {messageCount > 0 && (
                <View style={styles.notificationBadge}>
                  <Text style={styles.badgeText}>{messageCount}</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedTab('notification')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.text}>
                {notificationCount > 0 && (
                  <View style={styles.notificationBadge}>
                    <Text style={styles.badgeText}>
                      {notificationCount}
                    </Text>
                  </View>
                )}
              </Text>
            </View>
          </TouchableOpacity>
        </View> 
        {selectedTab === 'message' && <Line style={{ width: 60, marginLeft: '0%', backgroundColor: 'black'}}/>} 
        {selectedTab === 'notification' && (
          <Line style={{width: 75, marginLeft: '26%', backgroundColor: 'black'}} />
        )}
      </View>
      <Line style= {{ marginBottom: 10 }} />
      <View style={{ flex: 1 }}>
        <FlatList
          style={{ width: '90%' , marginHorizontal: '5%' }}
          data={chatRooms}
          keyExtractor={(item) => item.chatRoomId}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default ChatScreen;