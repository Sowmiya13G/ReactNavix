/* eslint-disable prettier/prettier */
import React from 'react';
import { View, TextInput, StyleSheet, Image, Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import theme from '../../constants/theme';
import Spacer from '../Spacer';
const CustomInput = ({ placeholder, value, icon, onChangeText, secureTextEntry, keyboardType, label, multiline }) => {
  return (
    <>
      <Text style={styles.text}>{label}</Text>
      <Spacer height={hp('1.5%')} />
      <View style={styles.inputContainer}>
        {Boolean(icon) && <Image source={icon} style={styles.icon} />}
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          placeholderTextColor="#8692A6"
          keyboardType={keyboardType}
          multiline={true}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: theme.backgroundColor.inputGray,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: theme.fontColors.black,
  },
  icon: {
    width: wp("5%"),
    height: wp("5%"),
    resizeMode: "contain",
    flex: 0.13,
  },
  text: {
    fontSize: theme.fontSizes.mediumFont,
    color: theme.fontColors.secondaryBlack,
  },
});

export default CustomInput;
