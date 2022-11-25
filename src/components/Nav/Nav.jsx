import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeProvider/ThemeProvider'
import NavMenu from '../NavMenu'
import Styles from "./Nav.module.scss"

const Nav = () => {

    const theme = useContext(ThemeContext);

  return (
    <nav className={theme.isDarkTheme ? Styles.navDark : Styles.navLight}>
        <h1>MazinApp</h1>
        <NavMenu />
    </nav>
  )
}

export default Nav