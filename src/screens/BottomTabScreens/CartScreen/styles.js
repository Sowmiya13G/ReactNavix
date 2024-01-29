import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import theme from '../../../constants/theme';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: Platform.OS === 'android' ? 0 : 0,
    backgroundColor: theme.backgroundColor.saddleBrown,
  },
  cartToggle: {
    flexDirection: 'row',
    marginTop: 10,
  },
  cartCount: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'red',
    marginLeft: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 5,
  },
  title: {
    marginTop: 8,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  productContainer: {
    flex: 1,
    alignItems: 'center',
    padding: '3%',
    borderRadius: wp('8%'),
    margin: '3%',
    borderWidth: 1,
    borderColor: theme.fontColors.white,
    backgroundColor: theme.backgroundColor.white,
    elevation: wp('2%'),
  },

  productImage: {
    width: wp('30%'),
    height: hp('15%'),
    resizeMode: 'cover',
    borderRadius: wp('1%'),
  },

  details: {
    display: 'flex',
    margin: '3%',
    width: '50%',
  },
  productTitle: {
    fontSize: theme.fontSizes.smallFontText,
    fontWeight: 'bold',
    color: theme.fontColors.black,
  },
  productPrice: {
    marginTop: 8,
    fontSize: theme.fontSizes.smallFontText,
    fontWeight: 'bold',
    color: theme.fontColors.green,
    textAlign: 'center',
  },
  addToCartButton: {
    padding: '8%',
    borderRadius: 8,
  },

  addToCartButtonText: {
    color: theme.fontColors.black,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  wishList: {
    alignSelf: 'flex-end',
    padding: wp('2%'),
  },
  cartToggle: {
    flexDirection: 'row',
    // marginTop: 10,
  },
  cartCount: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: theme.fontColors.black,
    marginLeft: 5,
  },
  header: {
    marginTop: '3%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: '1%',
  },
  title: {
    fontSize: theme.fontSizes.bigFont,
    fontWeight: 'bold',
    color: theme.fontColors.black,
  },
});
