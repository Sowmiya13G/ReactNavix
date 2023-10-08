import {Text, View, FlatList, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {CommonGradient} from '../../../components/GlobalStyles/CommonGradient';
import {useSelector} from 'react-redux';
export default function PriceScreen() {
  const cartItems = useSelector(state => state.cart.cart);
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
              </View>
            </View>
          )}
        />
      </View>
    </CommonGradient>
  );
}
