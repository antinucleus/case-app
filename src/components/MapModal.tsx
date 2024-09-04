import React from 'react';
import { StyleSheet } from 'react-native';
import { Portal, Modal, IconButton } from 'react-native-paper';

import { Map } from './Map';

type Props = { lat: number; lng: number; showModal: boolean; setShowModal: (s: boolean) => void };

export const MapModal = ({ lat, lng, showModal, setShowModal }: Props) => {
  const handleCloseModal = () => setShowModal(false);

  return (
    <Portal>
      <Modal
        dismissableBackButton
        dismissable={false}
        visible={showModal}
        contentContainerStyle={styles.containerStyle}>
        <IconButton style={styles.icon} icon="close" onPress={handleCloseModal} />
        <Map lat={lat} lng={lng} />
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'white',
    padding: 20,
    height: '50%',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
  },
  icon: { alignSelf: 'flex-end' },
});
