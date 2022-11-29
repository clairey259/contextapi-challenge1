import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeProvider/ThemeProvider";
import { UserContext } from "../../context/UserProvider/UserProvider";
import NavMenu from "../NavMenu";
import Styles from "./Nav.module.scss";

const Nav = () => {
  const theme = useContext(ThemeContext);
  const user = useContext(UserContext);

  const [isMenuOpen, setisMenuOpen] = useState(false);
  const toggleMenuOpen = () => {
    setisMenuOpen(!isMenuOpen);
  };
  return (
    <nav className={theme.isDarkTheme ? Styles.navDark : Styles.navLight}>
      <h1>MazinApp</h1>
      <h3>Hello {user.name}</h3>
      <h4 className={isMenuOpen ? Styles.hide : Styles.show} onMouseEnter={(e) => {toggleMenuOpen()}}>MENU</h4>
      <div className={isMenuOpen ? Styles.show : Styles.hide} onMouseOut={(e) => {toggleMenuOpen()}}>
        <NavMenu />
      </div>
      
    </nav>
  );
};

export default Nav;
