import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCL7ZgiWNfqTscbriE1imVocdi3wXCtgZI",
    authDomain: "react-apps-c08b2.firebaseapp.com",
    databaseURL: "https://react-apps-c08b2.firebaseio.com",
    projectId: "react-apps-c08b2",
    storageBucket: "react-apps-c08b2.appspot.com",
    messagingSenderId: "650846953180",
    appId: "1:650846953180:web:416658192c7fb8429ede19"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db=firebase.firestore();
  const googleAuthProvider=new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }