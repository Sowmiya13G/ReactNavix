/* eslint-disable prettier/prettier */
// import {valuePacker} from 'react-native-reanimated';
import 'react-native-reanimated';
import 'react-native-gesture-handler';

import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';

// Packages
import { enableFreeze } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import messaging from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native';

//Constants
import theme from '../constants/theme';

// Screens
import InitialScreen from '../screens/OnBoardingscreens/InitialScreen';
import WelcomeScreen from '../screens/OnBoardingscreens/WelcomeScreen';
import OtpScreen from '../screens/OnBoardingscreens/OtpScreen';
import { WebinarScreen } from '../screens/OnBoardingscreens/WebinarScreen';
import { BlogScreen } from '../screens/BottomTabScreens/BlogScreen';
import { UserProfileScreen } from '../screens/BottomTabScreens/UserProfileScreen';
import { CompleteProfileScreen } from '../screens/BottomTabScreens/CompleteProfileScreen';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

// Firebase messsaging
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});
async function getFCMToken() {
  try {
    const token = await messaging().getToken();
    console.log('FCM TOKEN:', token);
  } catch (error) {
    console.log(error);
  }
}
// Request permission
async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}
async function setupFCMListener() {
  await notifee.requestPermission();
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });

  messaging().onMessage(async remoteMessage => {
    console.log('NOTIFICATION IN FOREGROUND STATE', remoteMessage);
    const { title, body } = remoteMessage.notification;
    await notifee.displayNotification({
      title,
      body,
      android: {
        channelId,
        smallIcon: 'ic_launcher',
        pressAction: {
          id: 'default',
        },
      },
    });
  });
}
// App navigator
const AppNavigator = () => {

  // use effect
  useEffect(() => {
    enableFreeze(true);
    const initializeFirebaseMessaging = async () => {
      await messaging().registerDeviceForRemoteMessages();
      await getFCMToken();
      await requestUserPermission();
      await setupFCMListener();
    };

    initializeFirebaseMessaging();
  }, []);

  return (
    <NavigationContainer >
      <StatusBar backgroundColor={theme.backgroundColor.blueTheme} barStyle="light-content" />

     <Stack.Navigator>
       {/*   <Stack.Screen
          name="InitialScreen"
          component={InitialScreen}
          options={{ title: '', headerShown: false }}
        />
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ title: '', headerShown: false }}
        />
        <Stack.Screen
          name="OtpScreen"
          component={OtpScreen}
          options={{ title: '', headerShown: false }}
        />
        <Stack.Screen
          name="WebinarScreen"
          component={WebinarScreen}
          options={{ title: '', headerShown: false }}
        /> */}
        <Stack.Screen
          name="HomeScreen"
          component={BottomTabNavigator}
          options={{ title: '', headerShown: false }}
        />
        <Stack.Screen
          name="BlogScreen"
          component={BlogScreen}
          options={{ title: '', headerShown: false }}
        />
        <Stack.Screen
          name="UserProfileScreen"
          component={UserProfileScreen}
          options={{ title: '', headerShown: false }}
        />
        <Stack.Screen
          name="CompleteProfileScreen"
          component={CompleteProfileScreen}
          options={{ title: '', headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
