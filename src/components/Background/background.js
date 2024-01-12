import React from 'react';
import {Image, View} from 'react-native';

// Styles
import {styles} from './styles';
// Constants
import commonImagePath from '../../constants/images';

export const Background = ({ backgroundImageStyle }) => {
  return (
    <View style={[styles.container]}>
      <Image
        source={commonImagePath.backgroundCurve}
        style={[styles.backgroundImage,backgroundImageStyle]}
        resizeMode="cover"
      />
    </View>
  );
};
