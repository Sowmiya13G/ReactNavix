import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './styles';
import {removeItem} from '../../../redux/features/ProductSlice';

const CartScreen = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.products.items);
  console.log('cartItems', cartItems);
  const handleRemoveFromCart = itemId => {
    dispatch(removeItem(itemId));
  };

  const renderCartItem = ({item}) => (
    <View style={styles.cartItemContainer}>
      <Text>{item.title}</Text>
      <TouchableOpacity onPress={() => handleRemoveFromCart(item.id)}>
        <Text style={styles.removeCartItem}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id.toString()}
        renderItem={renderCartItem}
      />
    </View>
  );
};

export default CartScreen;
