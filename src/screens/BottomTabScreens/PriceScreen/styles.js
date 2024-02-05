import {StyleSheet} from 'react-native';
import theme from '../../../constants/theme';
import { widthPercentageToDP as wp , heightPercentageToDP as hp} from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: theme.backgroundColor.saddleBrown,
    display: 'flex',
  },
  listContainer: {
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#fff',
    padding: 8,
    borderRadius: 8,
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginBottom: 8,
    borderRadius: 8,
  },
  details: {
    display: 'flex',
    alignItems: 'center',
    margin: 3,
    padding: 3,
    width: '60%',
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 15,
    color: 'green',
    fontWeight: 'bold',
  },
  removeButton: {
    backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  removeButtonText: {
    color: 'white',
  },
  totalPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  totalPrice: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold',
    marginRight: 10,
  },
  clearCartButton: {
    display: 'flex',
    alignSelf: 'flex-end',
    padding: 3,
  },
  clearCartButtonText: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
    marginRight: 10,
    opacity: 0.8,
  },
});
