import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import theme from '../../../../../constants/theme';

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
  userPhotoPlaceholder: {
    width: wp('25%'),
    height: wp('25%'),
    borderRadius: wp('15%'),
    alignSelf: 'flex-start',
    margin: '4%',
    backgroundColor: theme.backgroundColor.inputGray
  },

  userName: {
    fontSize: theme.fontSizes.mediumFontText,
    color: theme.fontColors.black
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
    position: 'absolute',
    bottom: '10%',
    right: '8%'
  },
  progressText: {
    fontSize: theme.fontSizes.smallFont,
    color: theme.fontColors.black,
    fontWeight: 'bold',
    position: 'absolute',
    bottom: '10%',
    right: '8%',
    top: '33%',
  },
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
  nodeContainer: {
    flexDirection: 'column',
    alignItems: 'center',
     
  },
  rectangle: {
    width: 100, 
    height: 150, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    borderColor: 'blue', 
    borderWidth: 1, 
    marginBottom: 10,
  },
  nodeTitle: {
    color: 'black',
    fontSize: 14,
  },
  childrenContainer: {
    flex: 1,
    marginLeft: 20,
  },
  branchContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  relationshipContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  connectionLine: {
    width: 2,
    height: 20,
    backgroundColor: 'gray',
  },
});
