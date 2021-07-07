/* eslint-disable no-new */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-duplicates */
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import config from './config';

const Firebase = firebase.initializeApp(config.firebase);

export const Providers = {
    google: new firebase.auth.GithubAuthProvider(),
};

export const auth = firebase.auth();
export const db = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
};
export default Firebase;
