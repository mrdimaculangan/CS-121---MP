import React from 'react';
import Cart from '../../assets/cart.png';
import Heart from '../../assets/heart.png';
import Home from '../../assets/home.png';
import Profile from '../../assets/profile.png';
import Search from '../../assets/search.png';
import Login from './login';
import design from './navbar.module.css';

export const Navbar = () => {
  return (
    <nav className={design.navbar}>
    <div className={design.navbarContainer}>
      <ul className={design.navbarLinksLeft}>
        <li><a href="/"><img src={Home} alt="homepage" style={{ width: '40px' }} /></a></li>
      </ul>
      <h1 style={{fontFamily: 'Bayer TypeArchiType Regular' }} className={design.storeName}>storename</h1>
      <form className={design.search}>
        <input className={design.searchBar} type='search' placeholder='Search'/>
        <button class="button" type="submit" className={design.searchSubmit}><img src={Search} alt="Description" style={{ width: '25px' }} /></button>
      </form>
      <ul className={design.navbarLinksRight}>
        <li><a href={Login}><img src={Profile} alt="Description" style={{ width: '40px' }} /></a></li>
        <li><a href="/"><img src={Heart} alt="Description" style={{ width: '40px' }} /></a></li>
        <li><a href="/"><img src={Cart} alt="Description" style={{ width: '36px' }} /></a></li>
    </ul>
    </div>
  </nav> )
}

export default Navbar