import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';
import logo from '../../assets/logo.png'
import search from '../../assets/search.png'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logoImg} />
      </div>

      <div className={styles.navRow}>
        <ul className={styles.navLinks}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/WAITLNG">Shop</Link></li>
          <li><Link to="/WAITLNG">About Us</Link></li>
          <li><Link to="/login">Log-In</Link></li>
          <li><Link to="/contact">Likes</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>

        <form className={styles.search}>
          <input
            className={styles.searchBar}
            type="search"
            placeholder="Search"
          />
          <button type="submit" className={styles.searchSubmit}>
            <img src={search} alt="Search" width="20" />
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;










/* import React from 'react';
import Cart from '../../assets/cart.png';
import Heart from '../../assets/heart.png';
import Home from '../../assets/home.png';
import Profile from '../../assets/profile.png';
import Search from '../../assets/search.png';
import Login from './login';
import design from './navbar.module.css';
import { Nav } from 'react-bootstrap';

export const Navbar = () => {
  return (
    <nav className={design.navbar}>
    <div className={design.navbarContainer}>
      <ul className={design.navbarLinksLeft}>
        <li><Nav.Link href="/"><img src={Home} alt="homepage" style={{ width: '40px' }} /></Nav.Link></li>
      </ul>
      <h1 style={{fontFamily: 'Bayer TypeArchiType Regular' }} className={design.storeName}>storename</h1>
      <form className={design.search}>
        <input className={design.searchBar} type='search' placeholder='Search'/>
        <button class="button" type="submit" className={design.searchSubmit}><img src={Search} alt="Description" style={{ width: '25px' }} /></button>
      </form>
      <ul className={design.navbarLinksRight}>
        <li><Nav.Link href="./login"><img src={Profile} alt="Description" style={{ width: '40px' }} /></Nav.Link></li>
        <li><Nav.Link href="/"><img src={Heart} alt="Description" style={{ width: '40px' }} /></Nav.Link></li>
        <li><Nav.Link href="/"><img src={Cart} alt="Description" style={{ width: '36px' }} /></Nav.Link></li>
    </ul>
    </div>
  </nav> 
  )
}

export default Navbar
*/