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
  //const collectionRef=firestore.collection('users');

  const snapShot=await userRef.get();
  //de command lines beneden zijn om collectionSnapshots te maken 
  //const collectionSnapshot= await collectionRef.get();//Bij CRUD methods in firebase zet je altijd await wrvoor, omdat het async is. 
  //console.log({collection: collectionSnapshot.docs.map(doc=> doc.data())});

  //Hier boven hebben wij document snapshots eruit gehaald. echter kan je ook met collectionSnapshots/ querySnapshots werken,
   if (!snapShot.exists){
     const  {displayName, email}= userAuth;
     const createdAt= new Date();

     try{
      await userRef.set({ //get en set methods zijn altijd async, omdat het niet gelijk runned ( je maakt requests/je doet iets buiten de programma)
        displayName:'Test User',
        email:'randomEmail@gmail.com',
        createdAt,
        ...additionalData,
      })//die set stored data in database
     } catch(error){
       console.log('Error creating user', error.message);
     }
   }
   
   return userRef;
}

//async omdat je api req maakt
firebase.initializeApp(config);

export const addCollectionAndDocuments = async (collectionKey,objectstoAdd)=>{
  const collectionRef=firestore.collection(collectionKey);//die key is hier geen token achtig ding, maar gewoon een willekeurig naam die je kan zetten(onthouden bij collection(queryReference))

  const batch=firestore.batch();

  objectstoAdd.forEach(obj=> {
    const newDocRef= collectionRef.doc();//geeft een document reference terug die in die collectionreference is.
    //tussen de haakjes van .doc() kan je zetten wat je wilt...hier hebben we obj.title. Als je niets zet genereerd firebase een unique key.
   //je zult 5 document objects zien, omdat je array 5 items heeft
   batch.set(newDocRef, obj);// dit batch al die 5 calls samen en request ze in 1 keer
  });
return await batch.commit();//commit is om die batch te activeren. commit returned een promise

}//met die ref kan je verwijzen naar collection ookal bestaat het niet en hierdoor kan je op die reference adden.

export const convertCollectionsSnapshotToMap=(collections)=>{
  const transformedCollection= collections.docs.map((doc)=> {
    const {title,items}=doc.data();
    
    return {
      routeName: encodeURI(title.toLowerCase()),//uitleg encodeURI zie schrift..title is gepassed omdat je als route dezelfde naam hebt als title //meer uizoeken over encodeURI
      id: doc.id,//dit krijg je van die document zelf...niet van doc.data().
      title,
      items
    };
  });
 
  
  return transformedCollection.reduce((accumulator,collection)=>{//returned gewoon een object
    accumulator[collection.title.toLowerCase()]=collection;
    return accumulator;//deze functie is niet wat je verwacht van een typical reduce; je returned niet 1 waarde maar een object in dit geval, omdat je steeds nieuwe key value pairs zet in accumalator
  },{});
  
};

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider= new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;
