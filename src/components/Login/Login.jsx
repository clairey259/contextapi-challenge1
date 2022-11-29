import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserProvider/UserProvider";
import Styles from "./Login.module.scss";
import { app } from "../../firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithRedirect,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";
import BasicForm from "../BasicForm/BasicForm";

const Login = () => {
  const user = useContext(UserContext);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    const auth = getAuth();
    signInWithRedirect(auth, provider);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signInWithEmailAndPassword(getAuth(app), email, password)
      .then((res) => {
        user.setCurrentUser(res.user.email);
        alert("welcome back to MazinApp");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })

      .catch((e) => {
        console.dir(e);
        alert("sorry something went wrong");
      });
  };

  return (
    <>
      <form action="action_page.php" method="post" onSubmit={handleLoginSubmit}>
        <div className={Styles.container}>
          <BasicForm
            inputOnePlaceholder="Enter Username"
            inputTwoPlaceholder="Enter Password"
            buttonText="Login"
          />
        </div>
      </form>
      <p
        onClick={(e) => {
          handleGoogleLogin();
        }}
      >
        Login With Your Google Account{" "}
      </p>
      <p
        onClick={(e) => {
          navigate("/CreateAccount");
        }}
      >
        Don't have an account? Create an Account
      </p>
    </>
  );
};

export default Login;
