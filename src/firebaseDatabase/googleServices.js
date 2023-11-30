import {GoogleSignin} from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';
GoogleSignin.configure({
  scopes: ['email'],
  webClientId:
    '59641266798-c36krjk84qo07ppoudq2li45ghh017o7.apps.googleusercontent.com',
  offlineAccess: true,
});

export const signInWithGoogle = async () => {
  await GoogleSignin.hasPlayServices();
  const {idToken, user} = await GoogleSignin.signIn();
  const googelCredential = auth.GoogleAuthProvider.credential(idToken);
  return user, auth().signInWithCredential(googelCredential);
};
