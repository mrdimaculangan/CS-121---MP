import React from 'react'
import Navbar from './navbar'
import styles from './shop.module.css'
import flower from '../../assets/flower.jpeg'

const Shop = () => {
    return (
     <div className={styles.ShopContainer}>
          <Navbar />
        <div className = {styles.shopSection}>
            <h1> SHOP SECTION </h1>
            {/* insert sample products with button that will lead to full on store*/}
            <img src={flower} alt='flower' />
        </div>
    </div>
    )
}

export default Shop