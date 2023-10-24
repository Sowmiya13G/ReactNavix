import {valuePacker} from 'react-native-reanimated';
import 'react-native-gesture-handler';

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar, View} from 'react-native';
import InitialScreen from '../screens/OnBoardingscreens/InitialScreen/InitialScreen';
import TabNavigator from './TabNavigator';
import messaging from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native';
import SignUpScreen from '../screens/OnBoardingscreens/SignUpScreen/SignUpScreen';

const Stack = createStackNavigator();

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
    const {title, body} = remoteMessage.notification;
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

const AppNavigator = () => {
  useEffect(() => {
    const initializeFirebaseMessaging = async () => {
      await messaging().registerDeviceForRemoteMessages();
      await getFCMToken();
      await requestUserPermission();
      await setupFCMListener();
    };

    initializeFirebaseMessaging();
  }, []);
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="#37ECBA" barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="InitialScreen">
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

// messaging().onNotificationOpenedApp(async remoteMessage => {

//   console.log(
//     'NOTIFICATION CAUSED APP TO OPEN FROM BACKGROUND STATE:',
//     remoteMessage.notification,
//   );
//   navigation.navigate(remoteMessage.data.type);
//   await notifee.cancelNotification(remoteMessage.notification.id);
// });

// // Check whether an initial notification is available
// const initialNotification = await messaging().getInitialNotification();
// if (initialNotification) {
//   console.log(
//     'NOTIFICATION CAUSED APP TO OPEN FROM QUIET STATE:',
//     initialNotification.notification,
//   );
//   await notifee.cancelNotification(initialNotification.notification.id);
// }
