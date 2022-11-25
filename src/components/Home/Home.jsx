import React, { useContext } from 'react'
import Styles from "./Home.module.scss"
import { UserContext } from '../UserProvider/UserProvider'

const Home = () => {

    const data = useContext(UserContext);
    console.dir(data)
    
  return (
    <div className={Styles.home}>
        <section className={Styles.welcomeCard}>
            <h1>Welcome Home</h1>
            <h1>{data.name}</h1>
        </section>
    </div>
  )
}

export default Home