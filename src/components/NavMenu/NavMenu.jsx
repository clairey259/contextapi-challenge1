import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserProvider/UserProvider';
import Styles from './NavMenu.module.scss'


const NavMenu = () => {

    const user = useContext(UserContext);


  return (
    <div className={Styles.navMenu}>

       <div className={Styles.open}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/logout">LogOut</Link>
          </li>
        </ul>
       </div>
            
    </div>
  )
}

export default NavMenu

{/* <div className={Styles.navMenu}>
<div>
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/login">Login</Link>
    </li>
    <li
      onClick={(e) => {
        e.preventDefault();
        handleLogOut();
      }}
    >
      Logout
    </li>
  </ul>
</div>
</div> */}