// import React, { useRef, useEffect } from 'react';
// import { View, TextInput, Text, Animated } from 'react-native';
// import { styles } from './styles';
// import Spacer from '../Spacer';
// import { heightPercentageToDP } from 'react-native-responsive-screen';

// const CustomInput = ({
//   label,
//   placeholder,
//   value,
//   onChangeText,
//   secureTextEntry,
//   type,
//   returnKeyType,
//   error
// }) => {
//   const animatedBorderColor = useRef(new Animated.Value(0)).current;

//   const animateBorderColor = () => {
//     Animated.timing(animatedBorderColor, {
//       toValue: error ? 1 : 0,
//       duration: 200,
//       useNativeDriver: false,
//     }).start();
//   };

//   useEffect(() => {
//     animateBorderColor();
//   }, [error]);

//   const borderColor = animatedBorderColor.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['#CCCCCC', '#FF0000'],
//   });

//   return (
//     <>
//       <Text style={styles.label}>{label}</Text>
//       <Spacer height={heightPercentageToDP('1.5%')} />
//       <Animated.View style={[styles.inputContainer, { borderColor }]}>
//         <TextInput
//           style={styles.input}
//           placeholder={placeholder}
//           value={value}
//           onChangeText={onChangeText}
//           secureTextEntry={secureTextEntry}
//           placeholderTextColor="#E8E8E8"
//           keyboardType={type === 'number' ? 'numeric' : 'default'}
//           returnKeyType={returnKeyType}
//         />
//       </Animated.View>
//       {error ? <Text style={{ color: '#FF0000' }}>Error: {error}</Text> : null}
//     </>
//   );
// };

// export default CustomInput;
import React, {useRef, useEffect, useImperativeHandle, forwardRef} from 'react';
import {View, TextInput, Text, Animated} from 'react-native';
import {styles} from './styles';
import Spacer from '../Spacer';
import {heightPercentageToDP} from 'react-native-responsive-screen';

const CustomInput = forwardRef(
  (
    {
      label,
      placeholder,
      value,
      onChangeText,
      secureTextEntry,
      type,
      returnKeyType,
      error,
      onSubmitEditing,
    },
    ref,
  ) => {
    const animatedBorderColor = useRef(new Animated.Value(0)).current;
    const inputRef = useRef(null);

    const animateBorderColor = () => {
      Animated.timing(animatedBorderColor, {
        toValue: error ? 1 : 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    };

    useEffect(() => {
      animateBorderColor();
    }, [error]);

    const borderColor = animatedBorderColor.interpolate({
      inputRange: [0, 1],
      outputRange: ['#CCCCCC', '#FF0000'],
    });

    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current.focus();
      },
    }));

    return (
      <>
        <Text style={styles.label}>{label}</Text>
        <Spacer height={heightPercentageToDP('1.5%')} />
        <Animated.View style={[styles.inputContainer, {borderColor}]}>
          <TextInput
            ref={inputRef}
            style={styles.input}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            placeholderTextColor="#E8E8E8"
            keyboardType={type === 'number' ? 'numeric' : 'default'}
            returnKeyType={returnKeyType}
            onSubmitEditing={onSubmitEditing}
          />
        </Animated.View>
        {error ? <Text style={{color: '#FF0000'}}>Error: {error}</Text> : null}
      </>
    );
  },
);

export default CustomInput;
