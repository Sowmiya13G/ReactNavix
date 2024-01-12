import { StyleSheet } from 'react-native';
import theme from '../../../../constants/theme';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: '5%'
    },
    title: {
        fontSize: theme.fontSizes.bigFont,
        fontWeight: 'bold',
        color: theme.fontColors.blueTheme,
    },
    option: {
        fontSize: theme.fontSizes.mediumFont,
        textAlign: 'center',
        color: theme.fontColors.blueTheme,
    },
    text: {
        fontSize: theme.fontSizes.mediumFont,
        // textAlign: 'center',
        color: theme.fontColors.black,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonText: {
        color: theme.fontColors.white,
        fontSize: theme.fontSizes.mediumFont,
    },

  buttonContainer: {
    paddingRight: '5%',
    paddingLeft: '5%',
    width: wp('90%'),

  },
    
    otpInput: {
        borderColor:theme.borderColor.black,
        color: theme.fontColors.black,
        borderWidth: 1.5,
        borderRadius: 5,
        paddingHorizontal: 0,
        fontSize: 16,
    },
    otpContainer: {
        alignSelf: 'center',
        height: 50,
        width: wp('90%'),
        
      },
      header: {
        // padding: '5%',
        flexDirection: 'row',
        alignItems: 'center',
      },
      icon: {
        alignSelf: 'flex-start',
        
      },
});
