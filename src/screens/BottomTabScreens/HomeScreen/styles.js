import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: Platform.OS === 'android' ? 0 : 0,
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
    width: 150,
    height: 150,
    resizeMode: 'cover',
    marginBottom: 8,
    borderRadius: 8,
  },
  details: {
    display: 'flex',
    alignItems: 'center',
    margin: 3,
    padding: 3,
    width: '50%',
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    marginTop: 8,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'green',
  },
  addToCartButton: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 8,
    marginTop: 10,
  },
  addToCartButtonText: {
    color: '#37ECBA',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
