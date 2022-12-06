// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  updateCurrentUser,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  doc,
  setDoc,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCr4VCjPFwCYA-l2MBc6_bJZD0kKSDdt_0",
  authDomain: "mazinapp-a38c5.firebaseapp.com",
  projectId: "mazinapp-a38c5",
  storageBucket: "mazinapp-a38c5.appspot.com",
  messagingSenderId: "996377006559",
  appId: "1:996377006559:web:e91fd7dcf0ed224e45346a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

const googleUserRef = collection(db, "users");

const handleGoogleLogin = async (e) => {
  const response = await signInWithPopup(auth, googleProvider);
  const googleUser = response.user;
  const q = query(googleUserRef, where("email", "==", googleUser.email));
  const qDoc = await getDocs(q);

  if (qDoc.empty) {
    await setDoc(doc(googleUserRef, googleUser.displayName), {
      email: googleUser.email,
    });
    return googleUser.email;
  } else {
    return googleUser.email;
  }
};

export { auth, db, handleGoogleLogin };
