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

export const createUserProfileDocument= async (userAuth,additionalData) =>
{
  if (!userAuth) return; //exit from the function

  const userRef= firestore.doc(`users/${userAuth.uid}`);

  const snapShot=await userRef.get();
   if (!snapShot.exists){
     const  {displayName, email}= userAuth;
     const createdAt= new Date();

     try{
      await userRef.set({ //get en set methods zijn altijd async, omdat het niet gelijk runned ( je maakt requests/je doet iets buiten de programma)
        displayName,
        email,
        createdAt,
        ...additionalData
      })//die set stored data in database
     } catch(error){
       console.log('Error creating user', error.message);
     }
   }
   return userRef;
}
//async omdat je api req maakt
firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider= new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;
