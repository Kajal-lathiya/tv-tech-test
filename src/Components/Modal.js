import React from 'react';
import { View, TouchableOpacity, Image, Modal } from 'react-native';
import styles from './commonStyles';

export const ModalComponent = props => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.modal_Visible}
            onRequestClose={props.onRequestClose}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <TouchableOpacity onPress={props.onPressClose}>
                        <Image
                            source={require('../Assets/closeIcon.png')}
                            resizeMode='cover'
                            style={styles.image24}
                        />
                    </TouchableOpacity>
                    <Image
                        source={require('../Assets/blurBookIcon.png')}
                        resizeMode='cover'
                        style={styles.image22}
                    />
                    <View style={styles.borderView} />
                    <View style={styles.ImageView}>
                        <Image
                            source={require('../Assets/emptyImage.png')}
                            resizeMode='cover'
                            style={styles.image65} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};
export default ModalComponent;