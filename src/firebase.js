import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAbUXrosQu5D_G-9EZ7Dpv8nhzKePxZnKA',
  authDomain: 'clone-800f1.firebaseapp.com',
  databaseURL: 'https://clone-800f1.firebaseio.com',
  projectId: 'clone-800f1',
  storageBucket: 'clone-800f1.appspot.com',
  messagingSenderId: '180818959443',
  appId: '1:180818959443:web:c4e6d651ee7e8426bd3aa6',
  measurementId: 'G-4MHLX07R4K',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
