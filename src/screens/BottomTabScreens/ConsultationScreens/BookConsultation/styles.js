import { StyleSheet } from 'react-native';
import theme from '../../../../constants/theme';
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
        height: hp('20%'),
        resizeMode: 'contain',
        alignSelf: 'flex-start',
        bottom: '5%',
        margin: '2%',
    },
    content: {
        marginLeft: '5%',
        marginRight: '5%',
        backgroundColor: theme.backgroundColor.white,
        borderRadius: wp('4%'),
        paddingLeft: '5%',
        paddingRight: '8%',
        paddingBottom: '5%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontSize: theme.fontSizes.mediumFontText,
        fontWeight: 'bold',
        color: '#EB996E',
    },
    data: {
        fontSize: theme.fontSizes.smallFontText,
        color: '#EB996E',
    },
    title2: {
        fontSize: theme.fontSizes.mediumFontText,
        fontWeight: 'bold',
        color: '#A31361',
    },
    data2: {
        fontSize: theme.fontSizes.smallFontText,
        color: '#BB6D97',

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
    background: {
        position: 'absolute',
        bottom: '40%',
        left: 0,
        right: 0,
        width: wp('100%'),
        height: hp('65%')
    },
    backgroundCurve: {
        position: 'absolute',
        left: 0,
        right: 0,
        width: wp('100%'),
        height: hp('25%'),
        bottom: '60%',
    },
    options:{
        backgroundColor:theme.backgroundColor.white,
        borderRadius: wp('4%'),
       
        padding: '5%',
        width: wp('90%'),
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    optionText:{
        color: theme.fontColors.black,
        fontSize:theme.fontSizes.mediumFont,
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
        transform: [{ rotate: '-30deg' }],
        paddingLeft: '4%'
    },
    bellIcon: {
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: '3%'
   
    },
    heading: {
        color: theme.fontColors.white,
        fontSize: theme.fontSizes.bigFont,
        fontWeight: 'bold',
        paddingLeft: '5%',

    },
});
