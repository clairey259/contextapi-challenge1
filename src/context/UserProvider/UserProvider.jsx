import React, { createContext, useState } from "react";
import Nav from "../../components/Nav";
import Home from "../../components/Home";
import Styles from "./UserProvider.module.scss";

export const UserContext = createContext({});

const UserProvider = () => {
  const user = {
    name: "Claire Huizenga",
  };

  const [currentUser, setCurrentUser] = useState(user);

  return (
    <UserContext.Provider value={currentUser}>
      <div className={Styles.userProvider}>
        <Nav />
        <Home />
      </div>
    </UserContext.Provider>
  );
};

export default UserProvider;