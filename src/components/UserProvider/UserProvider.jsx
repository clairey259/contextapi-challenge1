import React from "react";
import Home from "../Home";
import Nav from "../Nav";

import Styles from "./UserProvider.module.scss";

const userProvider = () => {
  return (
    <div className={Styles.userProvider}>
      <Nav />
      <Home />
    </div>
  );
};

export default userProvider;
