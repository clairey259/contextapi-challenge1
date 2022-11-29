import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeProvider/ThemeProvider";
import Styles from "./NotFound.module.scss";
const NotFound = () => {
  const navigate = useNavigate();
  const theme = useContext(ThemeContext);

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, []);
  return <div className={theme.isDarkTheme ? Styles.dark : Styles.light}>NotFound</div>;
};

export default NotFound;
