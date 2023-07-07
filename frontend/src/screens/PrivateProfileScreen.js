import React, {useState} from 'react';
import {View, Text, Modal, TouchableOpacity, Pressable, Dimensions} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import {styles} from '../styles/PrivateProfileStyle';
import Line from '../components/Line';
import SettingItem from '../components/SettingItem';

const PrivateProfileScreen = ({ navigation }) => {

  const [modalVisible, setModalVisible] = useState(false);
  const [partyName, setPartyName] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [numOfPeople, setNumOfPeople] = useState('');
  const [description, setDescription] = useState('');

  const onItemPress = (itemName) => {
    console.log(`${itemName} clicked`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>프로필</Text>
      <Line style={styles.line} />
      <View style={styles.profileInfo}>
        <MaterialIcons 
          name="account-circle" 
          size={60} color="gray" 
          style={styles.profileIcon} />
        <View style={styles.profileTextContainer}>
          <Text style={styles.profileText}>주최자</Text>
          <Text style={styles.profileText}>Show profile</Text>
        </View>
      </View>
      <View style={styles.partyInfoContainer}>
        <Text style={styles.partyInfoText}>참석 예정</Text>
        <Modal
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}
        >
          <TouchableOpacity
            style={styles.modalOverlay}
            onPress={() => setModalVisible(false)}
          >
            <View style={styles.centeredView}>
              <View style={[styles.modalView, { marginTop: 'auto' }]}>
                <Text style={styles.modalText}>
                  파티이름: {partyName} {'\n'}
                  날짜: {date}{'\n'}
                  시간: {time}{'\n'}
                  인원: {numOfPeople}{'\n'}
                  설명: {description}
                </Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.textStyle}>닫기</Text>
                </Pressable>
                <TouchableOpacity
                  style={styles.navigateButton}
                  onPress={() => {
                    navigation.navigate('PartyDetail');
                  }}
                >
                  <Text style={styles.navigateText}>Navigate</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
      <Line />
      <View style={styles.settingsContainer}>
        <Text style={styles.settingsText}>세팅</Text>
        
        <SettingItem
          iconName="account-circle"
          label="Personal Information"
          onPress={() => onItemPress('Personal Information')}
        />

        <SettingItem
          iconName="admin-panel-settings"
          label="Login & Security"
          onPress={() => onItemPress('Login & Security')}
        />

        <SettingItem
          iconName="payments"
          label="Payments and payouts"
          onPress={() => onItemPress('Payments and payouts')}
        />

        <SettingItem
          iconName="note"
          label="Taxes"
          onPress={() => onItemPress('Taxes')}
        />
        
      </View>
    </View>
  );
};

PrivateProfileScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default PrivateProfileScreen;