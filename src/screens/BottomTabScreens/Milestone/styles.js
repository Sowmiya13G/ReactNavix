import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import theme from '../../../constants/theme';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 0 : 0,
    backgroundColor: theme.backgroundColor.teritary
  },
  SearchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderRadius: wp('3%'),
    margin: 10,
    paddingHorizontal: 10,
    width: wp('80%')
  },
  searchInput: {
    flex: 1,
  },
  searchIcon: {
    height: 15,
    width: 15,
    alignSelf: 'flex-start',
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('97%'),
    alignSelf: 'center'
  },
  add: {
    color: theme.fontColors.white,
    fontSize: theme.fontSizes.bigFontText,
    textAlign: 'center'
  },
  addView: {
    backgroundColor: theme.backgroundColor.blueTheme,
    borderRadius: wp('5%'),
    width: '10%',
  },
  heading: {
    color: theme.fontColors.black,
    fontSize: theme.fontSizes.mediumFontText,
    fontWeight: 'bold',
    paddingLeft: '15%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('93%'),
    backgroundColor: theme.backgroundColor.white,
    alignSelf: 'center',
    borderRadius: wp('5%'),
    height: hp('10%')
  },
  tab: {
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
    width: wp('25%'),
  },
  selectedTab: {
    borderBottomColor: theme.backgroundColor.blueTheme,
  },
  unSelectedTab: {
    borderBottomColor: theme.backgroundColor.blueTheme,
  },
  tabText: {
    fontSize: theme.fontSizes.mediumFont,
    fontWeight: 'bold',
    color:theme.fontColors.black,
    textAlign: 'center'
  },
  text2: {
    fontSize: theme.fontSizes.smallFontText,
    fontWeight: 'bold',
    color:theme.fontColors.blue,
    textAlign: 'center'
  },
  switchView: {
    padding: '3%',
    flexDirection: 'row',
    width: wp('95%'),
    margin: '5%',
    backgroundColor: 'white',
    borderRadius: wp('3%'),
    alignSelf: 'center'
  },
  image: {
    resizeMode: 'cover',
    borderRadius: wp('5%'),
    height: hp('20%'),
    width: wp('40%'),
    marginBottom: '10%'
  },
  memoriesView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: wp('100%'),
  },
  memories: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  listContainer: {
    display: 'flex',
    padding: '5%',
  },
  listItem: {
    display: 'flex',
    marginHorizontal: 3,
    marginVertical: 2,
    padding: '1%',
    alignSelf: 'center'
  },
  listHeader: {
    color: theme.fontColors.black,
    fontSize: theme.fontSizes.mediumFont,
    fontWeight: 'bold',
  },
  listTitle: {
    fontSize: 24,
  },
  listImage: {
    resizeMode: 'cover',
    borderRadius: wp('5%'),
    height: hp('10%'),
    width: wp('20%'),
  },
  createAlbum: {
    color: theme.fontColors.themeBlue,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    padding: '3%',
    justifyContent: 'space-between'
  },

saveButton:{
alignSelf:'flex-end',
color: theme.fontColors.blue,
},
modalContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
},
modalContent: {
  backgroundColor: 'white',
  padding: 20,
  borderRadius: 10,
  alignItems: 'center',
  width:wp('60%')
},
modalText: {
  fontSize: 16,
  marginBottom: 20,
  textAlign: 'center',
},
modalButtons: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  width: '100%',
},
modalCancel: {
  color: 'red',
  fontSize: 18,
},
modalSave: {
  color: 'green',
  fontSize: 18,
},
checkIcon:{
alignSelf:'flex-end'
},















  title: {
    color: theme.fontColors.black,
    fontSize: theme.fontSizes.mediumFont,
    position: 'absolute',
    alignSelf: 'center',
    left: '45%',
    top: '55%'
  },
  details: {
    marginTop: '3%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chart: {
    marginVertical: 8,
    width: wp('90%'),
    marginHorizontal: 0,
    // paddingLeft:0,
    borderRadius: 16,
    color: theme.fontColors.black
  },
  view: {
    display: 'flex',
    // width: wp('100%'),
    // height: hp('60%'),
    marginTop: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // backgroundColor: '#FFECE7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '6%',
    bottom: 0
  },
  buttonText: {
    color: theme.fontColors.black,
    fontSize: theme.fontSizes.smallFontText,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  piechart: {
    marginVertical: 8,
    borderRadius: 16,
    transform: [{ rotate: '210deg' }]
  },
  date: { backgroundColor: '#F5F5F5', flexDirection: 'row', justifyContent: 'center', alignSelf: 'flex-end', width: '40%', right: '3%', padding: 2, borderRadius: 10, alignItems: 'center' },
  text: {
    color: 'black'
  },
  bar: { paddingLeft: 10, paddingRight: 10, justifyContent: 'center', alignItem: 'center', right: 5, bottom: 0 }
});
