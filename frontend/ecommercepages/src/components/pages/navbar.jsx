import React from 'react';
import './itemdescription.css';
import Cart from '../assets/cart.png';
import Heart from '../assets/heart.png';
import Home from '../assets/home.png';
import Profile from '../assets/profile.png';
import Search from '../assets/search.png';
import Login from './login';

export const Navbar = () => {
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
        <li><a href={Login}><img src={Profile} alt="Description" style={{ width: '40px' }} /></a></li>
        <li><a href="/"><img src={Heart} alt="Description" style={{ width: '40px' }} /></a></li>
        <li><a href="/"><img src={Cart} alt="Description" style={{ width: '36px' }} /></a></li>
    </ul>
    </div>
  </nav> 
  </div>)
}

export default Navbar