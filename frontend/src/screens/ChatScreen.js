import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PropTypes from 'prop-types';

import { styles } from '../styles/ChatStyle';
import Line from '../components/Line';

const ChatScreen = ({ navigation }) => {
  const [userId, setUserId] = useState();
  const [selectedTab, setSelectedTab] = useState('message');
  const [messageCount] = useState(0);
  const [notificationCount] = useState(0);
  const [chatRooms, setChatRooms] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchChatRooms = async () => {
    try {
      const storedUserId = JSON.parse(await AsyncStorage.getItem('userId'));
      setUserId(storedUserId);
      const response = await fetch('http://ec2-13-209-74-82.ap-northeast-2.compute.amazonaws.com:8080/api/chatRooms', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        console.error('Failed to fetch chat rooms');
        return [];
      }
    } catch (error) {
      console.error('Error fetching chat rooms:', error);
      return [];
    }
  };

  const fetchData = async () => {
    try {
      const chatRoomsData = await fetchChatRooms();
      setChatRooms(chatRoomsData);
    } catch (error) {
      console.log('Error fetching data', error);
    }
  };

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
        <View style={styles.chatContainer}>
          <MaterialIcons name="account-circle" size={60} color="gray" 
            style={{ marginRight: 2 }} />
          <View style={{ flexDirection: 'column' }}>
            <Text style={styles.text}>{item.partyName}</Text>
            <Text style={styles.subText}>{item.hostId === 'myHostId' ? '주최자' : '참석자'}</Text>
            <Text style={styles.smallText}>{`${item.attendeesCount}명 참석자`}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <Text>채팅</Text>
      <View style={styles.title}>
        <View style={styles.tabWrapper}>
          <TouchableOpacity onPress={() => setSelectedTab('message')}>
            <View style={styles.tabButton}>
              <Text style={[styles.text, styles.tabButtonText]}>Message</Text>
              {messageCount > 0 && (
                <View style={styles.notificationBadge}>
                  <Text style={styles.badgeText}>{messageCount}</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedTab('notification')}>
            <View style={styles.tabButton}>
              <Text style={styles.text}>
                {notificationCount > 0 && (
                  <View style={styles.notificationBadge}>
                    <Text style={styles.badgeText}>{notificationCount}</Text>
                  </View>
                )}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        {selectedTab === 'message' && <Line style={styles.lineStyleMessage} />}
        {selectedTab === 'notification' && (
          <Line style={styles.lineStyleNotification} />
        )}
      </View>
      <Line style={styles.lineStyle} />
      <View style={styles.flatListStyle}>
        <FlatList
          data={chatRooms}
          keyExtractor={(item) => item.chatRoomId}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

ChatScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ChatScreen;
