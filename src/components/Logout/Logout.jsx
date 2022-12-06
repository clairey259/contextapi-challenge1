import { getAuth, signOut } from "firebase/auth";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeProvider/ThemeProvider";
import { UserContext } from "../../context/UserProvider/UserProvider";
import { app, auth } from "../../firebase";
import Styles from "./Logout.module.scss";

const Logout = () => {
  const theme = useContext(ThemeContext);
  const user = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogoutSubmit = (e) => {
    signOut(auth)
      .then(user.setCurrentUser("user"))
      .then(alert("You have successfully been logged out"))
      .then(navigate("/login"));
  };

  const handleNotLoggedIn = () => {
    alert("You are not logged in!");
  };

  return (
    <section className={theme.isDarkTheme ? Styles.dark : Styles.light}>
      <div>Are you sure you want to logout?</div>
      <button
        onClick={
          user.name !== "user"
            ? () => handleLogoutSubmit()
            : () => handleNotLoggedIn()
        }
      >
        Logout
      </button>
    </section>
  );
};

export default Logout;
