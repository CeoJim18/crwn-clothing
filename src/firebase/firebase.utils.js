import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';

import 'firebase/compat/auth';

const config={
  apiKey: "AIzaSyA-Khx7CUcd90VZw2lyZj3poIM4arTYPXI",
  authDomain: "crwn-db-424eb.firebaseapp.com",
  projectId: "crwn-db-424eb",
  storageBucket: "crwn-db-424eb.appspot.com",
  messagingSenderId: "868994403091",
  appId: "1:868994403091:web:556be695da20834436a8e6",
  measurementId: "G-HYE6N5ETGW"
};

firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider= new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;
