import 'react-native-reanimated';
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar, View} from 'react-native';
import SignupScreen from '../screens/OnBoardingscreens/SignUpScreen/SignupScreen';
import InitialScreen from '../screens/OnBoardingscreens/InitialScreen/InitialScreen';
import TabNavigator from './TabNavigator';
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="#37ECBA" barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignupScreen">
          <Stack.Screen
            name="InitialScreen"
            component={InitialScreen}
            options={{title: '', headerShown: false}}
          />
          {/* <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{title: '', headerShown: false}}
        /> */}
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
