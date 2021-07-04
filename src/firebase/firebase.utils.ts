/* eslint-disable import/no-duplicates */
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDW4jS5yT5q0a2Jrmxl4vhK_8AHeQKOgyY',
  authDomain: 'ecommerce-clothing-fe32b.firebaseapp.com',
  projectId: 'ecommerce-clothing-fe32b',
  storageBucket: 'ecommerce-clothing-fe32b.appspot.com',
  messagingSenderId: '256455174610',
  appId: '1:256455174610:web:4fd58bc62101430177800b',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => {
  auth
    .signInWithPopup(googleProvider)
    .then((res) => {
      console.log(res.user);
    })
    .catch((error) => {
      console.log(error.message);
    });
};
export default firebase;
