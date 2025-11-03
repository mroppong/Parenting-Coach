// For your web app, you'll specifically need to add the Firebase JavaScript SDK,
// which includes the Firestore library.
// Make sure to replace the following with your project's Firebase project configuration.
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyDltOsaj7RXn2l4fMVcBmVBNBG4skLhoGY",
  authDomain: "parenting-coach.firebaseapp.com",
  projectId: "parenting-coach",
  storageBucket: "parenting-coach.firebasestorage.app",
  messagingSenderId: "799436238705",
  appId: "1:799436238705:web:e688c7cd88c865f67f50d0",
  measurementId: "G-5H9H0902QC",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Get a reference to the Firestore database
const db = firebase.firestore();
