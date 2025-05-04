import React from 'react';
import stylecart from './cart.module.css';
import Navbar from './navbar';

const MyCart = () => {
    return(
        <div className={stylecart.cartPage}>
            <Navbar/>
        <div className={stylecart.cartContainer}>
            <h1 className="cartTitle" style={{fontFamily: 'Bayer TypeArchiType Regular' }}>your cart</h1>
        <div className={stylecart.itemList}>

        </div>
        </div>
        </div>
    )
}

export default MyCart;