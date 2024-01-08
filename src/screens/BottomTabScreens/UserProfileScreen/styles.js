/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import theme from '../../../constants/theme';

export const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  view: {
    flexDirection: 'row',
    marginTop: 10,
    padding: '5%',
  },
  contentView:{
    flex:1,
    padding: '5%',
    backgroundColor: theme.backgroundColor.lightCoral
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
    textDecorationLine:'underline'
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
    borderRadius:wp('2%'),
    padding: 10,
    height:hp('5%'),
    width: wp('12%'),
  },

  backIcon:{
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  callIcon:{
    fontWeight: 'bold',
    transform: [{ rotate: '-30deg' }]  },

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
    width: wp('30%'),
    height: wp('30%'),
    borderRadius: wp('15%'),
    marginBottom: hp('2%'),
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.fontColors.black,
  },
  userRelation: {
    fontSize: 16,
    color: theme.fontColors.gray,
  },
  userAge: {
    fontSize: 16,
    color: theme.fontColors.gray,
  },
  progressCircleContainer: {
    alignItems: 'center',
    marginTop: hp('5%'),
  },

});
