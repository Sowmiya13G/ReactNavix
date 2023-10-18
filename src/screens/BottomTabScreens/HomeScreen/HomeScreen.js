import React, {useEffect} from 'react';
import {Text, View, Image, FlatList, TouchableOpacity} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import {CommonGradient} from '../../../components/GlobalStyles/CommonGradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts, addToCart} from '../../../redux/actions/actions';
import styled from 'styled-components';

export default function HomeScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);
  const cart = useSelector(state => state.cart.cart);

  // const Container = styled.View`
  //   flex: 1;
  //   background-color: black;
  // `;

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleAddToCart = product => {
    dispatch(addToCart(product));
  };

  const goToCart = () => {
    navigation.navigate('PriceTab');
  };
  return (
    <CommonGradient>
      <SafeAreaProvider>
        {/* <Container> */}
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Hey User!</Text>
            <View style={styles.header}>
              <TouchableOpacity onPress={goToCart} style={styles.cartToggle}>
                <Icon name="shopping-cart" size={30} color="white" />
                {cart.length > 0 && (
                  <Text style={styles.cartCount}>{cart.length}</Text>
                )}
              </TouchableOpacity>
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
        {/* </Container> */}
      </SafeAreaProvider>
    </CommonGradient>
  );
}
