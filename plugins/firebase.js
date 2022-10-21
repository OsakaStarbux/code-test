// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBv23FExh_zWWMphFTmU-nmstqCUPkHOcg",
  authDomain: "todos-e8550.firebaseapp.com",
  projectId: "todos-e8550",
  storageBucket: "todos-e8550.appspot.com",
  messagingSenderId: "930725978702",
  appId: "1:930725978702:web:46ed722ba234fd1543991f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
