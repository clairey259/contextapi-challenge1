import React, { useContext } from "react";
import BasicForm from "../BasicForm/BasicForm";
import {
  createUserWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
import { UserContext } from "../../context/UserProvider/UserProvider";
import { useNavigate } from "react-router-dom";
import { app } from "../../firebase";
const CreateUser = () => {
  const user = useContext(UserContext);
  const navigate = useNavigate();

  const handleCreateUserSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    createUserWithEmailAndPassword(getAuth(app), email, password).then(
        alert("Thanks for joining MazinApp. Please log in")
    ).then (navigate("/login"))
  };

  return (
    <>
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
    </>
  );
};

export default CreateUser;
