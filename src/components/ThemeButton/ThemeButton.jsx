import React, { useContext } from "react";
import Styles from "../ThemeButton/ThemeButton.module.scss";
import { ThemeContext } from "../../context/ThemeProvider/ThemeProvider";

const ThemeButton = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className={Styles.buttonContainer}>
      <p>Light</p>
      <label className={Styles.switch}>
        <input type="checkbox" />
        <span className={Styles.slider} onClick={theme.toggleTheme}></span>
      </label>
      <p>Dark</p>
    </div>
  );
};

export default ThemeButton;
