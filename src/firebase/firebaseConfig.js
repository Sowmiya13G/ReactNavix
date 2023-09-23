import firebase from '@react-native-firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAVHadJ95JBjR2Bszh7dxQqNPKPbvbn3Gw',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'reactywings',
  storageBucket: 'reactywings.appspot.com',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: '1:434635601461:android:312cdf09ab4fb88769e37c',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export {firebase, db};
