import React from 'react';
import {View, TextInput, StyleSheet, Image} from 'react-native';
import { widthPercentageToDP as wp , heightPercentageToDP as hp} from 'react-native-responsive-screen';
const CustomInput = ({placeholder, value,icon, onChangeText, secureTextEntry}) => {
  return (
    <View style={styles.inputContainer}>
          {Boolean(icon) && <Image source={icon} style={styles.icon} />}

      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#E8E8E8"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: '#fff',
  },
  icon: {
    width: wp("5%"),
    height: wp("5%"),
    resizeMode: "contain",
    flex: 0.13,
  },
});

export default CustomInput;
