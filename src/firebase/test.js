import firebase from 'firebase/app';
import 'firebase/compat/firestore';

const firestore=firebase.firestore();

firestore.collection('users').doc('juTKWsZJ9mnG7gb0PP5H').collection('cartItems').doc('Yffta7cN3d3bqtMxuv8V');
//of de volgende manier:
firestore.doc('users/juTKWsZJ9mnG7gb0PP5H/cartItems/Yffta7cN3d3bqtMxuv8V');
//dit is om collections vanuit firebase database te halen (docs lezen hierover)
