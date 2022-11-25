import React, { useContext } from "react";
import { UserContext } from "../../context/UserProvider/UserProvider";
import Styles from "./Login.module.scss";
import { app } from "../../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const user = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signInWithEmailAndPassword(getAuth(app), email, password)
      .then((res) => {
        user.setCurrentUser(res.user.email);
        alert("welcome back to MazinApp");
      })
      .catch((e) => {
        console.dir(e)
        alert("sorry something went wrong")
      });
  };

  return (
    <form action="action_page.php" method="post" onSubmit={handleSubmit}>
      <div className={Styles.container}>
        <label for="uname">
          <b>Username</b>
        </label>
        <input type="text" placeholder="Enter Username" name="uname" required />

        <label for="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />

        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default Login;
