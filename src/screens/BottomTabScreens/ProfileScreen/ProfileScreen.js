import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {CommonGradient} from '../../../components/GlobalStyles/CommonGradient';
export default function ProfileScreen() {
  return (
    <CommonGradient>
      <View style={styles.container}>
        <Text>ProfileScreen</Text>
      </View>
    </CommonGradient>
  );
}
