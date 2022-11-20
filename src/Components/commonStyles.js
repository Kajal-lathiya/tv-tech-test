import EStyleSheet from 'react-native-extended-stylesheet';
import * as Colors from '../Theme/ColorConstants';

const styles = EStyleSheet.create({
    mainButtonView: {
        flex: 1,
        alignItems: 'center'
    },
    buttonView: {
        flexDirection: 'row',
        alignItems: 'center',
        height: '50rem',
        width: '241rem',
        borderRadius: '12rem',
        paddingLeft: '15rem',
        backgroundColor: Colors.White,
        elevation: '3rem',
        shadowOffset: {
            width: 0,
            height: '3rem',
        },
        shadowRadius: '3rem',
        shadowOpacity: 0.2,
    },
    bookImage: {
        width: '21rem',
        height: '18rem',
    },
    font17: {
        fontSize: '17rem',
        color: Colors.fontGray
    },
    marginL20: {
        marginLeft: '20rem'
    },
    imageSize18: {
        height: '18rem',
        width: '18rem'
    },
    imageSize24: {
        height: '24rem',
        width: '24rem'
    },
    rightArrowView: {
        height: '35rem',
        width: '48rem',
        borderRadius: '54rem',
        backgroundColor: Colors.themeRed,
        justifyContent: 'center',
        alignItems: 'center'
    },
    arrowMainView: {
        justifyContent: 'flex-end',
        paddingBottom: '20rem',
        paddingHorizontal: '22rem'
    },
    arrowButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    centeredView: {
        flex: 1,
        marginTop: '35rem',
    },
    modalView: {
        marginHorizontal: '21rem',
        marginBottom: '60rem',
        flex: 1,
        backgroundColor: 'white',
        borderRadius: '12rem',
        paddingHorizontal: '21rem',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    image24: {
        height: '24rem',
        width: '24rem',
        marginTop: '14rem',
        alignSelf: 'flex-end'
    },
    image22: {
        width: '23rem',
        height: '22rem',
        alignSelf: 'center',
        marginBottom: '14rem'
    },
    borderView: {
        borderTopWidth: 2,
        borderColor: Colors.borderGray
    },
    image65: {
        height: '65rem',
        width: '65rem'
    },
    ImageView: {
        flex: 1,
        marginHorizontal: '21rem',
        marginBottom: '31rem',
        marginTop: '7rem',
        justifyContent: 'center',
        borderRadius: '12rem',
        alignItems: 'center',
        backgroundColor: Colors.borderGray
    },
    font24B: {
        fontSize: '24rem',
        fontWeight: 'bold',
        color: Colors.fontBlack
    },
    flex1: {
        flex: 1
    },
    headerView: {
        flex: 1,
        paddingHorizontal: 22,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    listView: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft: '22rem',
        marginRight: '40rem',
        marginBottom: '10rem',
    },
    bulletView: {
        height: '25rem',
        width: '25rem',
        borderRadius: '100rem',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.themeBlue,
        marginRight: '11rem'
    },
    font13: {
        fontSize: '13rem',
        color: Colors.White
    },
    font18: {
        fontSize: '18rem',
        color: Colors.fontGray
    },
});
export default styles;