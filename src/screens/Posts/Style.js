import { StyleSheet, Dimensions } from "react-native"
const {height, width} = Dimensions.get('window');
import { colors, scale, PLATFORM_IOS} from '../../util';
export default styles = StyleSheet.create ({
    body: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.white,
    },
    contentBody: {
        width: '90%',
        alignSelf: 'center',
        marginTop: scale(25),
        height: '100%',
    },
    clientsView: {
        width: width,
        //height: '100%',
       
        
    },
    mb100: {
        marginTop: scale(5),
        paddingBottom: scale(175),
        height: '100%',
    },
    mt15: {
        marginTop: scale(25),
        width: '90%',
        alignSelf: 'center',
        flex: 1,
    },
    fab: {
        position: 'absolute',
        bottom: scale(80),
        right: scale(10)
    },
    labelText: {
        color: colors.inputBg,
        width: '100%',
        paddingLeft: 2,
        fontSize: scale(12),
        marginTop: scale(13)
    },
    button: {
        //elevation: 2,
        //marginTop: scale(20),
        position: 'absolute',
        bottom: scale(30),
        backgroundColor: colors.mainColor,
        borderRadius: 4,
        width: '90%',
        alignSelf: 'center',
        height: scale(42),
        flexDirection: 'row',
        justifyContent: 'center'
      },
      
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
        lineHeight: scale(42),
    },
    loading: {
        marginLeft: 5,
    },
    label: {
        fontFamily: 'Poppins-Regular',
        fontSize: scale(13), 
        color: colors.headerBlack,
        marginBottom: scale(5),
        
    },
    inputA: {
        backgroundColor: colors.white,
        color: colors.inputBg,
        height: scale(42),
        borderRadius: 4,
        borderWidth: 1,
        borderColor: colors.inputBg,
        width: '100%',
        paddingLeft: 15,
        //marginTop: scale(15),
        marginBottom: scale(15),
    },
    inputA50: {
        backgroundColor: colors.white,
        color: colors.inputBg,
        height: scale(42),
        borderRadius: 4,
        borderWidth: 1,
        borderColor: colors.inputBg,
        width: '48%',
        paddingLeft: 15,
        //marginTop: scale(15),
        //marginBottom: scale(15),
    },
    input: {
        backgroundColor: colors.white,
        color: colors.inputBg,
        height: scale(42),
        borderRadius: 4,
        paddingLeft: 2,
        fontSize: scale(12),
        //marginTop: scale(15),
        marginBottom: scale(15),
    },
    input80: {
        backgroundColor: colors.white,
        color: colors.inputBg,
        height: scale(42),
        borderRadius: 4,
        width: width*0.9 - scale(40),
        paddingLeft: 2,
        fontSize: scale(12),
        //marginTop: scale(15),
        marginBottom: scale(15),
    },
    input50: {
        backgroundColor: colors.white,
        color: colors.inputBg,
        height: scale(40),
        borderRadius: 4,
        width: '48%',
        paddingLeft: 2,
        fontSize: scale(12),
        marginTop: scale(-5.5),
        //marginBottom: scale(15),
    },
    errorInline: {
        color: colors.errorRed
    },
    pageLoading: {
        alignSelf: 'flex-end',
        marginRight: scale(10)
    },
    inputWithIconView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
        backgroundColor: colors.lightGray,
        width: '90%',
        alignSelf: 'center',
        marginTop: scale(15),
        marginBottom: scale(15),
    },
    inputWithIcon: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 25,
        borderRadius: 7,
        backgroundColor: colors.lightGray,
        height: scale(50),
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        width: '100%',

        //paddingLeft: 25,
    },
    inputIcon: {
        padding: 10,
        paddingTop: scale(16.5),
        paddingLeft: 15,
        paddingBottom: 10,
        height: scale(50),
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        //color: '#777777'
    },
    inputText: {
        marginTop: scale(13)
    },
    row: {
        flexDirection: 'row',
        marginBottom: scale(10)
    },
    infoIcon: {
        //marginTop: 1,
    },
    infoText: {
        fontFamily: 'Poppins-Regular',
        fontSize: scale(10), 
        color: colors.headerBlack,
        marginLeft: scale(5),
    },
    inputRow: {
        flexDirection: 'row',
        marginBottom: scale(15),
        width: '100%',
        justifyContent: 'space-between'
    },
    
    accordion: {
        //marginBottom: scale(20)
    },
    accordionHeader: {
        backgroundColor: colors.mainColor,
        height: scale(42),
        marginBottom: scale(10),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    accordionText: {
        color: colors.white,
        fontFamily: 'Poppins-Regular',
        fontWeight: '500',
        paddingLeft: scale(15),
        lineHeight: scale(42),
        fontSize: scale(13),
    },
    small: {
        fontSize: scale(10),
    },
    icon: {
        lineHeight: scale(42),
        marginRight: 15,
    },
    accordionItem: {
        height: scale(42),
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopColor: colors.lightGray,
        borderTopWidth: 1,
    },
    accordionItemLast: {
        height: scale(42),
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopColor: colors.lightGray,
        borderTopWidth: 1,
        marginBottom: scale(20)
    },
    accordionItemFirst: {
        height: scale(42),
        flexDirection: 'row',
        justifyContent: 'space-between',
        
        marginTop: scale(-10)
    },
    accordionItemText: {
        color: colors.headerBlack,
        fontFamily: 'Poppins-Regular',
        paddingLeft: scale(15),
        lineHeight: scale(42),
    },
    accordionItemValue: {
        color: colors.headerBlack,
        fontFamily: 'Poppins-Regular',
        paddingRight: scale(15),
        lineHeight: scale(42),
    },
    accordionBody: {
       
    },
    inputMask: {
        //height: scale(42),
        width: '100%',
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
        width: '50%',
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
    w80: {
        width: '100%',
        alignSelf: 'center'
    },
    
    currency: {
        color: colors.white,
        fontFamily: 'Poppins-Bold',
        fontSize: scale(10),
    },
    summaryCard: {
        width: width*0.9,
        borderRadius: scale(3),
        backgroundColor: colors.mainColor,
        padding: scale(12),
        marginBottom: scale(10),
    },
    summaryText1: {
        color: colors.white,
        opacity: 0.9,
        fontFamily: 'Poppins-Regular',
        fontSize: scale(10),
    },
    summaryText2: {
        color: colors.white,
        fontFamily: 'Poppins-Bold',
        fontSize: scale(18),
    },
    summaryRow: {
        marginTop: scale(12),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    summaryIcon: {
        marginTop: scale(10),
    },
    summaryText3: {
        color: colors.white,
        opacity: 0.9,
        fontFamily: 'Poppins-Regular',
        fontSize: scale(10),
        textAlign: 'right',
    },
    summaryText4: {
        color: colors.white,
        fontFamily: 'Poppins-Bold',
        fontSize: scale(18),
        textAlign: 'right'
    },
    spiral: {
        position: 'absolute',
        right: -15,
        opacity: 0.5,
    },
    inputRowA: {
        flexDirection: 'row',
        width: '100%',
    },
    addNew: {
        //marginTop: scale(12),
        backgroundColor: colors.mainColor,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        width: scale(43),
        height: scale(44),
        justifyContent: 'center',
        marginTop: 6,
        marginLeft: -scale(3)
    },
    addNewText: {
        fontFamily: 'Poppins-Regular',
        fontSize: scale(10),
        color: colors.mainColor,
        marginLeft: scale(3),
    },
    addNewIcon: {
        alignSelf: 'center',
        
    }
})