import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserProvider/UserProvider';
import Styles from './NavMenu.module.scss'


const NavMenu = () => {

    const user = useContext(UserContext);


  return (
    <div className={Styles.navMenu}>
       <div >
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
       </div>
            
    </div>
  )
}

export default NavMenu