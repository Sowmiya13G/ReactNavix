import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignupScreen from '../screens/OnBoardingscreens/SignUpScreen/SignupScreen';
import TabNavigator from './TabNavigator';
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignupScreen">
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{title: '', headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={TabNavigator}
          options={{title: '', headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
