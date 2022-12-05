import React, { useContext } from "react";
import Styles from "../ThemeButton/ThemeButton.module.scss";
import { ThemeContext } from "../../context/ThemeProvider/ThemeProvider";

const ThemeButton = () => {
  const theme = useContext(ThemeContext);
  return (
    <section className={theme.isDarkTheme ? Styles.dark : Styles.light} data-testid="themeButton">
    <div className={Styles.buttonContainer} data-testid="buttonContainer">
      <p>Light</p>
      <label className={Styles.switch}>
        <input type="checkbox" />
        <span className={Styles.slider} onClick={theme.toggleTheme}></span>
      </label>
      <p>Dark</p>
    </div>
    </section>
  );
};

export default ThemeButton;
