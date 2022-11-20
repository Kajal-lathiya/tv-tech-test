import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';
import CommonStyles from '../CommonStyles';

export default function OverView({navigation}) {
  return (
    <SafeAreaView style={CommonStyles.appContainer}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Text style={CommonStyles.font16W}>OverView</Text>
    </SafeAreaView>
  );
}
