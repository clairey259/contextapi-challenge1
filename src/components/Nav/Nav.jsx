import React from 'react'
import NavMenu from '../NavMenu'
import Styles from "./Nav.module.scss"

const Nav = () => {
  return (
    <div className={Styles.nav}>
        <section className={Styles.logo}>MazinApp</section>
        <NavMenu />
    </div>
  )
}

export default Nav