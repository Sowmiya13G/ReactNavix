import {Text, View, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {CommonGradient} from '../../../components/GlobalStyles/CommonGradient';
import {useDispatch, useSelector} from 'react-redux';
import {removeFromCart, clearCart} from '../../../redux/actions/actions';
export default function PriceScreen() {
  const cartItems = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();
  const calculateTotalPrice = cartItems => {
    let totalPrice = 0;
    cartItems.forEach(item => {
      totalPrice += item.price;
    });
    return totalPrice.toFixed(2);
  };

  const handleRemoveItem = itemId => {
    dispatch(removeFromCart({id: itemId}));
  };
  const totalCartPrice = calculateTotalPrice(cartItems);

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <CommonGradient>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Your Cart</Text>
          <View style={styles.totalPriceContainer}>
            <Text style={styles.totalPrice}>Total Price:</Text>
            <Text style={styles.totalPrice}>${totalCartPrice}</Text>
          </View>
        </View>
        <FlatList
          data={cartItems}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.productContainer}>
              <Image source={{uri: item.image}} style={styles.productImage} />
              <View style={styles.details}>
                <Text style={styles.productTitle}>{item.title}</Text>
                <Text style={styles.productPrice}>${item.price}</Text>
                <TouchableOpacity
                  style={styles.removeButton}
                  onPress={() => handleRemoveItem(item.id)}>
                  <Text style={styles.removeButtonText}>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />

        <TouchableOpacity
          onPress={handleClearCart}
          style={styles.clearCartButton}>
          <Text style={styles.clearCartButtonText}>Clear Cart</Text>
        </TouchableOpacity>
      </View>
    </CommonGradient>
  );
}
