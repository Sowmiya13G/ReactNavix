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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.backgroundColor.background
    },
    view: {
        flexDirection: 'row',
        marginTop: 10,
        padding: '5%'
    },
    contentView: {
        flex: 1,
        padding: '4%',
        backgroundColor: theme.backgroundColor.white,
        margin: '3%',
        borderRadius: wp('3%'),
    },
    subPlans: {
        color: theme.fontColors.black,
        fontSize: theme.fontSizes.mediumFontText,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        paddingLeft: '5%',
    },
    famCare: {
        color: theme.fontColors.blueTheme,
        fontSize: theme.fontSizes.mediumFont,
        alignSelf: 'flex-start',
    },
    image: {
        width: wp('25%'),
        height: hp('25%'),
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    group: {
        width: wp('90%'),
        height: hp('30%'),
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    frame: {
        width: wp('100%'),
        height: hp('25%'),
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    name: {
        color: theme.fontColors.black,
        fontSize: theme.fontSizes.smallFontText,
    },
    complete: {
        fontSize: theme.fontSizes.mediumFont,
        color: theme.fontColors.blueTheme,
        fontWeight: 'bold',
    },
    knowMore: {
        fontSize: theme.fontSizes.mediumFont,
        color: theme.fontColors.blueTheme,
        fontWeight: 'bold',
        alignSelf: 'flex-end',
        right: '5%'
    },
    completeButton: {
        flexDirection: 'row'
    },
    text: {
        fontSize: theme.fontSizes.mediumFont,
        color: theme.fontColors.secondaryBlack,
        paddingRight: '2%',
        paddingLeft: '2%',
        marginBottom: '5%',
        textAlign: 'center'
    },
    heading: {
        color: theme.fontColors.white,
        fontSize: theme.fontSizes.bigFont,
        fontWeight: 'bold',
        paddingLeft: '5%',

    },
    title: {
        color: theme.fontColors.black,
        fontSize: theme.fontSizes.mediumFont,
        flexWrap: 'wrap'
    },
    speakers: {
        color: theme.fontColors.black,
        fontSize: theme.fontSizes.mediumFontText,
        fontWeight: 'bold',
    },
    pana: {
        width: wp('27%'),
        height: hp('10%'),
       
    },
    paginationDotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
      },
      
      paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 5,
      },
    input: {
        borderWidth: wp('0.5%'),
        borderRadius: 5,
        width: wp('90%'),
        marginBottom: '5%',
        paddingLeft: wp('28%'),
        fontSize: theme.fontSizes.mediumFont,
    },
    dropdownWrapper: {
        position: 'absolute',
        zIndex: 1,
        left: '-1%',
    },
    viewOptions: {
        marginTop: '25%',
    },
    header: {
        padding: '5%',
        backgroundColor: theme.backgroundColor.blueTheme,
        flexDirection: 'row',
        alignItems: 'center',
        // paddingBottom: '18%',
        // borderBottomLeftRadius: wp('20%'),
        // borderBottomRightRadius: wp('20%'),
    },
    backgroundCurve: {
        position: 'absolute',
        left: 0,
        right: 0,
        width: wp('100%'),
        height: hp('5%'),
        bottom: '50%'
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
    button: {
        padding: '5%',
        width: wp('90%')
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
    list: { flexDirection: 'column', width: wp('28%'), justifyContent: 'center', },
    content: {
        backgroundColor: theme.backgroundColor.white,
        margin: 20,
        width: wp('28%'), 
    },
    serviceView: {
        display: 'flex',
        flex: 1,
flexDirection: 'row'
    },
   testCard: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: '5%',
        marginVertical: 10,
        marginHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
        width:wp('75%'),

      },
      // New styles for service cards
  serviceCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: '5%',
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    width:wp('50%')
  },
  serviceTitle: {
    fontSize: theme.fontSizes.mediumFontText,
    fontWeight: 'bold',
    color: theme.fontColors.blueTheme,
  },
  serviceDescription: {
    fontSize: 14,
    color: '#666',
  },
  bookNowButton: {
    // backgroundColor: 'blue',
    alignSelf: 'flex-end',
    flexDirection: 'row',
    padding: 8,
    borderRadius: 5,
    marginTop: 10,
  },
  bookNowText: {
    color: theme.fontColors.blueTheme,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    bottom: 5,
    left: 5
  },
});
