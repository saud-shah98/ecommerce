import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCX0_jKjPDv1xU3tKDlRvxu3LX48jZooT4",
  authDomain: "react-db-b64f9.firebaseapp.com",
  databaseURL: "https://react-db-b64f9.firebaseio.com",
  projectId: "react-db-b64f9",
  storageBucket: "react-db-b64f9.appspot.com",
  messagingSenderId: "128165130922",
  appId: "1:128165130922:web:9deeb722bbc902abaf16d3",
  measurementId: "G-SE1ZT9EQK5"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

