import notifee from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';

export const setupFCMListener = async (navigation) => {
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });

  messaging().onNotificationOpenedApp(async (remoteMessage) => {
    console.log(
      'NOTIFICATION CAUSED APP TO OPEN FROM BACKGROUND STATE:',
      remoteMessage.notification,
    );
    navigation.navigate(remoteMessage.data.type);
    await notifee.cancelNotification(String(remoteMessage.notification.id));
  });

  messaging()
    .getInitialNotification()
    .then(async (remoteMessage) => {
      if (remoteMessage) {
        console.log(
          'NOTIFICATION CAUSED APP TO OPEN FROM QUITE STATE:',
          remoteMessage.notification,
        );

        await notifee.cancelNotification(String(remoteMessage.notification.id));
      }
    });

  messaging().onMessage(async (remoteMessage) => {
    storeNotification();
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

  notifee.onBackgroundEvent(async ({ type, detail }) => {
    console.log('Background Event Type:', type);
    console.log('Background Event Detail:', detail);
  
    if (type === notifee.BackgroundEventType.PRESS) {
      const { notification } = detail;
      console.log('BACKGROUND NOTIFICATION PRESSED:', notification);
    } else if (type === notifee.BackgroundEventType.DISMISSED) {
      const { notification } = detail;
      console.log('BACKGROUND NOTIFICATION DISMISSED:', notification);
    }
  });
};

// export const setupFCMListener = async navigation => {
//   messaging().onNotificationOpenedApp(async remoteMessage => {
//     console.log(
//       'NOTIFICATION CAUSED APP TO OPEN FROM BACKGROUND STATE:',
//       remoteMessage.notification,
//     );
//     navigation.navigate(remoteMessage.data.type);
//     await notifee.cancelNotification(remoteMessage.notification.id);
//   });

//   // Check whether an initial notification is available
//   const initialNotification = await messaging().getInitialNotification();
//   if (initialNotification) {
//     console.log(
//       'NOTIFICATION CAUSED APP TO OPEN FROM QUIET STATE:',
//       initialNotification.notification,
//     );
//     await notifee.cancelNotification(initialNotification.notification.id);
//   }

//   messaging().onMessage(async remoteMessage => {
//     console.log('NOTIFICATION IN FOREGROUND STATE', remoteMessage);
//     const notification = new notifee.Notification({
//       title: remoteMessage.notification.title,
//       body: remoteMessage.notification.body,
//     });
//     await notifee.displayNotification(notification);
//   });
// };


