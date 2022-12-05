import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeProvider/ThemeProvider";
import { UserContext } from "../../context/UserProvider/UserProvider";
import NavMenu from "../NavMenu";
import Styles from "./Nav.module.scss";

const Nav = () => {
  const theme = useContext(ThemeContext);
  const user = useContext(UserContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={theme.isDarkTheme ? Styles.navDark : Styles.navLight}
      data-testid="navBar"
    >
      <h1>MazinApp</h1>
      <h3>Hello {user.name}</h3>
      <div
        onMouseEnter={(e) => setIsMenuOpen(true)}
        onMouseOut={(e) => setIsMenuOpen(false)}>
      {!isMenuOpen && (
        <h4
          data-testid="menuLabel"
        >
          MENU
        </h4>
      )}
      {isMenuOpen && (
        <div
          data-testid="navMenuStyles"
        >
          <NavMenu />
        </div>
      )}
      </div>      
    </nav>
  );
};

export default Nav;
