import React from 'react'
import Navbar from './navbar'
import styles from './shop.module.css'
import flower from '../../assets/flower.jpeg'
import amor from '../../assets/amor.png';
import bianca from '../../assets/bianca.png';
import mari from '../../assets/mari.png';
import ItemDescription from "../../pages/buyer/itemdescription";
import shop from '../../pages/buyer/shop'
import { Link } from 'react-router-dom';


const Shop = () => {
    return (
     <div className={styles.shopContainer}>
      <Navbar />
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

      </div>
    </div>
  );
};

export default Shop