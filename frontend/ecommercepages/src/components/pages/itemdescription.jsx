import React from 'react';
import './itemdescription.css';
import Cart from '../assets/cart.png';
import Heart from '../assets/heart.png';
import Home from '../assets/home.png';
import Profile from '../assets/profile.png';
import Search from '../assets/search.png';
import Frame from '../assets/frame.png';

const ItemDescription = () => {
  return (
    <div className="page-container">
    <nav className="navbar">
    <div className="navbar-container">
      <ul className="navbar-links-left">
        <li><a href="/"><img src={Home} alt="homepage" style={{ width: '40px' }} /></a></li>
      </ul>
      <h1 style={{fontFamily: 'Bayer TypeArchiType Regular' }}>storename</h1>
      <form className='search'>
        <input className='searchBar' type='search' placeholder='Search'/>
        <button class="button" type="submit"><img src={Search} alt="Description" style={{ width: '25px' }} /></button>
      </form>
      <ul className="navbar-links-right">
        <li><a href="/"><img src={Profile} alt="Description" style={{ width: '40px' }} /></a></li>
        <li><a href="/"><img src={Heart} alt="Description" style={{ width: '40px' }} /></a></li>
        <li><a href="/"><img src={Cart} alt="Description" style={{ width: '36px' }} /></a></li>
    </ul>
    </div>
  </nav>
  <div className="content">
    <div className="productimage">
      <img src={Frame} alt="frame" style={{width: '570px'}} className="frame"/>
    </div>
    <div className="productdescription">
      <h1 style={{fontFamily: 'Bayer TypeArchiType Regular' }} className='productname'>Product Name</h1>
      <h3 style={{fontFamily: 'Times New Roman' }} className='price'>P0.00</h3>
      <h2 style={{fontFamily: 'Bayer TypeArchiType Regular' }} className='description'>Short Product Description</h2>
      <div className='buttongroup'>
      <button class="button" type="submit" className='fav'><img src={Heart} alt="Fav" style={{ width: '50px' }} /></button>
      <button class="button" type="submit" className='add'>add to bag</button>
      </div>
    </div>
  </div>
  </div>
  )
}

export default ItemDescription;