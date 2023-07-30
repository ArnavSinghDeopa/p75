import firebase from "firebase";
require("@firebase/firestore");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFjL8QtuyYeVaGYKmNX62SMj7DFunopU4",
  authDomain: "p75p-bf132.firebaseapp.com",
  projectId: "p75p-bf132",
  storageBucket: "p75p-bf132.appspot.com",
  messagingSenderId: "383636941203",
  appId: "1:383636941203:web:3c23ac2dbe6c212dc3a066",
  measurementId: "G-E2MVTTCPHC"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
