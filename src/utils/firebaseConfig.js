// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANyBpu64UepwbiEw717N--Oa93aBcxAno",
  authDomain: "olhos-de-agua-react.firebaseapp.com",
  projectId: "olhos-de-agua-react",
  storageBucket: "olhos-de-agua-react.appspot.com",
  messagingSenderId: "97304843894",
  appId: "1:97304843894:web:d78077ff2ba8b30f5ab157"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;