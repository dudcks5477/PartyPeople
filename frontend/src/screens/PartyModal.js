import React from 'react';
import { View, Modal, TouchableOpacity, Image, Text } from 'react-native';
import { styles } from '../styles/MapStyle';
import PropTypes from 'prop-types';

const PartyModal = ({ isVisible, party, onDetailPress, onClose }) => (
  <Modal
    transparent={true}
    visible={isVisible}
    onRequestClose={onClose}
  >
    <TouchableOpacity
      style={styles.modalOverlay}
      onPress={onClose}
    >
      <View style={styles.centeredView}>
        <View style={[styles.modalView, {
          marginTop: 'auto'
        }]}>
          {/* Iamge and Text */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            {/* Display Image */}
            {party?.imageUrls?.[0] &&
              <Image
                source={{ uri: party.imageUrls[0] }}
                style={{ width: 100, height: 100, marginRight: 15 }}
                borderRadius={10}
                height={200}
              />
            }
            {/* Text */}
            <View style={{ flex: 1, marginRight: 10 }}>
              <Text style={styles.modalText}>
                {`파티 제목: ${party?.partyName}\n`}
                {`날짜 시간: ${party?.partyDateTime}\n`}
                {`총 인원: ${party?.numOfPeople}\n`}
                {`소개: ${party?.content}\n`}
                {`주소: ${party?.partyLocation}\n`}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.navigateButton}
            onPress={onDetailPress}
          >
            <Text style={styles.navigateText}>
              Navigate
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  </Modal>
);

PartyModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  party: PropTypes.object,
  onDetailPress: PropTypes.func,
  onClose: PropTypes.func,
};

export default PartyModal;
