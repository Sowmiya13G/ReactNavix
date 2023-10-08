import firebase from 'firebase/app';
import 'firebase/firestore';

// Initialize Firebase with your config here

export const registerUserInFirestore = async userData => {
  try {
    const firestore = firebase.firestore();
    const userRef = firestore.collection('users').doc();

    // Add user data to Firestore
    await userRef.set(userData);

    return {...userData, id: userRef.id};
  } catch (error) {
    throw error;
  }
};
