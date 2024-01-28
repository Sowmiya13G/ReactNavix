import React, {useEffect, useCallback} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './styles';
import axios from 'axios';
import {
  setProducts,
  addItem,
} from '../../../redux/features/ProductSlice';
import { useNavigation } from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.data);


  const handleAddToCart = useCallback(
    item => {
      if (item) {
        dispatch(addItem(item));
      } else {
        console.error('Invalid item:', item);
      }
    },
    [dispatch]
  );


  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('Notification in foreground:', remoteMessage);
    });

    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log('Notification caused app to open:', remoteMessage);
          const deepLink = remoteMessage.data.deepLink; 
          if (deepLink) {
            navigation.navigate(deepLink);
          }
        }
      });

    return unsubscribe;
  }, [navigation]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        dispatch(setProducts(response.data));
      } catch (err) {
        console.log('err', err);
        dispatch(setError(err.message));
      } finally {
      }
    };
    fetchProducts();
  }, [dispatch]);

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

  if (!products || products.length === 0) {
    return <Text style={styles.title}>No products available.</Text>;
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


