import React from 'react';
import {View, ScrollView, Alert} from 'react-native';
import Header from '../component/Header';
import InputFields from '../component/InputFields';
import PartyDescription from '../component/PartyDescription';
import PhotoUpload from '../component/PhotoUpload';
import Button from '../component/Button';
import {styles} from '../styles/AddStyles';

const AddParty = () => {
  const [partyName, setPartyName] = React.useState('');
  const [numOfPeople, setNumOfPeople] = React.useState(0);
  const [coin, setCoin] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [photos, setPhotos] = React.useState([]);

  const handleGoBack = () => {
    // 이전 화면으로 돌아가는 기능을 구현합니다.
  };

  const handleSaveParty = () => {
    // 파티 정보를 저장하는 기능을 구현합니다.
    if (
      partyName &&
      numOfPeople > 0 &&
      coin &&
      description &&
      photos.length > 0
    ) {
      // 필요한 모든 정보가 입력되었을 경우 파티를 저장합니다.
      // 파티 저장 로직을 구현합니다.
      Alert.alert('알림', '파티가 저장되었습니다.');
    } else {
      Alert.alert('경고', '모든 필드를 입력해주세요.');
    }
  };

  return (
    <View style={styles.container}>
      <Header handleGoBack={handleGoBack} />
      <ScrollView style={styles.content}>
        <InputFields
          partyName={partyName}
          setPartyName={setPartyName}
          numOfPeople={numOfPeople}
          setNumOfPeople={setNumOfPeople}
          coin={coin}
          setCoin={setCoin}
        />
        <PartyDescription
          description={description}
          setDescription={setDescription}
        />
        <PhotoUpload photos={photos} setPhotos={setPhotos} />
        <Button title="저장" onPress={handleSaveParty} />
      </ScrollView>
    </View>
  );
};

export default AddParty;
