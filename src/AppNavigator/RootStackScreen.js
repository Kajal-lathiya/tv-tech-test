import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from "../Screens/Login/loginScreen";
import OverView from '../Screens/OverView/OverViewScreen';
const Stack = createNativeStackNavigator();

const RootStackScreen = props => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="OverView"
        component={OverView}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default RootStackScreen;
