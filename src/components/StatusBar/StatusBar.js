import React from 'react';
import {View} from 'react-native';
import theme from '../../constants/theme';

function StatusBar() {
  return (
    <View
      backgroundColor={theme.backgroundColor.saddleBrown}
      barStyle="dark-content"
    />
  );
}

export default StatusBar;
