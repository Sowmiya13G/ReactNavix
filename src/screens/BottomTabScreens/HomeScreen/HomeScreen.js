import React, {useEffect} from 'react';
import {Text, View, Image, FlatList, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts, addToCart} from '../../../redux-saga/actions/actions';
import {styles} from './styles';
import {CommonGradient} from '../../../components/GlobalStyles/CommonGradient';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);
  const cart = useSelector(state => state.cart.cart);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleAddToCart = product => {
    dispatch(addToCart(product));
  };
  return (
    <CommonGradient>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Hey User!</Text>
          <View style={styles.header}>
            {/* <TouchableOpacity
              onPress={handleAddToCart}
              style={styles.cartToggle}> */}
            <Icon name="shopping-cart" size={30} color="white" />
            {cart.length > 0 && (
              <Text style={styles.cartCount}>{cart.length}</Text>
            )}
            {/* </TouchableOpacity> */}
          </View>
        </View>

        <FlatList
          data={products}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.productContainer}>
              <Image source={{uri: item.image}} style={styles.productImage} />
              <View style={styles.details}>
                <Text style={styles.productTitle}>{item.title}</Text>
                <Text style={styles.productPrice}>${item.price}</Text>
                <TouchableOpacity
                  style={styles.addToCartButton}
                  onPress={() => handleAddToCart(item)}>
                  <Text style={styles.addToCartButtonText}>Add to Cart</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    </CommonGradient>
  );
}
