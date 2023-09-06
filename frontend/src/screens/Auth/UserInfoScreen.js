import React, {useState} from 'react';
import {View, Text, TextInput, Modal, TouchableOpacity, FlatList, TouchableWithoutFeedback} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import ProgressBar from '../../components/ProgressBar';
import {styles as agreementStyles} from '../../styles/SignNumberStyle';
import {styles as userInfoStyles} from '../../styles/UserInfoStyle';
import Button from '../../components/Button';

const UserInfoScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedGender, setSelectedGender] = useState('선택');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
;
  const [date, setDate] = useState(null);

  const data = ['선택', '남성', '여성'];

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleSelect(item)}>
      <Text>{item}</Text>
    </TouchableOpacity>
  );

  const handleSelect = (gender) => {
    setSelectedGender(gender);
    setModalVisible(false);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDate(date);
    hideDatePicker();
  };

  return (
    <View style={agreementStyles.background}>
      <View style={agreementStyles.container}>
        <ProgressBar progress={40}/>

        <Text style={agreementStyles.title}>기본정보를</Text>
        <Text style={agreementStyles.title}>입력해주세요</Text>

        <Text style={agreementStyles.subTitle}>프로필을 구성하는 가장 기본적인 정보예요.</Text>

        <View style={userInfoStyles.info}>
          <Text style={userInfoStyles.infoName}>이름</Text>
          <TextInput 
            placeholder='이름 (최대 8자)'
            placeholderTextColor="gray"
            style={[userInfoStyles.infoTextInput, {
              color: name != '' ? 'white' : 'gray'
            }]}
            onChangeText={setName}
            value={name}
          />
        </View>

        <View>
          <View style={userInfoStyles.info}>
            <Text style={userInfoStyles.infoName}>성별</Text>
            <TouchableOpacity 
              style={userInfoStyles.infoInput}
              activeOpacity={1}
              onPress={() => setModalVisible(true)}
            >
              <Text style={{ color:(selectedGender === '남성' || selectedGender === '여성') ? 'white' : 'gray'}}>{selectedGender ? selectedGender : '선택'}</Text>
            </TouchableOpacity>
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
          >
            <TouchableOpacity
              style={userInfoStyles.infoSexSelect1}
              activeOpacity={1}
              onPressOut={() => setModalVisible(false)}
            >
              <TouchableWithoutFeedback>
                <View style={userInfoStyles.infoSexSelect2}>
                  <FlatList
                    data={data}
                    renderItem={({item}) => 
                      <Text 
                        style={{marginVertical: 5}} 
                        onPress={(e) => {
                          e.stopPropagation();
                          setSelectedGender(item);
                          setModalVisible(false);
                        }}
                      >
                        {item}
                      </Text>
                    }
                    keyExtractor={item => item}
                  />
                </View>
              </TouchableWithoutFeedback>
            </TouchableOpacity>
          </Modal>
        </View>

        <View style={userInfoStyles.info}>
          <Text style={userInfoStyles.infoName}>생일</Text>
          <TouchableOpacity
            style={userInfoStyles.infoInput}
            onPress={showDatePicker}
          >
            <Text style={{ color: date ? 'white' : 'gray' }}>
              {date ? `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}` : '1998.03.18'}
            </Text>
          </TouchableOpacity>

          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode='date'
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>
        
      </View>

      <View style={[agreementStyles.btnContainer, {
        marginLeft: 30
      }]}>
        <Button 
          text='나가기'
          onPress={() => navigation.navigate('Agreement')}
          style = {agreementStyles.outBtn}
        />
        <Button
          text='다음'
          onPress={() => {
            if (name && selectedGender !== '선택' && date) {
              navigation.navigate('UserPhoto');
            } else {
              alert('모든 필수 항목을 입력해주세요.');
            }
          }}
          style={[agreementStyles.inBtn, {
            backgroundColor: (name && selectedGender !== '선택' && date) ? '#B39DDB' : '#fff'
          }]}
        />
      </View>
    </View>
  );
};

export default UserInfoScreen;