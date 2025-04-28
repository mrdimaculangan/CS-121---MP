import React from 'react';
import './itemdescription.css';
import Cart from '../assets/cart.png';
import Heart from '../assets/heart.png';
import Home from '../assets/cart.png';
import Profile from '../assets/cart.png';

const ItemDescription = () => {
  return (
    <nav className="navbar">
    <div className="navbar-container">
      <ul className="navbar-links">
        <li><a href="/">new</a></li>
        <li><a href="/about">homepage</a></li>
      </ul>
      <form className='search'>
        <input className='searchBar' type='search' placeholder='Search'/>
        <button class="button" type="submit">Search</button>
      </form>
    </div>
  </nav>
  )
}

export default ItemDescription;