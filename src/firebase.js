// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider, 
  getAuth,
  signInWithPopup,
  updateCurrentUser,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore"
import { UserContext } from "./context/UserProvider/UserProvider";

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
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const currentUser = UserContext(UserContext);


const handleGoogleLogin = async (e) => {
  const response = await signInWithPopup(auth, googleProvider)
  const googleUser = response.user
    .then(() => {
      updateCurrentUser(googleUser.email);
      currentUser.setCurrentUser(googleUser.email);
      
      alert("welcome back to MazinApp");
        setTimeout(() => {
          navigate("/");
        }, 1000);
    })
  console.log(response)
  console.log(googleUser)
    // .then((res) => {
    //   updateCurrentUser(res)
    //   user.setCurrentUser(app.User.email)
    // })
};
export {
  auth, db, handleGoogleLogin
}