import React from 'react';
import { View, Text } from 'react-native';
import styles from './commonStyles';

export const HeaderCompenent = props => {
    return (
        <View style={styles.headerView}>
            <Text style={styles.font24B}>{props.title}</Text>
        </View>
    );
};
export default HeaderCompenent;