import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import styles from './commonStyles';

export const BottomComponent = props => {
    return (
        <View style={styles.arrowMainView}>
            <View style={styles.arrowButton}>
                <TouchableOpacity>
                    <Image source={require('../Assets/ArrowLeft.png')}
                        resizeMode="cover"
                        style={styles.imageSize18} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.rightArrowView}>
                    <Image source={require('../Assets/ArrowRight.png')}
                        resizeMode="cover"
                        style={styles.imageSize24} />
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default BottomComponent;