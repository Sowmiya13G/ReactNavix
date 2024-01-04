import {StyleSheet} from 'react-native';
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
    height: hp('44%'),
    padding: '5%',
  },
  image: {
    width: wp('30%'),
    height: hp('44%'),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  content: {
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: 0,
    backgroundColor: theme.backgroundColor.white,
    borderRadius: wp('2%'),
    padding: '5%'

  },
  input: {
    backgroundColor:theme.backgroundColor.inputGray,
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
    marginBottom: '10%',
  },
  paginationDotActive: {
    backgroundColor: theme.backgroundColor.orange,
    width: wp('8%'),
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
  skipView: {
    alignSelf: 'flex-end',
    marginRight: '10%',
    marginTop: '15%',
  },
  skipButton: {
    alignSelf: 'flex-end',
    color: theme.fontColors.black,
    fontWeight: 'bold',
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
