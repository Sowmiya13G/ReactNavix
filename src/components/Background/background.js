import React from 'react';
import {Image, View} from 'react-native';

// Styles
import {styles} from './styles';
// Constants
import commonImagePath from '../../constants/images';

export const Background = ({ backgroundImageStyle , union}) => {
  return (
    <View style={[styles.container]}>
      <Image
        source={union?commonImagePath.backgroundCurve: commonImagePath.unionBg}
        style={[styles.backgroundImage,backgroundImageStyle]}
        resizeMode="cover"
      />
    </View>
  );
};
