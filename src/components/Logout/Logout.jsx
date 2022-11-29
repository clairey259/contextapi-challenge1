import { getAuth, signOut } from "firebase/auth";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserProvider/UserProvider";
import { app } from "../../firebase";

const Logout = () => {
  const user = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogoutSubmit = (e) => {
    signOut(getAuth(app))
      .then(user.setCurrentUser("user"))
      .then(alert("You have successfully been logged out"))
      .then(navigate("/login"));
  };

  const handleNotLoggedIn = () => {
    alert("You are not logged in!");
  };

  return (
    <>
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
      <div>{console.log(user)}</div>
    </>
  );
};

export default Logout;
