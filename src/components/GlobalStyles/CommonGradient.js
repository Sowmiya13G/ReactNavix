import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

export const CommonGradient = ({children}) => {
  return (
    <LinearGradient
      colors={['#37ECBA', '#FFF']}
      style={{flex: 1, flexDirection: 'row'}}>
      {children}
    </LinearGradient>
  );
};
