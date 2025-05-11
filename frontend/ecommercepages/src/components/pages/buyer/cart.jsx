import React from 'react';
import stylecart from './cart.module.css';
import Navbar from './navbar';

const MyCart = () => {
    return(
        <div className={stylecart.cartPage}>
            <Navbar/>
        <div className={stylecart.cartContainer}>
            <p className={stylecart.cartTitle} style={{fontFamily: 'Bayer TypeArchiType Regular' }}>your cart</p>
        <div className={stylecart.itemList}>

        </div>
        </div>
        </div>
    )
}

export default MyCart;