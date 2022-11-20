import React, { useState } from 'react';
import { View, FlatList, ImageBackground } from 'react-native';
import ButtonComponent from '../../Components/Button';
import BottomComponent from '../../Components/BottomComponent';
import ModalComponent from '../../Components/Modal';
import HeaderCompenent from '../../Components/Header';
import BulletContent from '../../Components/BulletContent';
import styles from './styles';
const DATA = [
    {
        id: '1',
        title: 'Understand what patterns drive your anxiety',
    },
    {
        id: '2',
        title: 'Learn validated tools to change those patterns',
    },
    {
        id: '3',
        title: 'Practice reducing anxiety in a safe space',
    },
];
export default function Home() {
    const [modalVisible, setModalVisible] = useState(false);
    const renderItem = ({ item, key }) => {
        return (
            <BulletContent
                key={key}
                contentID={item.id}
                title={item.title}
            />
        );
    };

    return (
        <>
            <ImageBackground
                source={require('../../Assets/gradient-bg-main.png')}
                resizeMode="cover"
                style={[styles.container,
                ]}>
                <HeaderCompenent
                    title={'To reach this goal, we will:'} />
                <View style={styles.mainView}>
                    <FlatList data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id} />
                </View>
                <ButtonComponent
                    image={require('../../Assets/bookIcon.png')}
                    title={'What will I learn?'}
                    onPress={() => setModalVisible(true)}
                />
                <BottomComponent />
            </ImageBackground>
            <ModalComponent
                modal_Visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}
                onPressClose={() => setModalVisible(!modalVisible)}
            />
        </>
    );
}

