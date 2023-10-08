import {auth, database} from './firebaseConfig';
export const FirebaseSignUpFunction = async userData => {
  try {
    // Create a user account using Firebase Authentication
    const {email, password, username} = userData;
    const userCredential = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

    // Get the user's unique ID from the userCredential
    const userId = userCredential.user.uid;

    // Create a reference to the Firestore database
    const db = firebase.firestore();

    // Add the user's data to Firestore
    await db.collection('users').doc(userId).set({
      username,
      email,
    });
    console.log('skjahdkfhslf');

    // Return the user data
    return {id: userId, username, email};
  } catch (error) {
    throw error;
  }
};
