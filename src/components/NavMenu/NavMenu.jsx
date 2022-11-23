import React from 'react'
import Styles from './NavMenu.module.scss'

const NavMenu = () => {
  return (
    <div className={Styles.navMenu}>
        <select name="name" id='name'/>
            <option value="John Doe">John Doe</option>
    </div>
  )
}

export default NavMenu