import EStyleSheet from 'react-native-extended-stylesheet';
import COLOR_CONST from '../../Theme/ColorConstants';

const styles = EStyleSheet.create({
    main: {
        flex: 1.8,
        justifyContent: 'flex-end',
        marginBottom: '10rem',
        marginHorizontal: '7rem',
    },
    sectionList: {
        flex:2,
    },
    margin10: {
        marginLeft: '10rem',
        marginBottom:'10rem'
    },
    entityView: {
        flexDirection: 'row',
        alignItems:'center',
        marginBottom:'10rem',
        height: '70rem',
        borderRadius: '5rem',
        marginHorizontal: '7rem',
        paddingHorizontal:'25rem',
        backgroundColor: COLOR_CONST.themeGray,
    },
    marginB10: {
        marginBottom:'10rem',
    },
    imageSize18: {
        height: '15rem',
        width:'15rem'
    },
    entityDetails: {
        flex: 1,
        paddingLeft:'7rem'
    },
    row: {
        flexDirection: 'row',
        alignItems:'center'
    },
    flex1: {
        flex:1
    },
    marginTL: {
      marginTop:'20rem', 
      marginLeft:'15rem', 
    },
    userImage: {
        height: '40rem',
        width: '40rem',
        marginRight:'5rem'
    },
    subView: {
        backgroundColor: COLOR_CONST.themeGray,
        borderRadius:'10rem',
        paddingHorizontal:'10rem'
    },
    titleView: {
        borderRightWidth:'2rem'
    },
    subTitle: {
        marginTop:'5rem',
        marginLeft:'15rem'
    },
    borderTop: {
        borderTopWidth:'2rem'
    },
    refresh: {
        justifyContent: 'flex-end',
        paddingBottom:'3rem'
    }

});
export default styles;
