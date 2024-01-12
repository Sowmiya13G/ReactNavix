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
        width: wp('30%'),
        height: hp('30%'),
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    content: {
        marginLeft: '5%',
        marginRight: '5%',
        backgroundColor: theme.backgroundColor.white,
        borderRadius: 15,
        padding: '5%',
    },
    input: {
        backgroundColor: theme.backgroundColor.inputGray,
        color: theme.fontColors.black
    },
    title: {
        fontSize: theme.fontSizes.mediumFontText,
        fontWeight: 'bold',
        textAlign: 'center',
        color: theme.fontColors.blueTheme,
    },
    data: {
        marginLeft: '5%',
        fontSize: theme.fontSizes.mediumFont,
        // fontWeight: 'bold',
        textAlign: 'left',
        color: theme.fontColors.black,

    },

    buttonContainer: {
        paddingRight: '15%',
        paddingBottom: '6%',
        paddingLeft: '15%'
    },
    option: {
        fontSize: theme.fontSizes.mediumFont,
        textAlign: 'center',
        color: theme.fontColors.blueTheme,
    },


    background: {
        position: 'absolute',
        bottom: '40%',
        left: 0,
        right: 0,
        width: wp('100%'),
        height: hp('65%')
    },
});
