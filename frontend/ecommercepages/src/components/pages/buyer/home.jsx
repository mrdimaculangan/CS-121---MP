import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import home from '../../assets/home.mp4';
import styles from './home.module.css';
import Navbar from './navbar';
import amor from '../../assets/amor.png';
import bianca from '../../assets/bianca.png';
import mari from '../../assets/mari.png';
import p1 from '../../assets/p1.jpeg'
import p2 from '../../assets/p2.jpeg'
import p3 from '../../assets/p3.jpeg'
import p4 from '../../assets/p4.jpeg'

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get('section');
    if (section === 'about') {
      const aboutElement = document.getElementById('about');
      if (aboutElement) {
        aboutElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className={styles.homeContainer}>
      <Navbar />

      <div className={styles.videoSection}>
        <div className={styles.videoGrid}>
            <div className={styles.sideImages}>
            <img src={p1} alt="decor 1" />
            <img src={p2} alt="decor 2" />
            </div>

            <div className={styles.centerVideo}>
            <video src={home} autoPlay loop muted />
            </div>

            <div className={styles.sideImages}>
            <img src={p3} alt="decor 3" />
            <img src={p4} alt="decor 4" />
            </div>
        </div>
        </div>
 

      <div className={styles.shopSection}>
        <h1>SHOP SECTION</h1>
        <div className={styles.productGrid}>
          <Link to="/itemdescription" className={styles.productCard}>
            <img src={amor} alt="Amorous Amor" />
            <p className={styles.productName}>Amorous Amor</p>
            <p className={styles.productPrice}>₱99,999</p>
          </Link>

          <Link to="/itemdescription" className={styles.productCard}>
            <img src={bianca} alt="Bianca's Baby" />
            <p className={styles.productName}>Bianca's Baby</p>
            <p className={styles.productPrice}>₱89,990</p>
          </Link>

          <Link to="/itemdescription" className={styles.productCard}>
            <img src={mari} alt="Marry Me, Mari" />
            <p className={styles.productName}>Marry Me, Mari</p>
            <p className={styles.productPrice}>₱99,899</p>
          </Link>
        </div>

        <Link to="/shop">
          <button className={styles.shopButton}>See Full Shop</button>
        </Link>
      </div>

      {/* ABOUT SECTION — scroll target */}
      <div id="about" className={styles.aboutSection}>
        <h1>ABOUT US</h1>
        <p>
          insert really nice quote ig
          grave idk what to do 
          pics natin ofc lorem ipsu change bg too i think 
          but idk what bg to use anymore
        </p>
      </div>
    </div>
  );
};

export default Home;
