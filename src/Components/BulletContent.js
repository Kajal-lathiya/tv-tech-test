import React from 'react';
import { View, Text } from 'react-native';
import styles from './commonStyles';

export const BulletContent = props => {
    return (
        <View key={props.key} style={styles.listView}>
            <View style={styles.bulletView}>
                <Text style={styles.font13}>{props.contentID}</Text>
            </View>
            <Text style={[styles.font18, styles.flex1]}>{props.title}</Text>
        </View>
    );
};
export default BulletContent;