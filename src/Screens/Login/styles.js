import {Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import COLOR_CONST from '../../Theme/ColorConstants';
const Width = Dimensions.get('window').width;
const styles = EStyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: COLOR_CONST.black,
  },
  container: {
    flex: 1,
  },
  mainView: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: Width,
  },
  buttonView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  font16W: {
    fontSize: '16rem',
    color: COLOR_CONST.themeGray,
  },
  InputView: {
    width: Width - 40,
  },
  input: {
    height: '48rem',
    borderWidth: 1,
    backgroundColor: COLOR_CONST.themeGray,
    marginTop: '8rem',
    marginBottom: '24rem',
    justifyContent: 'center',
    paddingLeft: '16rem',
    fontSize: '16rem',
  },
  marginTop30: {
    marginTop: '30rem',
  },
  submitBtn: {
    height: '50rem',
    backgroundColor: COLOR_CONST.themeBtnColor,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '40rem',
    borderRadius: '50rem',
    marginHorizontal: '7rem',
  }
});
export default styles;
