import React, { useState, useEffect, useCallback, useRef } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

// Pckages
import axios from 'axios';
import messaging from '@react-native-firebase/messaging';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// redux
import { useDispatch, useSelector } from 'react-redux';
import {
  setProducts,
  addItem,
} from '../../../redux/features/ProductSlice';

// Styles
import { styles } from './styles';

// Component
import InstructionOverlay from '../../../components/Modal/instructionOverlay';
import { instructions } from '../../../constants/onBoardingData';

const HomeScreen = () => {

  // Use State 
  const [showInstructions, setShowInstructions] = useState(false);
  const [instructionStep, setInstructionStep] = useState(0);

  // Variables
  const navigation = useNavigation();

  // Redux 
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.data);


  const onNextInstruction = () => {
    const nextStep = instructionStep + 1;

    if (nextStep < instructions.length) {
      setInstructionStep(nextStep);
    } else {
      setShowInstructions(false);
      setInstructionAsShown();
    }
  };

  const closeInstructions = () => {
    setShowInstructions(false);
    setInstructionAsShown()
  };

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
  const hasInstructionBeenShown = async () => {
    try {
      const value = await AsyncStorage.getItem('@instructionShown');
      return value !== null;
    } catch (error) {
      console.error('Error checking instruction shown:', error);
      return false;
    }
  };

  const setInstructionAsShown = async () => {
    try {
      await AsyncStorage.setItem('@instructionShown', 'true');
    } catch (error) {
      console.error('Error setting instruction as shown:', error);
    }
  };
  // Message...
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

  // Fetch profucts..
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

  useEffect(() => {
    const checkInstructionStatus = async () => {
      const hasBeenShown = await hasInstructionBeenShown();
      if (!hasBeenShown) {
        console.log("Instructions: Not shown yet");
      } else {
        console.log("Instructions: Already shown");
      }

      setShowInstructions(!hasBeenShown);
    };
    checkInstructionStatus();
  }, []);

  // Render Body
  const renderBody = useCallback(({ item }) => {
    const addToCartButtonRef = React.createRef();
    return (
      <View style={styles.productContainer}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <View style={styles.details}>
          <Text style={styles.productPrice}>${item.price}</Text>
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={() => handleAddToCart(item)}
          >
            <Text style={styles.addToCartButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }, [handleAddToCart]);

  // No product...
  if (!products || products.length === 0) {
    return <Text style={styles.title}>No products available.</Text>;
  }

  // render  UI ...
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        renderItem={renderBody}
        showsVerticalScrollIndicator={false}
      />
      {showInstructions &&
        <InstructionOverlay
          isVisible={showInstructions}
          text={instructions[instructionStep].text}
          title={instructions[instructionStep].title}
          onNext={onNextInstruction}
          onClose={closeInstructions}
          instructions={instructions}
          indexValue={instructionStep}
          position="absolute"
          align="center"
          top={instructions[instructionStep]?.top}
          bottom={instructions[instructionStep]?.bottom}
          left={instructions[instructionStep]?.left}
          right={instructions[instructionStep]?.right}
          marginLeft={instructions[instructionStep]?.marginLeft}
        />
      }

    </View>
  );
};

export default HomeScreen;



{/* <InstructionOverlay
  isVisible={showInstructions}
  text={instructions[instructionStep].text}
  title={instructions[instructionStep].title}
  onNext={onNextInstruction}
  onClose={closeInstructions}
  arrowDirection="up"
  targetMeasurements={targetMeasurements[instructionStep]}
  indexValue={instructionStep}
  arrow={instructionStep}
  position="absolute"
  align="center"
/> */}