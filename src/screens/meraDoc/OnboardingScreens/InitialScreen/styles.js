
import { StyleSheet } from 'react-native';
import theme from '../../../constants/theme';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    width: wp('100%'),
    height: hp('94%'),
    padding: '5%',
  },
  backgroundCurve: {
    position: 'absolute',
    left: 0,
    right: 0,
    width: wp('100%'),
    height: hp('5%')
  },
  background: {
    position: 'absolute',
    bottom: '40%',
    left: 0,
    right: 0,
    width: wp('100%'),
    height: hp('65%')
  },
  image: {
    top: '5%',
    resizeMode: 'contain',
    height: hp('50%'),
    width: wp('73%'),
    alignSelf: 'center'
  },
  title: {
    fontSize: theme.fontSizes.bigFont,
    fontWeight: 'bold',
    textAlign: 'center',
    color: theme.fontColors.secondaryBlack,
  },
  data: {
    marginTop: '5%',
    marginBottom: '3%',
    width: '100%',
    height: '90%',
    marginBottom: '30%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '3%',
  },
  description: {
    fontSize: theme.fontSizes.mediumFont,
    textAlign: 'center',
    color: theme.fontColors.secondaryBlack,
    paddingBottom: '10%',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.backgroundColor.black,
  },
  paginationDot: {
    width: wp('3%'),
    height: hp('1.3%'),
    borderRadius: 5,
    backgroundColor: theme.backgroundColor.gray,
    marginHorizontal: 5,
  },
  paginationDotActive: {
    backgroundColor: theme.backgroundColor.blueTheme,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  buttonContainer: {
    paddingRight: '5%',
    paddingLeft: '5%',
    width: wp('100%'),
  },

  buttonText: {
    color: theme.fontColors.white,
    fontSize: theme.fontSizes.mediumFont,
  },
});
