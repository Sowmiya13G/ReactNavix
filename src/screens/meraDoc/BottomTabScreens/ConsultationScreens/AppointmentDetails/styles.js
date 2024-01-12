import { StyleSheet } from 'react-native';
import theme from '../../../../../constants/theme';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: wp('20%'),
        resizeMode: 'contain',
        // alignSelf: 'flex-start',
        // alignSelf:"center",
        bottom: '5%',
        margin: '2%',
        padding: '5%',
        borderRadius: wp('10%'),
        top: '3%'
    },
    input:{
width: wp('90%'),
backgroundColor:'black'
    },
    content: {
        marginLeft: '5%',
        marginRight: '5%',
        backgroundColor: theme.backgroundColor.white,
        borderRadius: wp('4%'),
        paddingLeft: '5%',
        paddingRight: '8%',
        paddingBottom: '5%',
        // flexDirection: 'row',
        // alignItems: 'center'
    },
    docDetails: {
        marginLeft: '5%',
        marginRight: '5%',
        backgroundColor: theme.backgroundColor.white,
        borderRadius: wp('4%'),
        paddingLeft: '5%',
        paddingRight: '8%',
        paddingBottom: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-around'
    },
    title: {
        fontSize: theme.fontSizes.mediumFontText,
        fontWeight: 'bold',
        color: theme.fontColors.royalBlue,
    },
    data: {
        fontSize: theme.fontSizes.smallFontText,
        color: theme.fontColors.black,
    },
    title2: {
        left: '7%',
        fontSize: theme.fontSizes.mediumFontText,
        color: theme.fontColors.black,
    },
    data2: {
        fontSize: theme.fontSizes.smallFontText,
        color: theme.fontColors.black,
        fontWeight: 'bold',

    },
    option: {
        fontSize: theme.fontSizes.bigFont,
        textAlign: 'center',
        fontWeight: 'bold',
        color: theme.fontColors.white,
        position: 'absolute',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#EB996E',
        width: wp('90%'),
        padding: '3%',
        borderBottomLeftRadius: wp('4%'),
        borderBottomRightRadius: wp('4%'),
        bottom: 0
    },
    option2: {
        fontSize: theme.fontSizes.bigFont,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#A31361',
        position: 'absolute',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#BB6D97',
        width: wp('90%'),
        padding: '3%',
        borderBottomLeftRadius: wp('4%'),
        borderBottomRightRadius: wp('4%'),
        bottom: 0
    },
    backgroundCurve: {
        top: '-30%'
    },
    options: {
        backgroundColor: theme.backgroundColor.white,
        borderRadius: wp('4%'),
        padding: '5%',
        width: wp('90%'),
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    optionText: {
        color: theme.fontColors.black,
        fontSize: theme.fontSizes.mediumFont,
        fontWeight: 'bold'
    },
    header: {
        padding: '5%',
        backgroundColor: theme.backgroundColor.blueTheme,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        backgroundColor: theme.backgroundColor.white,
        borderRadius: wp('2%'),
        padding: 10,
        height: hp('5%'),
        width: wp('12%'),
    },
    backIcon: {
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    callIcon: {
        fontWeight: 'bold',
        paddingLeft: '4%',
        color: theme.fontColors.blueTheme
    },
    button: {
        padding: '5%',
        width: wp('90%'),
        alignSelf: 'center',
        fontWeight: 'bold',
    },
    buttonTxt: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    icon: {
        fontWeight: 'bold',
        paddingLeft: '4%'
    },
    texts: {
        textAlign: 'center',
        color: theme.fontColors.black,
        fontSize: theme.fontSizes.mediumFont,
    },
    textView: {
        padding: '3%',
        margin: '2%',
        backgroundColor: theme.backgroundColor.white,
        borderRadius: wp('4%'),
        flexDirection: 'row',
        alignItems: 'center'
    },

    heading: {
        color: theme.fontColors.white,
        fontSize: theme.fontSizes.bigFont,
        fontWeight: 'bold',
        paddingLeft: '5%',

    },
    upload: {
        alignItems: 'center',
        padding: '3%',
        borderColor: 'grey',
        borderWidth: 1,
        margin: '6%',
        borderStyle: 'dashed',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    uploadIcon: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },

    uploadedDocumentContainer: {
        alignItems: 'center',
        marginTop: 10,
    },

    uploadedDocumentName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },

    documentTypeIcon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
});
