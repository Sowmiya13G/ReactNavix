import {StyleSheet} from 'react-native';
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
  },
  view: {
    flexDirection: 'row',
    marginTop: 10,
    padding: '5%',
  },
  contentView: {
    flex: 1,
    padding: '5%',
  },
  image: {
    width: wp('25%'),
    height: hp('25%'),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  name: {
    color: theme.fontColors.royalBlue,
    fontSize: theme.fontSizes.mediumFontText,
    fontWeight: 'bold',
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
    textAlign: 'center',
  },
  heading: {
    color: theme.fontColors.white,
    fontSize: theme.fontSizes.bigFont,
    fontWeight: 'bold',
    paddingLeft: '5%',
  },
  title: {
    color: theme.fontColors.royalBlue,
    fontSize: theme.fontSizes.mediumFontText,
    fontWeight: 'bold',
    paddingLeft: '5%',
  },
  speakers: {
    color: theme.fontColors.royalBlue,
    fontSize: theme.fontSizes.bigFont,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scroll: {
    flex: 1,
    width: wp('97%'),
    padding: '2%',
    margin: '2%',
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
    fontWeight: 'bold',
  },
  callIcon: {
    fontWeight: 'bold',
    transform: [{rotate: '-30deg'}],
  },
  button: {
    padding: '5%',
    // eslint-disable-next-line prettier/prettier
    width: wp('90%')
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: '10%',
  },
  videoPlayer: {
    width: wp('100%'),
    height: hp('30%'),
    padding: '3%',
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
  arrowIcon: {alignSelf: 'center'},
  containerStyle: {flexDirection: 'row', display: 'flex'},
  list: {flexDirection: 'column', width: wp('28%'), justifyContent: 'center'},
});
