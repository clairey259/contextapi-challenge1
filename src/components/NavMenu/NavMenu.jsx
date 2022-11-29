import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Styles from "./NavMenu.module.scss";

const NavMenu = () => {

  return (
      <div className={Styles.navMenu}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/logout">LogOut</Link>
          </li>
        </ul>
      </div>
  );
};

export default NavMenu;
