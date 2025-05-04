import React from 'react';
import './itemdescription.css';
import Heart from '../assets/heart.png';
import Frame from '../assets/frame.png';
import Navbar from './navbar';

const ItemDescription = () => {
  return (
    <div className="page-container">
    <Navbar />
  
  <div className="content">
    <div className="productimage">
      <img src={Frame} alt="frame" style={{width: '570px'}} className="frame"/>
    </div>
    <div className="productdescription">
      <h1 style={{fontFamily: 'Bayer TypeArchiType Regular' }} className='productname'>Product Name</h1>
      <h3 style={{fontFamily: 'Times New Roman' }} className='price'>P0.00</h3>
      <h2 style={{fontFamily: 'Bayer TypeArchiType Regular' }} className='description'>Short Product Description</h2>
      <div className='buttongroup'>
      <button class="button" type="submit" className='fav'><img src={Heart} alt="Fav"/></button>
      <button class="button" type="submit" className='add'>add to bag</button>
      </div>
    </div>
  </div>
  </div>
  )
}

export default ItemDescription;