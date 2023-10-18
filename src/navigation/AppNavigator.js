import {valueUnpacker} from 'react-native-reanimated';
import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar, View} from 'react-native';
import SignUpScreen from '../screens/OnBoardingscreens/SignUpScreen/SignUpScreen';
import InitialScreen from '../screens/OnBoardingscreens/InitialScreen/InitialScreen';
import TabNavigator from './TabNavigator';
import LoginScreen from '../screens/OnBoardingscreens/LogInScreen/LoginScreen';
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="#37ECBA" barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignUpScreen">
          <Stack.Screen
            name="InitialScreen"
            component={InitialScreen}
            options={{title: '', headerShown: false}}
          />
          <Stack.Screen
            name="SignUpScreen"
            component={SignUpScreen}
            options={{title: '', headerShown: false}}
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{title: '', headerShown: false}}
          />
          <Stack.Screen
            name="HomeScreen"
            component={TabNavigator}
            options={{title: '', headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default AppNavigator;
