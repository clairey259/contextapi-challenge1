import React, { createContext, useEffect, useState } from "react";
import Nav from "../../components/Nav";
import Home from "../../components/Home";
import Styles from "./UserProvider.module.scss";
import Login from "../../components/Login/Login";

export const UserContext = createContext({});


const UserProvider = () => {



const [currentUser, setCurrentUser] = useState("user");

const user = {
    name: currentUser,
    setCurrentUser: setCurrentUser
  };

  
 

  return (
    <UserContext.Provider value={user}>
      <div className={Styles.userProvider}>
        <Nav />
        <Home />
        <Login />
      </div>
    </UserContext.Provider>
  );
};

export default UserProvider;
