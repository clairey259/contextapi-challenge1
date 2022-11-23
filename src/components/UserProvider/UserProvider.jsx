import React from "react";
import Home from "../Home";
import Nav from "../Nav";

import Styles from "./UserProvider.module.scss";

const UserProvider = () => {
  return (
    <div className={Styles.userProvider}>
      <Nav />
      <Home />
    </div>
  );
};

export default UserProvider;
