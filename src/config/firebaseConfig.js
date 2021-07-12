import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

  var firebaseConfig = {
    apiKey: "AIzaSyBTKXphHLcMu_IilFbCl8wlzUZo-KvKlfM",
    authDomain: "todo-app-25d5f.firebaseapp.com",
    projectId: "todo-app-25d5f",
    storageBucket: "todo-app-25d5f.appspot.com",
    messagingSenderId: "522240834767",
    appId: "1:522240834767:web:5c369170b738c6a8244bba",
    measurementId: "G-T1K3XJG21F"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;