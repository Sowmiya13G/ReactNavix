import React, { useState, useEffect, useCallback, useRef } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

// Pckages
import axios from 'axios';
import messaging from '@react-native-firebase/messaging';
import { useNavigation } from '@react-navigation/native';
import WalkthroughTooltip from 'react-native-walkthrough-tooltip';

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
import commonImagePath from '../../../constants/images';

const HomeScreen = () => {

  // Use State 
  const [showInstructions, setShowInstructions] = useState(true);
  const [instructionStep, setInstructionStep] = useState(0);
  console.log('instructionStep', instructionStep)
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipTarget, setTooltipTarget] = useState(null);
  const [targetMeasurements, setTargetMeasurements] = useState({});

  // Variables
  const navigation = useNavigation();

  // Redux 
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.data);

  // Use Ref
  const homeTabRef = useRef();
  const cartTabRef = useRef();
  const listTabRef = useRef();
  const addToCartButtonRef = useRef();

  // Constants
  const instructions = [
    {
      title: 'Home',
      text: 'Tap to see the available products',
      targetRef: homeTabRef,
      image: commonImagePath.arrow
    },
    {
      title: 'Cart',
      text: 'Tap to see the cart products',
      targetRef: cartTabRef,
      image: commonImagePath.arrow
    },
    {
      title: 'Add Items',
      text: 'Tap to Add items',
      targetRef: listTabRef,
      image: commonImagePath.arrow
    },
    {
      title: 'Add to cart',
      text: 'Click to add items to your cart',
      targetRef: addToCartButtonRef,
      image: commonImagePath.arrow
    },
  ];
  console.log('showInstructions:', showInstructions);
  console.log('instructionStep:', instructionStep);

  // Functions
  const onNextInstruction = () => {
    if (instructionStep < instructions.length - 1) {
      setInstructionStep(step => step + 1);
      setTooltipVisible(false);
      setTooltipTarget(null);
    } else {
      setShowInstructions(false);
    }
  };

  const closeInstructions = () => {
    setShowInstructions(false);
  };


  const showTooltip = useCallback(
    (targetRef) => {
      setTooltipTarget(targetRef);
      setTooltipVisible(true);
    },
    [setTooltipTarget, setTooltipVisible]
  );

  const hideTooltip = useCallback(() => {
    setTooltipVisible(false);
    setTooltipTarget(null);
  }, [setTooltipVisible, setTooltipTarget]);


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
  // Use Effects

  // Tooltip...
  useEffect(() => {
    const measureTargets = () => {
      const measurements = {};

      if (homeTabRef.current) {
        homeTabRef.current.measureInWindow((x, y, width, height) => {
          measurements[0] = { x, y, width, height };
        });
      }
      if (cartTabRef.current) {
        cartTabRef.current.measureInWindow((x, y, width, height) => {
          measurements[1] = { x, y, width, height };
        });
      }
      if (listTabRef.current) {
        listTabRef.current.measureInWindow((x, y, width, height) => {
          measurements[2] = { x, y, width, height };
        });
      }
      if (addToCartButtonRef.current) {
        addToCartButtonRef.current.measureInWindow((x, y, width, height) => {
          measurements[3] = { x, y, width, height };
        });
      }

      setTargetMeasurements(measurements);
    };

    requestAnimationFrame(measureTargets);
  }, [homeTabRef, cartTabRef, listTabRef, addToCartButtonRef]);

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
            ref={addToCartButtonRef}
            onLongPress={() => showTooltip(addToCartButtonRef.current)}
            onPressOut={hideTooltip}
          >
            <Text style={styles.addToCartButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }, [handleAddToCart, showTooltip, hideTooltip]);

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

<WalkthroughTooltip
        isVisible={tooltipVisible && instructionStep === 3} 
        content={<Text>{instructions[3].text}</Text>}
        placement="bottom"
        onClose={() => setTooltipVisible(false)}
        targetArea={addToCartButtonRef}
      />

      {/* Bottom Tab Icons */}
      {instructions.slice(0, 3).map((instruction, index) => (
        <WalkthroughTooltip
          key={index}
          isVisible={tooltipVisible && instructionStep === index}
          content={<Text>{instruction.text}</Text>}
          placement="top"
          onClose={() => setTooltipVisible(false)}
          targetArea={instruction.targetRef}
        />
      ))}

      <InstructionOverlay
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
/>

    </View>
  );
};

export default HomeScreen;