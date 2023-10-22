import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 18,
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
});
