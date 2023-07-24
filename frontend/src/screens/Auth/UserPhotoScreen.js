import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import ProgressBar from '../../components/ProgressBar';
import Button from '../../components/Button';
import {styles as agreementStyles} from '../../styles/AgreementStyle';
import {styles as userPhotoStyles} from '../../styles/UserPhotoStyle';

const UserPhotoScreen = () => {
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState(null); 

  const requestPermissions = async () => {
    const cameraPermission = await check(PERMISSIONS.ANDROID.CAMERA);
    const storagePermission = await check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
    
    console.log('Before request', cameraPermission, storagePermission);
    
    if (cameraPermission !== RESULTS.GRANTED) {
      const result = await request(PERMISSIONS.ANDROID.CAMERA);
      if (result !== RESULTS.GRANTED) {
        alert('이 기능을 사용하려면 카메라 권한이 필요합니다.');
        return false;
      }
    }
  
    if (storagePermission !== RESULTS.GRANTED) {
      const result = await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
      if (result !== RESULTS.GRANTED) {
        alert('이 기능을 사용하려면 저장소 권한이 필요합니다.');
        return false;
      }
    }
    
    return true;
  };
  
  const pickImage = async () => {
    if (await requestPermissions()) {
      ImagePicker.openPicker({
        width: 200,
        height: 300,
        cropping: true,
      }).then(image => {
        setSelectedImage({uri: image.path});
      }).catch(error => {
        console.log('ImagePicker error', error);
      });
    }
  };

  return(
    <View style={agreementStyles.background}>
      <View style={agreementStyles.container}>
        <ProgressBar progress={60}/>

        <Text style={agreementStyles.title}>프로필 사진을</Text>
        <Text style={agreementStyles.title}>등록해주세요.</Text>

        <Text style={agreementStyles.subTitle}>프로필 사진은 얼굴이 잘 나온 사진으로 등록해주세요.</Text>

        <TouchableOpacity onPress={pickImage} style={userPhotoStyles.userImage}>
          {selectedImage 
            ? <Image source={selectedImage} style={userPhotoStyles.imageSource} />
            : (
              <View style={userPhotoStyles.basicImage}>
                <Icon name='plus' size={30} color="#fff"/>
              </View>
            )  
          }
        </TouchableOpacity>


        <Text style={agreementStyles.subTitle}>
          {`사진은 본인 인증을 위해 사용됩니다. 타인의 사진을 게재하면 경고 없이 계정이 
영구 차단될 수 있으며 형사처벌을 받을 수 있습니다.`}</Text>
      </View>

      <View style={[agreementStyles.btnContainer, { marginLeft: 30 }]}>
        <Button 
          text='나가기'
          onPress={() => navigation.navigate('UserInfo')}
          style={agreementStyles.outBtn}
        />
        <Button
          text='다음'
          onPress={() => {
            if (selectedImage) {
              navigation.navigate('Country');
            } else {
              alert('사진을 업로드해주세요.');
            }
          }}
          style={[agreementStyles.inBtn, {
            backgroundColor: selectedImage ? '#B39DDB' : '#fff'
          }]}
        />
      </View>
    </View>
  );
};

export default UserPhotoScreen;
