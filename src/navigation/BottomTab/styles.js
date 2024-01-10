import {StyleSheet} from 'react-native'
import theme from '../../constants/theme';

export const styles = StyleSheet.create({
    floatingButton: {
      position: 'absolute',
      bottom: 30,
      left: '50%',
      transform: [{ translateX: -130 }], 
      backgroundColor: theme.backgroundColor.orange,
      borderRadius: 30,
      width: 60,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderTopLeftRadius: 30, 
      borderTopRightRadius: 30,
    },
  });