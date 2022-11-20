import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './commonStyles';

export const ButtonComponent = props => {
    return (
        <View style={styles.mainButtonView}>
            <TouchableOpacity style={styles.buttonView}
                onPress={props.onPress}>
                <Image source={props.image}
                    resizeMode="cover"
                    style={styles.bookImage} />
                <Text style={[styles.font17, styles.marginL20]}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    );
};
export default ButtonComponent;