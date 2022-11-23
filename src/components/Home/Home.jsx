import React from 'react'
import Styles from "./Home.module.scss"

const home = () => {
  return (
    <div className={Styles.home}>
        <section className={Styles.welcomeCard}>
            <h1>Welcome Home</h1>
            <h1>John Doe!</h1>
        </section>
    </div>
  )
}

export default home