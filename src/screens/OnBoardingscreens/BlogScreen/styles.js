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
    padding: '5%'
  },
  contentView:{
    flex:1,
    padding: '5%',
  },
  blogImage: {
    width: wp('95%'),
    height: hp('20%'),
    resizeMode: 'cover',
    alignSelf: 'center',
    
borderTopRightRadius:wp('5%'),
borderTopLeftRadius:wp('5%'),
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
    textAlign: 'center'
  },
  heading:{
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


  input: {
    borderWidth: wp('0.5%'),
    borderRadius: 5,
    width: wp('90%'),
    marginBottom: '5%',
    paddingLeft: wp('28%'),
    fontSize: theme.fontSizes.mediumFont,
  },

  viewOptions: {
    marginTop: '25%',
  },
  header: {
    padding: '3%',
    backgroundColor: theme.backgroundColor.blueTheme,
    flexDirection: 'column',
    alignItems: 'center',
  },
  icons: {
    backgroundColor: theme.backgroundColor.blueTheme,
    flexDirection: 'row',
    alignItems: 'center',
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
  button: {
    padding: '5%',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: '10%',
  },
  background: {
    position: 'absolute',
    // borderBottomLeftRadius: wp('30%'),
    // borderBottomRightRadius: wp('30%'),
    width: wp('100%'),
    height: hp('50%')
  },
  searchInput: {
    flex: 1,
    height: hp('7%'),
    backgroundColor: theme.backgroundColor.white, 
    borderRadius: 8,
    paddingLeft: 8,
    margin: '3%',
    width: wp('90%'),
    alignSelf: 'center', 
    fontSize: theme.fontSizes.mediumFont,
    opacity: 0.5,
    justifyContent: 'center'
  },
bodyContainer: {
    flex: 1,
    padding: 16,
},
blogItem: {
    backgroundColor: theme.backgroundColor.white,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp('5%'),
},
blogTitle: {
    fontSize: theme.fontSizes.bigFont,
    fontWeight: 'bold',
    marginBottom: 8,
    color: theme.fontColors.blueTheme
},
blogText: {
    fontSize: 14,
    color: '#555',
    padding: 20
},
  containerStyle:{ flexDirection: 'row', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' },
list:{ flexDirection: 'column', width: wp('28%'), justifyContent: 'center' }
});
