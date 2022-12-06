import React, { useContext } from "react";
import { UserContext } from "../../context/UserProvider/UserProvider";
import Styles from "./Login.module.scss";
import { app } from "../../firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithRedirect,
  updateCurrentUser,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import BasicForm from "../BasicForm/BasicForm";
import { ThemeContext } from "../../context/ThemeProvider/ThemeProvider";
import { db, auth, handleGoogleLogin} from "../../firebase";

const Login = ({navigate}) => {
  const theme = useContext(ThemeContext);

  const user = useContext(UserContext);
  const provider = new GoogleAuthProvider();


  // const handleGoogleLogin = (e) => {
  //   signInWithRedirect(getAuth(app), provider)
  //     .then((res) => {
  //       console.log(res)
  //       updateCurrentUser(res)
  //       user.setCurrentUser(app.User.email)
  //     })
  // };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    
  const handleUpdateUser = (userInfo) => {
        user.setCurrentUser(userInfo);
        updateCurrentUser(userInfo)
  }
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        handleUpdateUser(res.user.email)
        alert("welcome back to MazinApp");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })

      .catch((e) => {
        alert("sorry something went wrong");
      });
  };

  return (
    <section className={theme.isDarkTheme ? Styles.dark : Styles.light} data-testid="themeContainer">
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
        }} data-testid="googleLogin"
      >
        <b>Login</b> With Your Google Account{" "}
      </p>
      <p
        onClick={(e) => {
          navigate("/CreateAccount");
        }} data-testid="createAccount"
      >
        Don't have an account? <b>Create</b> an Account
      </p>
    </section>
    
  );
};

export default Login;
