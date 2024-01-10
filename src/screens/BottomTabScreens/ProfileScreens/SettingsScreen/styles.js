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
        padding: '6%',
    },
    input: {
        backgroundColor: theme.backgroundColor.inputGray,
        color: theme.fontColors.black
    },
    title: {
        fontSize: theme.fontSizes.mediumFontText,
        fontWeight: 'bold',
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
        paddingRight: '10%',
        paddingLeft: '10%'
    },
    option: {
        fontSize: theme.fontSizes.mediumFont,
        textAlign: 'center',
        color: theme.fontColors.blueTheme,
    },

    header: {
        paddingTop: '5%',
        backgroundColor: theme.backgroundColor.blueTheme,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
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
    
      heading: {
        color: theme.fontColors.white,
        fontSize: theme.fontSizes.bigFont,
        fontWeight: 'bold',
        paddingLeft: '5%',
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
