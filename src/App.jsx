import React from "react";
import "./App.module.scss";
import Styles from "./App.module.scss";
import ThemeProvider from "./context/ThemeProvider/ThemeProvider";

const App = () => {
  return (
    <div className={Styles.app}>
      <ThemeProvider />
    </div>
  );
};

export default App;
