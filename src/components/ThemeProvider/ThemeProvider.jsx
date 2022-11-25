import React, { useState, createContext } from 'react'
import Home from '../Home';
import Nav from '../Nav';
import Styles from './ThemeProvider.module.scss';

export const ThemeContext = createContext({})

const ThemeProvider = () => {

    const [isDarkTheme, toggleTheme] = useState(false);

  return (
   <ThemeContext.Provider value={isDarkTheme}>
    <Nav />
    <Home />
   </ThemeContext.Provider>
  )
}

export default ThemeProvider