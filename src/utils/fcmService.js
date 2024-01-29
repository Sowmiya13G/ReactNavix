import messaging from '@react-native-firebase/messaging';

export async function getFCMToken() {
  try {
    const token = await messaging().getToken();
    console.log('FCM TOKEN:', token);
    return token;
  } catch (error) {
    console.log('Error getting FCM token:', error);
    return null;
  }
}

export async function requestUserPermission() {
  try {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
    return enabled;
  } catch (error) {
    console.log('Error requesting user permission:', error);
    return false;
  }
}

export async function initializeFirebaseMessaging() {
  try {
    await messaging().registerDeviceForRemoteMessages();
    const token = await getFCMToken();
    const permissionGranted = await requestUserPermission();
    return { token, permissionGranted };
  } catch (error) {
    console.log('Error initializing Firebase Messaging:', error);
    return { token: null, permissionGranted: false };
  }
}





// export async function setupFCMListener() {
//     await notifee.requestPermission();
//     const channelId = await notifee.createChannel({
//       id: 'default',
//       name: 'Default Channel',
//       screen: 'home', 
//     });
  
//     messaging().onMessage(async remoteMessage => {
//       console.log('NOTIFICATION IN FOREGROUND STATE', remoteMessage.data.screen);
//       const {title, body} = remoteMessage.notification;
//       await notifee.displayNotification({
//         title,
//         body,
//         android: {
//           channelId,
//           smallIcon: 'ic_launcher',
//           pressAction: {
//             id: 'default',
//           },
//         },
//       });
//     });
//   }