/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import theme from '../../../../constants/theme';

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: theme.backgroundColor.background
  },
  view: {
    flexDirection: 'row',
    marginTop: 10,
    padding: '5%',
  },
  backgroundCurve: {
    height: hp('60%'),
    top: '-18%',
},
  contentView: {
    flex: 1,
    padding: '5%',
    margin: '3%',
    borderRadius: wp('5%'),
    backgroundColor: theme.backgroundColor.white,
    flexDirection: 'row'
  },

  detailsText: {
    fontSize: theme.fontSizes.smallFontText,
    color: theme.fontColors.secondaryBlack,
  },
  text: {
    fontSize: theme.fontSizes.mediumFont,
    color: theme.fontColors.secondaryBlack,
    paddingRight: '2%',
    paddingLeft: '2%',
    marginBottom: '5%',
    textAlign: 'center'
  },
  add: {
    fontSize: theme.fontSizes.smallFontText,
    color: theme.fontColors.white,
    textAlign: 'center',
    textDecorationLine: 'underline'
  },
  title: {
    color: theme.fontColors.royalBlue,
    fontSize: theme.fontSizes.mediumFontText,
    fontWeight: 'bold',
    paddingLeft: '5%',
  },
  header: {
    padding: '5%',
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
  userProfile: {
    alignItems: 'center',
    marginTop: hp('5%'),
  },
  userPhoto: {
    width: wp('25%'),
    height: wp('25%'),
    borderRadius: wp('15%'),
    alignSelf: 'flex-start',
    margin: '4%'
  },
  userPhotoPlaceholder:{
    width: wp('25%'),
    height: wp('25%'),
    borderRadius: wp('15%'),
    alignSelf: 'flex-start',
    margin: '4%',
    backgroundColor: theme.backgroundColor.inputGray
  },

  userName: {
    fontSize: theme.fontSizes.mediumFontText,
    color: theme.fontColors.white
  },
  userNum: {
    fontSize: theme.fontSizes.mediumFont,
    color: theme.fontColors.white
  },
  userRelation: {
    fontSize: theme.fontSizes.mediumFont,
    color: theme.fontColors.black
  },
  userAge: {
    fontSize: theme.fontSizes.mediumFont,
    color: theme.fontColors.black
  },
  progressContainer: {
   backgroundColor: theme.backgroundColor.white,
   padding: '5%',
   margin: '3%',
   borderRadius: wp('5%'),
  },
  progressText: {
    fontSize: theme.fontSizes.smallFontText,
    color: theme.fontColors.black,
   
  },
  medicalHistory: {
    fontSize: theme.fontSizes.mediumFont,
    color: theme.fontColors.secondaryBlack,
    fontWeight: 'bold'
  },
  completeNow: {
    fontSize: theme.fontSizes.mediumFont,
    color: theme.fontColors.blueTheme,
    fontWeight: 'bold'
  },
});
