import React from "react";
import Styles from './Login.module.scss'

const Login = () => {
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
