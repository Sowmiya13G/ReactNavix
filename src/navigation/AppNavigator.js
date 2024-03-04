// import {valuePacker} from 'react-native-reanimated';
import 'react-native-reanimated';
import 'react-native-gesture-handler';
import {enableFreeze} from 'react-native-screens';

import React, {useEffect} from 'react';
import {StatusBar, View} from 'react-native';
import { Linking } from 'react-native';
// Packages 
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// Screens
import InitialScreen from '../screens/OnBoardingscreens/InitialScreen/InitialScreen';
import TabNavigator from './TabNavigator';
import SignUpScreen from '../screens/OnBoardingscreens/SignUpScreen';

// Constants
import theme from '../constants/theme';
import MyForm from '../screens/Form';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const linking = {
    prefixes: ['reactnavix://'], 
    config: {
      screens: {
        HomeScreen: 'home',
      },
    },
  };
  return (
    <View style={{flex: 1}}>
      <StatusBar
        backgroundColor={theme.backgroundColor.saddleBrown}
        barStyle="light-content"
      />
      <NavigationContainer linking={linking}>
        <Stack.Navigator >
          {/* <Stack.Screen
            name="InitialScreen"
            component={InitialScreen}
            options={{title: '', headerShown: false}}
          />*/}
          <Stack.Screen
            name="MyForm"
            component={MyForm}
            options={{title: '', headerShown: false}}
          /> 
          {/* <Stack.Screen
            name="HomeScreen"
            component={TabNavigator}
            options={{title: '', headerShown: false}}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default AppNavigator;



// const linking = {
//   prefixes: ['https://reactnavix.com', 'reactnavix://'],
//   config: {
//     screens: {
//       ItemScreen: {
//         path: 'itemscreen',
//       },
//       HomeScreen: {
//         path: 'home',
//       },
//     },
//   },
// };
// useEffect(() => {
//   notifee.init();
//   enableFreeze(true);
//   const initializeMessaging = async (navigation) => {
//     try{
//     const { token, permissionGranted } = await initializeFirebaseMessaging();
    
//     if (token && permissionGranted) {
//       console.log('FCM setup successful. Token:', token);
//     } else {
//       console.log('FCM setup failed.');
//     }
//     await setupFCMListener({navigation});
//   } catch (error) {
//     console.error('Error during FCM setup:', error);
//   }
//   };

//   initializeMessaging();
// }, []);



// // import {valuePacker} from 'react-native-reanimated';
// import 'react-native-reanimated';
// import 'react-native-gesture-handler';
// import {enableFreeze} from 'react-native-screens';
// import React, {useEffect} from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import {StatusBar, View} from 'react-native';
// import InitialScreen from '../screens/OnBoardingscreens/InitialScreen/InitialScreen';
// import TabNavigator from './TabNavigator';
// import messaging from '@react-native-firebase/messaging';
// import notifee from '@notifee/react-native';
// import theme from '../constants/theme';

// const Stack = createStackNavigator();

// messaging().setBackgroundMessageHandler(async remoteMessage => {
//   console.log('Message handled in the background!', remoteMessage);
// });
// async function getFCMToken() {
//   try {
//     const token = await messaging().getToken();
//     console.log('FCM TOKEN:', token);
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function requestUserPermission() {
//   const authStatus = await messaging().requestPermission();
//   const enabled =
//     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//   if (enabled) {
//     console.log('Authorization status:', authStatus);
//   }
// }
// async function setupFCMListener() {
//   await notifee.requestPermission();
//   const channelId = await notifee.createChannel({
//     id: 'default',
//     name: 'Default Channel',
//   });

//   // Set up background event handler
//   notifee.onBackgroundEvent(async ({ type, detail }) => {
//     if (type === 'backgroundNotificationPressed') {
//       // Handle background notification press
//       const { notification } = detail;
//       console.log('Background Notification Pressed:', notification);
//     }
//   });

//   messaging().onMessage(async remoteMessage => {
//     console.log('NOTIFICATION IN FOREGROUND STATE', remoteMessage);
//     // const {title, body} = remoteMessage.data;

//     await notifee.displayNotification({

//       title: remoteMessage.notification.title,
//       body: remoteMessage.notification.body,
//       android: {
//         channelId,
//         smallIcon: 'ic_launcher',
//         pressAction: {
//           id: 'default',
//         },
//       },
//     });
//   });
// }

// const AppNavigator = () => {
//   useEffect(() => {
//     enableFreeze(true);

//     const initializeFirebaseMessaging = async () => {
//       await messaging().registerDeviceForRemoteMessages();
//       await getFCMToken();
//       await requestUserPermission();
//       await setupFCMListener();
//     };

//     initializeFirebaseMessaging();
//   }, []);
//   return (
//     <View style={{flex: 1}}>
//       <StatusBar
//         backgroundColor={theme.backgroundColor.white}
//         barStyle="dark-content"
//       />
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen
//             name="InitialScreen"
//             component={InitialScreen}
//             options={{title: '', headerShown: false}}
//           />
//           <Stack.Screen
//             name="HomeScreen"
//             component={TabNavigator}
//             options={{title: '', headerShown: false}}
//           />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </View>
//   );
// };

// export default AppNavigator;

// // messaging().onNotificationOpenedApp(async remoteMessage => {

// //   console.log(
// //     'NOTIFICATION CAUSED APP TO OPEN FROM BACKGROUND STATE:',
// //     remoteMessage.notification,
// //   );
// //   navigation.navigate(remoteMessage.data.type);
// //   await notifee.cancelNotification(remoteMessage.notification.id);
// // });

// // // Check whether an initial notification is available
// // const initialNotification = await messaging().getInitialNotification();
// // if (initialNotification) {
// //   console.log(
// //     'NOTIFICATION CAUSED APP TO OPEN FROM QUIET STATE:',
// //     initialNotification.notification,
// //   );
// //   await notifee.cancelNotification(initialNotification.notification.id);
// // }


