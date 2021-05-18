import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyANNRnZi5yIuD6NN8SIcaN7Lk6QqTFSbnY",
    authDomain: "instagram-clone-coding.firebaseapp.com",
    projectId: "instagram-clone-coding",
    storageBucket: "instagram-clone-coding.appspot.com",
    messagingSenderId: "823284828767",
    appId: "1:823284828767:web:d85477c5cdd8704fbce9ea"
  };

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export default firestore ;