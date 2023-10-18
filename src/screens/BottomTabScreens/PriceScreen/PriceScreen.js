import {Text, View, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {CommonGradient} from '../../../components/GlobalStyles/CommonGradient';
import {useDispatch, useSelector} from 'react-redux';
import {removeFromCart} from '../../../redux/actions/actions';
export default function PriceScreen() {
  const cartItems = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();

  const handleRemoveItem = itemId => {
    dispatch(removeFromCart({id: itemId}));
  };
  return (
    <CommonGradient>
      <View style={styles.container}>
        <Text style={styles.title}>Your Cart</Text>
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
        />
      </View>
    </CommonGradient>
  );
}
