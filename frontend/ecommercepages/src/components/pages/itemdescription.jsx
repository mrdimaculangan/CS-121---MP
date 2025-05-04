import React from 'react';
import styleitem from './itemdescription.module.css';
import Heart from '../assets/heart.png';
import Frame from '../assets/frame.png';
import Navbar from './navbar';

const ItemDescription = () => {
  return (
    <div className={styleitem.itemContainer}>
    <Navbar />
  
  <div className={styleitem.content}>
    <div className={styleitem.productimage}>
      <img src={Frame} alt="frame" style={{width: '570px'}} className={styleitem.frame}/>
    </div>
    <div className={styleitem.productdescription}>
      <h1 style={{fontFamily: 'Bayer TypeArchiType Regular' }} className={styleitem.productname}>Product Name</h1>
      <h3 style={{fontFamily: 'Times New Roman' }} className={styleitem.price}>P0.00</h3>
      <h2 style={{fontFamily: 'Bayer TypeArchiType Regular' }} className={styleitem.description}>Short Product Description</h2>
      <div className={styleitem.buttongroup}>
      <button class="button" type="submit" className={styleitem.fav}><img src={Heart} alt="Fav" style={{width: '50px'}}/></button>
      <button class="button" type="submit" className={styleitem.add}>add to bag</button>
      </div>
    </div>
  </div>
  </div>
  )
}

export default ItemDescription;