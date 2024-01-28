const admin = require('firebase-admin');
const serviceAccount = require('path/to/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const message = {
  token: 'DEVICE_FCM_TOKEN',
  data: {
    title: 'New Products',
    body: 'New products are waiting...',
    type: 'HomeScreen',
  },
};

admin.messaging().send(message)
  .then((response) => {
    console.log('Successfully sent message:', response);
  })
  .catch((error) => {
    console.error('Error sending message:', error);
  });
