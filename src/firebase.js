import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';



var firebaseConfig = {
    apiKey: "AIzaSyBeb5Own3_Q4EsTr7jOPnEMTIR5ywGiE_w",
    authDomain: "react-slack-clone-c0480.firebaseapp.com",
    projectId: "react-slack-clone-c0480",
    storageBucket: "react-slack-clone-c0480.appspot.com",
    messagingSenderId: "919380972940",
    appId: "1:919380972940:web:a7a71a20ebc0fd87eab2a9",
    measurementId: "G-K6JEE2BP8Q"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics()

  export default firebase;