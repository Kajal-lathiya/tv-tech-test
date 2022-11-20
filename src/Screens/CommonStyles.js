
import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import COLOR_CONST from '../Theme/ColorConstants';

const CommonStyles = EStyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor:COLOR_CONST.black,
    },
    font16W: {
        fontSize: '16rem',
        color: COLOR_CONST.themeFontColor,
    },
    font18W: {
        fontSize: '18rem',
        color: COLOR_CONST.themeFontColor,
    },
    font14Green: {
        fontSize: '14rem',
        color: COLOR_CONST.green,
    },
    font14red: {
        fontSize: '14rem',
        color: COLOR_CONST.red,
    },
    fontBold: {
        fontWeight:'bold'
    },
    fontWhite: {
    color:COLOR_CONST.white,    
    },
    font30W: {
        fontSize: '30rem',
        color: COLOR_CONST.themeFontColor,
    }

});
export default CommonStyles;