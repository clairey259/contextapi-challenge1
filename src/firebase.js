// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCr4VCjPFwCYA-l2MBc6_bJZD0kKSDdt_0",
  authDomain: "mazinapp-a38c5.firebaseapp.com",
  projectId: "mazinapp-a38c5",
  storageBucket: "mazinapp-a38c5.appspot.com",
  messagingSenderId: "996377006559",
  appId: "1:996377006559:web:e91fd7dcf0ed224e45346a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)