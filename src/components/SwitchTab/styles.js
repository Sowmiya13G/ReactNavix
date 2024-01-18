import { StyleSheet } from "react-native";
import theme from "../../constants/theme";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
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
        color: 'black',
        textAlign: 'center'
    },
})