import React, { useContext } from "react";
import { UserContext } from "../../context/UserProvider/UserProvider";
import Styles from "./Login.module.scss";
import { signInWithEmailAndPassword, updateCurrentUser } from "firebase/auth";
import BasicForm from "../BasicForm/BasicForm";
import { ThemeContext } from "../../context/ThemeProvider/ThemeProvider";
import { auth, handleGoogleLogin } from "../../firebase";

const Login = ({ navigate }) => {
  const theme = useContext(ThemeContext);

  const user = useContext(UserContext);
  const handleUpdateUser = async (userInfo) => {
    await user.setCurrentUser(userInfo);
  };

  const handleAlertandRedirect = (message, time) => {
    alert(message);
    setTimeout(() => {
      navigate("/");
    }, time);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (user.name == "user") {
      const email = e.target[0].value;
      const password = e.target[1].value;

      signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          handleUpdateUser(res.user.email);
          handleAlertandRedirect("Welcome back to MazinApp", 1000);
        })

        .catch((e) => {
          alert("sorry something went wrong");
        });
    } else alert("You need to logout first!");
  };

  return (
    <section
      className={theme.isDarkTheme ? Styles.dark : Styles.light}
      data-testid="themeContainer"
    >
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
          if (user.name == "user") {
            handleGoogleLogin()
              .then((res) => handleUpdateUser(res))
              .then(() => handleAlertandRedirect("Welcome to MazinApp", 1000))
              .catch(() =>
                handleAlertandRedirect("Sorry! Something went wrong", 2000)
              );
          } else alert("You need to logout first!");
        }}
        data-testid="googleLogin"
      >
        <b>Login</b> With Your Google Account{" "}
      </p>
      <p
        onClick={(e) => {
          navigate("/CreateAccount");
        }}
        data-testid="createAccount"
      >
        Don't have an account? <b>Create</b> an Account
      </p>
    </section>
  );
};

export default Login;
