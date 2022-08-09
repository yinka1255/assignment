import { StyleSheet, Dimensions } from "react-native"
const {height, width} = Dimensions.get('window');
import { colors, scale, PLATFORM_IOS } from '../util';
export default styles = StyleSheet.create ({
    header: {
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: PLATFORM_IOS ? scale(60) : scale(10),
    },

    headerA: {
        width: '100%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: colors.lightGray,
        paddingBottom: scale(6),
        marginBottom: scale(10),
    },
    headerCol0: {
        alignSelf: 'flex-start',
        flexDirection: 'row',
    },
    headerCol1: {
        alignSelf: 'flex-start'
    },
    headerCol3: {
        //alignSelf: 'flex-start'
    },
    headerCol2: {
        alignSelf: 'flex-end'
    },
    headerName: {
        fontFamily: 'Poppins-Black',
        color: colors.headerBlack,
        fontSize: scale(14),
        fontWeight: '600',
    },
    headerTitle: {
        fontFamily: 'Poppins-Black',
        color: colors.headerBlack,
        fontSize: scale(13),
        fontWeight: '600',
        marginTop: scale(6.3),
    },
    headerTitleA: {
        fontFamily: 'Poppins-Black',
        color: colors.headerBlack,
        fontSize: scale(14),
        fontWeight: '600',
        lineHeight: scale(30)
    },
    headerText: {
        fontFamily: 'Poppins-Regular',
        color: colors.gray,
        fontSize: scale(11),
        marginTop: scale(-3.3),
    },
    headerBackText: {
        fontFamily: 'Poppins-Black',
        color: colors.mainColor,
        fontSize: scale(12),
        fontWeight: '500',
        marginTop: scale(8.3)
    },
    headerLeftText: {
        fontFamily: 'Poppins-Black',
        color: colors.mainColor,
        fontSize: scale(14),
        fontWeight: '500',
        lineHeight: scale(30),
        marginTop: scale(3)
    },
    headerBackTextA: {
        fontFamily: 'Poppins-Black',
        color: colors.mainColor,
        fontSize: scale(12),
        fontWeight: '500',
        marginTop: scale(8.3)
    },
    backIcon: {
        marginRight: scale(10),
        marginTop: PLATFORM_IOS ? scale(12.6) : scale(13.6)
    },
    postCard: {
        width: width*0.9,
        alignSelf: 'center',
        borderRadius: scale(2),
        borderWidth: 1,
        borderColor: colors.lightGray,
        padding: scale(9),
        marginBottom: scale(10),
        flexDirection: 'row'
    },
    postCardNoBorder: {
        width: width*0.9,
        alignSelf: 'center',
        marginBottom: scale(10),
        flexDirection: 'row',
    },
    postPrice: {
        //color: colors.mainColor,
        fontFamily: 'Poppins-Regular',
        fontSize: scale(14),
        fontWeight: '500',
    },
    postPriceQ: {
        color: colors.mainColor,
        fontFamily: 'Poppins-Regular',
        fontSize: scale(14),
        fontWeight: '500',
    },
    postName: {
        color: colors.mainColor,
        fontFamily: 'Poppins-Regular',
        fontSize: scale(14),
        fontWeight: '500',
    },
    postNameT: {
        color: colors.mainColor,
        fontFamily: 'Poppins-Regular',
        fontSize: scale(14),
        fontWeight: '500',
        width: '60%'
    },
    postNameFull: {
        color: colors.mainColor,
        fontFamily: 'Poppins-Regular',
        fontSize: scale(14),
        fontWeight: '500',
    },
    clientName: {
        color: colors.mainColor,
        fontFamily: 'Poppins-Regular',
        fontWeight: '500',
        fontSize: scale(12),
        maxWidth: '65%',
        //color: colors.mainColor
    },
    postImage: {
        width: '20%',
        backgroundColor: colors.lightGray,
        paddingTop: width*0.04
    },
    postContent: {
        width: '80%',
        paddingLeft: 15,
    },
    postContentA: {
        width: '100%',
        paddingLeft: 5,
    },
    tags: {
        alignSelf: 'center'
    },
    postCardBottom: {
        flexDirection: 'row',
        marginTop: scale(10),
        justifyContent: 'space-between'
    },

    statusView: {
        marginTop: scale(10),
        alignSelf: 'flex-end',
        borderRadius: scale(10),
        //backgroundColor: colors.creditGreen,
    },
    status: {
        fontSize: scale(10),
        borderRadius: scale(5),
        paddingVertical: scale(2),
        paddingHorizontal: scale(10),
        fontFamily: 'Poppins-Regular',
        //color: colors.creditGreen
    },
    date: {
        color: colors.mainColor,
        fontFamily: 'Poppins-Regular',
        fontWeight: '400',
        fontSize: scale(12),
    },
    noDataImage: {
        alignSelf: 'center',
        marginTop: 50
    },
    listEmpty: {
        width: '100%',
    },
    listEmptyFull: {
        width: '100%',
        marginTop: height/10
    },
    listEmptyFullMinor: {
        width: '100%',
        marginTop: height/15
    },
    noDataText: {
        color: colors.gray,
        fontFamily: 'Poppins-Regular',
        fontWeight: '400',
        fontSize: scale(12),
        textAlign: 'center'
    },
    noDataText1: {
        color: colors.gray,
        fontFamily: 'Poppins-Regular',
        fontWeight: '400',
        fontSize: scale(12),
        textAlign: 'center',
        marginTop: scale(10),
        width: '70%',
        alignSelf: 'center'
    },
    modalView: {
        width: '100%',
        padding: scale(17),
        //paddingTop: scale(40),
        alignSelf: 'center',
        backgroundColor: colors.white,
        position: 'absolute',
        bottom: 0,
        height: '80%',
        borderTopLeftRadius: scale(20),
        borderTopRightRadius: scale(20),
    },
    mb90: {
        paddingTop: scale(10),
        marginBottom: scale(190)
    },
    
    closeIcon: {
        alignSelf: 'flex-end'
    },
    mrt15: {
        marginRight: 15,
        marginTop: 15
    },
    modal: {
        margin: 0,
        width: '100%',
        height: '100%',
    },
    label: {
        fontFamily: 'Poppins-Regular',
        fontSize: scale(13), 
        color: colors.headerBlack,
        marginBottom: scale(5),
    },
    input: {
        backgroundColor: colors.lightGray,
        height: scale(50),
        borderRadius: 5,
        width: '100%',
        paddingLeft: 25,
        //marginTop: scale(15),
        marginBottom: scale(15),
    },
    errorInline: {
        color: colors.errorRed
    },
    inputText: {
        marginTop: PLATFORM_IOS ? scale(14) : scale(10)
    },
    
    inputDate: {
        //backgroundColor: colors.lightGray,
        height: scale(42),
        width: '100%',
    },
    button: {
        marginTop: scale(20),
        backgroundColor: colors.mainColor,
        borderRadius: 4,
        width: '100%',
        height: scale(42),
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
      },
      
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
        lineHeight: scale(42)
    },
    postQuantityA: {
        textTransform: 'uppercase',
        fontSize: scale(10),
        fontFamily: 'Poppins-Regular',
        color: colors.mainColor
    },
    postQuantity: {
        
        //fontSize: scale(10),
        fontFamily: 'Poppins-Regular',
        color: colors.mainColor
    },
    inputQ: {
        backgroundColor: colors.white,
        color: colors.inputBg,
        height: scale(42),
        borderRadius: 4,
        width: '100%',
        paddingLeft: 2,
        fontSize: scale(12),
        //marginTop: scale(15),
        marginBottom: scale(15),
        borderRadius: 4,
        borderWidth: 1,
        borderColor: colors.inputBg,
        paddingLeft: 10,
    },
    alertIcon: {
        alignSelf: 'center',
       marginTop: scale(20),
        marginBottom: scale(10)
    },
    alertBody: {
        width: '90%',
        height: scale(300),
        backgroundColor: colors.white,
        alignSelf: 'center',
     },
    bg: {
        alignSelf: 'center',
        width: '80%', 
        //height: '80%',
        marginTop:scale(20),
    },
    alertText: {
        fontFamily: 'Poppins-Black',
        color: colors.headerBlack,
        fontSize: scale(14),
        fontWeight: '600',
        alignSelf: 'center',
        width: '80%',
        textAlign: 'center',
        marginBottom: scale(4),
    },
    alertSubText: {
        fontFamily: 'Poppins-Regular',
        color: colors.clientBlack,
        fontSize: scale(12),
        alignSelf: 'center',
        textAlign: 'center',
        width: '80%',
        
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        width: '90%',
        //marginTop: scale(20),
        position: 'absolute',
        bottom: scale(20)
    },
    _row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    loading: {
        marginLeft: 5,
        marginTop: scale(8.3),
    },
    alertButton: {
        marginTop: scale(20),
        backgroundColor: colors.mainColor,
        borderRadius: 4,
        //width: '100%',
        height: scale(42),
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
      },
      
    alertButtonText: { 
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
        lineHeight: scale(42)
    },
    alertButtonA: {
        marginTop: scale(20),
        backgroundColor: colors.green,
        borderRadius: 4,
        //width: '100%',
        height: scale(42),
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    filterIcon: {
        marginTop: scale(4)
    },

    topLinks: {
        marginTop: scale(2),
        width: '100%',
        alignSelf: 'center',
        borderColor: '#000',
        //borderWidth: 1,
        //borderRadius: 10,
        flexDirection: 'row',
        //padding: 2,
        marginBottom: scale(15),
        alignContent: 'center',
        height: scale(42)
        //justifyContent: 'center',
    },
    topLinkText: {
        alignSelf: 'center',
        width: '33.333%',
    },
    linkTextA: {
        backgroundColor: colors.mainColor,
        borderWidth: 1,
        //borderRadius: 10,
        width: '100%',
        color: '#fff',
        alignSelf: 'center',
        textAlign: 'center',
        lineHeight: scale(42),
        fontFamily: 'Poppins-Regular',
        fontSize: scale(12), 
    },
    linkTextA1: {
        //borderRadius: 10,
        backgroundColor: 'rgba(0, 51, 153, 0.1)',
        width: '100%',
        color: '#000',
        alignSelf: 'center',
        textAlign: 'center',
        lineHeight: scale(42),
        fontFamily: 'Poppins-Regular',
        fontSize: scale(12), 
    },
    small: {
        fontSize: scale(10),
    },

    description: {
        color: colors.mainColor,
        fontFamily: 'Poppins-Regular',
        fontSize: scale(12),
        textAlign: 'justify'
        //maxWidth: '65%',
    },
    postImage: {
        alignSelf: 'center',
        width: '100%',
        height: scale(250),
        marginBottom: scale(14),
        marginTop: scale(14)
    },
    
})