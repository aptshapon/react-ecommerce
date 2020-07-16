import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCQEV_9DPPr0tOmgxG9qgoZjSjAJ1mDHgs",
    authDomain: "crwn-db-9ebfd.firebaseapp.com",
    databaseURL: "https://crwn-db-9ebfd.firebaseio.com",
    projectId: "crwn-db-9ebfd",
    storageBucket: "crwn-db-9ebfd.appspot.com",
    messagingSenderId: "1090099740634",
    appId: "1:1090099740634:web:ea3856850a271514188ae3",
    measurementId: "G-HNHWDF7W7C"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;