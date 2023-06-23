import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {styles} from './Styles/AddStyles';

const PhotoUpload = ({photos, setPhotos}) => {
  const [modalVisible, setModalVisible] = React.useState(false);

  const handleImagePicker = () => {
    ImagePicker.openPicker({
      multiple: true,
      mediaType: 'photo',
    }).then(selectedImages => {
      setPhotos([...photos, ...selectedImages]);
    });
  };

  return (
    <View style={styles.photoUploadContainer}>
      <Text style={{color: 'white', marginBottom: 10}}>사진 업로드</Text>
      <ScrollView horizontal={true} style={{marginBottom: 10}}>
        {photos.map((photo, index) => (
          <TouchableOpacity key={index} onPress={() => setModalVisible(true)}>
            <Image source={{uri: photo.path}} style={styles.thumbnail} />
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          onPress={handleImagePicker}
          style={styles.addPhotoButton}>
          <Text style={{color: 'white'}}>+ 사진 추가</Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.modalCloseButton}
            onPress={() => setModalVisible(false)}>
            <Text style={{color: 'white'}}>닫기</Text>
          </TouchableOpacity>
          <ScrollView>
            {photos.map((photo, index) => (
              <Image
                key={index}
                source={{uri: photo.path}}
                style={styles.fullSizeImage}
                resizeMode="contain"
              />
            ))}
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

export default PhotoUpload;
