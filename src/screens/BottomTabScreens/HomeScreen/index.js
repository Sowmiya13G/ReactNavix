import React, {useEffect, useCallback} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {setProducts} from '../../../redux/features/ProductSlice';
import {styles} from './styles';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.data);
  // console.log('products', products);

  const renderBody = useCallback(({item}) => {
    return (
      <View style={styles.productContainer}>
        <Image source={{uri: item.image}} style={styles.productImage} />
        <View style={styles.details}>
          <Text style={styles.productPrice}>${item.price}</Text>
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={() => handleAddToCart(item)}>
            <Text style={styles.addToCartButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        // console.log('response', response);
        dispatch(setProducts(response.data));
      } catch (err) {
        console.log('err', err);
        dispatch(setError(err.message));
      } finally {
      }
    };

    fetchProducts();
  }, [dispatch]);
  if (!products || products.length === 0) {
    return <Text>No products available.</Text>;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        renderItem={renderBody}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;
