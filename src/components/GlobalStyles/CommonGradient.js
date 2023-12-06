import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

export const CommonGradient = ({children}) => {
  return (
    <LinearGradient
      colors={['#37ECBA', '#72AFD3']}
      style={{flex: 1, flexDirection: 'row'}}>
      {children}
    </LinearGradient>
  );
};

export const ProductGradient = ({children}) => {
  return (
    <LinearGradient
      colors={['#fff', '#72AFD3']}
      style={{flex: 1, flexDirection: 'row'}}>
      {children}
    </LinearGradient>
  );
};
