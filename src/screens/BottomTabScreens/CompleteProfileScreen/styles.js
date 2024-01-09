/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import theme from '../../../constants/theme';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    backgroundCurve: {
        position: 'absolute',
        width: wp('100%'),
        height: hp('60%'),
        bottom: '80%',
        left: 0,
        right: 0
    },
    view: {
        flexDirection: 'row',
        marginTop: 10,
        padding: '5%',
        justifyContent: 'center'
    },
    dropdownWrapper: {
        position: 'absolute',
        zIndex: 1,
        left: '1%',
        bottom: '35%',
      },
      viewOptions: {
        marginTop: '25%',
      },
    
    contentView: {
        padding: '5%',
        width: wp('95%'),
        backgroundColor: theme.backgroundColor.white,
        borderRadius: wp('3%'),
        alignSelf: 'center'
    },
    header: {
        position: 'absolute',
        top: '1%',
        padding: '5%',
        backgroundColor: theme.backgroundColor.blueTheme,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
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
        transform: [{ rotate: '-30deg' }]
    },
    image: {
        width: wp('25%'),
        height: hp('25%'),
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    name: {
        color: theme.fontColors.royalBlue,
        fontSize: theme.fontSizes.mediumFontText,
        fontWeight: 'bold',
    },
    detailsText: {
        fontSize: theme.fontSizes.mediumFontText,
        color: theme.fontColors.secondaryBlack,
    },
    text: {
        fontSize: theme.fontSizes.mediumFont,
        color: theme.fontColors.secondaryBlack,
    },
    heading: {
        color: theme.fontColors.white,
        fontSize: theme.fontSizes.bigFont,
        fontWeight: 'bold',
        paddingLeft: '4%',
    },
    title: {
        color: theme.fontColors.royalBlue,
        fontSize: theme.fontSizes.mediumFontText,
        fontWeight: 'bold',
        paddingLeft: '5%',
    },
    add: {
        color: theme.fontColors.white,
        fontSize: theme.fontSizes.smallFontText,
        textDecorationLine: 'underline'
    },
    speakers: {
        color: theme.fontColors.royalBlue,
        fontSize: theme.fontSizes.bigFont,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    button: {
        padding: '5%',
        width: wp('90%'),
        alignSelf: 'center'
      },
      input: {
        borderRadius: 5,
        width: wp('84%'),
        paddingLeft: wp('25%'),
        marginLeft: '3%',
        height: 40,
        fontSize: theme.fontSizes.mediumFont,
        backgroundColor: theme.backgroundColor.inputGray,
        color: theme.fontColors.black
      },
    inputContainer: {
        flexDirection: 'row',
        marginBottom: '10%',
    },
    videoPlayer: {
        width: wp('100%'),
        height: hp('30%'),
        padding: '3%'
    },
    backgroundVideo: {
        width: '100%',
        height: '100%',
    },
    fullscreenButton: {
        position: 'absolute',
        bottom: 16,
        right: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 10,
        borderRadius: 5,
    },
    fullscreenButtonText: {
        color: 'white',
    },
    arrowIcon: { alignSelf: 'center' },
    containerStyle: { flexDirection: 'row', display: 'flex' },
    list: { flexDirection: 'column', width: wp('28%'), justifyContent: 'center' }
});
