
import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import COLOR_CONST from '../Theme/ColorConstants';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

const CommonStyles = EStyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor:COLOR_CONST.black,
    },
    font16W: {
        fontSize: '16rem',
        color: COLOR_CONST.white,
    },
});
export default CommonStyles;