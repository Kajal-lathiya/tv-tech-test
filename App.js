import { LogBox, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootStackScreen from './src/AppNavigator/RootStackScreen';
import EStyleSheet from 'react-native-extended-stylesheet';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });


LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

export default function App() {
    return (
         <NavigationContainer>
        <RootStackScreen/>
        </NavigationContainer>
    );
}