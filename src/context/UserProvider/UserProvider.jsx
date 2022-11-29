import React, { createContext, useState } from "react";

import Styles from "./UserProvider.module.scss";

import Routeing from "../Routes/Routeing";

export const UserContext = createContext({});

const UserProvider = () => {
  const [currentUser, setCurrentUser] = useState("user");

  const user = {
    name: currentUser,
    setCurrentUser: setCurrentUser,
  };
  return (
    <UserContext.Provider value={user}>
      <div className={Styles.userProvider}>
        <Routeing />
      </div>
    </UserContext.Provider>
  );
};

export default UserProvider;
