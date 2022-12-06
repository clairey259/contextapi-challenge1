import React, { useContext } from "react";
import BasicForm from "../BasicForm/BasicForm";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { UserContext } from "../../context/UserProvider/UserProvider";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import Styles from "./CreateUser.module.scss";
import { ThemeContext } from "../../context/ThemeProvider/ThemeProvider";
const CreateUser = () => {
  const theme = useContext(ThemeContext);

  const user = useContext(UserContext);
  const navigate = useNavigate();

  const handleCreateUserSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    createUserWithEmailAndPassword(auth, email, password)
      .then(alert("Thanks for joining MazinApp. Please log in"))
      .then(navigate("/login"));
  };

  return (
    <section className={theme.isDarkTheme ? Styles.dark : Styles.light}>
      <form
        action="action_page.php"
        method="post"
        onSubmit={handleCreateUserSubmit}
      >
        <div>
          <BasicForm
            inputOnePlaceholder="Enter your email address"
            inputTwoPlaceholder="Enter a secure password"
            buttonText="Create Account"
          />
        </div>
      </form>
    </section>
  );
};

export default CreateUser;
