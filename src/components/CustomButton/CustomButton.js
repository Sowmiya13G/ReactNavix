import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import theme from '../../constants/theme';
import { widthPercentageToDP } from 'react-native-responsive-screen';

const CustomButton = ({
  primaryButton,
  label = '',
  logInButton,
  handlePress = () => { },
}) => {
  return (
    <View>
      <TouchableOpacity
        style={
          primaryButton
            ? styles.primaryButton
            : logInButton
              ? styles.logInButton
              : ''
        }
        onPress={handlePress}>
        <Text
          style={
            primaryButton
              ? styles.primaryButtonText
              : logInButton
                ? styles.logInButtonText
                : ''
          }>
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  logInButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: '1%',
    borderColor: '#FFF',
    borderWidth: 2,
    marginBottom: 20,
  },
  primaryButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: widthPercentageToDP('2%'),
    borderColor: 'transparent',
    backgroundColor: theme.backgroundColor.blueTheme,
    borderWidth: 2,
  },
  logInButtonText: {
    color: '#fff',
  },
  primaryButtonText: {
    color: '#fff',
  },
});

export default CustomButton;
