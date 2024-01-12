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
        height: hp('10%'),
        resizeMode: 'contain',
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
        color: theme.fontColors.blueTheme,
    },
    data: {
        fontSize: theme.fontSizes.smallFontText,
        color: theme.fontColors.inkLight,
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
    completed: {
        fontSize: theme.fontSizes.smallFont,
        textAlign: 'center',
        color:'#05BB64',
        backgroundColor: theme.backgroundColor.gradientGreen,
        padding: '3%',
        borderRadius: wp('4%'),
        width:wp('25%'),
    },
    singleUser:{
        fontSize: theme.fontSizes.smallFont,
        textAlign: 'center',
        color:'#EB996E',
        alignSelf: 'center',
        justifyContent: 'center',
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
    tab: {
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: 'transparent',
        width: wp('43%'),
      },
      selectedTab: {
        backgroundColor: theme.backgroundColor.blueTheme,
        borderRadius: wp('4%'),
      },
      tabText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black', // Adjust the color as needed
        textAlign: 'center'
      },
});
