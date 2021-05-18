import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDz6pSdf4LCf1YQn5x76haqeGwwPDTvP_U",
    authDomain: "reactchat-b8de4.firebaseapp.com",
    projectId: "reactchat-b8de4",
    storageBucket: "reactchat-b8de4.appspot.com",
    messagingSenderId: "318740535879",
    appId: "1:318740535879:web:7c66edf44f5ebf3e09ef62"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export default firebase;