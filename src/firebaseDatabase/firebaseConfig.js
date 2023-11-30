import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBmXABeCAS1RdL3bUVjwD_5htABOK6wat0',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'reactnavix',
  storageBucket: 'reactnavix.appspot.com',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: '1:59641266798:android:92ed8f64c682881ef5dc7f',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
