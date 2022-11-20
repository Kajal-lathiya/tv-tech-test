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

export default function LoginScreen({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onsubmit = () => {
        console.log('click');
        if (email == '') {
            alert('Please enter email')
        } else if(password == '') {
            alert('Please enter password')
        } else if (email != '' && password != '') {
            navigation.navigate('OverView') 
        }
    }
  return (
    <SafeAreaView style={CommonStyles.appContainer}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.mainView}>
        <Text style={CommonStyles.font16W}>Login to Niveza</Text>
        <View style={[styles.InputView, styles.marginTop30]}>
          <Text style={CommonStyles.font16W}>Email address</Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
                      value={email}
                      onChangeText={(val)=>setEmail(val)}
          />
        </View>
        <View style={styles.InputView}>
          <Text style={CommonStyles.font16W}>Password</Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
                      value={password}
                      onChangeText={(val)=>setPassword(val)}
                      
          />
        </View>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.submitBtn} onPress={onsubmit}>
          <Text style={CommonStyles.font16W}>Enter</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
