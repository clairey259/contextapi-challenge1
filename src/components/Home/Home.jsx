import React, { useContext } from "react";
import Styles from "./Home.module.scss";
import { UserContext } from "../../context/UserProvider/UserProvider";
import { ThemeContext } from "../../context/ThemeProvider/ThemeProvider";
import ThemeButton from "../ThemeButton/ThemeButton";
import Login from "../Login/Login";

const Home = () => {

    const data = useContext(UserContext)
    const theme = useContext(ThemeContext)

  return (
    <div className={theme.isDarkTheme ? Styles.homeDark : Styles.homeLight}>
      <Login />
      <section className={Styles.welcomeCard}>
        <h1>Welcome Home</h1>
        <h1>{data.name}</h1>
      </section>
      <ThemeButton />
    </div>
  );
};

export default Home;
