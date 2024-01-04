import { StyleSheet } from 'react-native';
import theme from '../../../constants/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.backgroundColor.black,
    },
    title: {
        fontSize: theme.fontSizes.mediumFontText,
        fontWeight: 'bold',
        textAlign: 'center',
        color: theme.fontColors.blueTheme,
    },
    option: {
        fontSize: theme.fontSizes.mediumFont,
        textAlign: 'center',
        color: theme.fontColors.blueTheme,
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
    otpContainer: {
        marginVertical: 10,
        paddingHorizontal: 20,
    },
    otpInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        fontSize: 16,
    },
});
