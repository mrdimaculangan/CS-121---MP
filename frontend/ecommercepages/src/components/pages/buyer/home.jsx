import React from 'react'
import home from '../../assets/home.mp4'
import styles from './home.module.css'
import Navbar from './navbar'



const Home = () => {
    return (
     <div className={styles.homeContainer}>
          <Navbar />
        <div className = {styles.video}>
            <video src={home} autoPlay loop muted />
        </div>
    </div>
    )
}

export default Home