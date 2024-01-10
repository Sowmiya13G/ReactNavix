/* eslint-disable prettier/prettier */
// FloatingButton.js
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from '../../constants/theme';

const FloatingButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.floatingButton} onPress={onPress}>
      <Icon name="user-md" size={28} color={theme.fontColors.white} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    bottom: 25,
    right: 20,
    transform: [{ translateX: -130 }], 
    backgroundColor: theme.backgroundColor.blueTheme,
    elevation:0.5,
    borderRadius: 33,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex:1
  },
});

export default FloatingButton;
