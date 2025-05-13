import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styles from './navbar.module.css';
import logo from '../../assets/logo.png';
import search from '../../assets/search.png';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleAboutClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/?section=about");
    } else {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logoImg} />
      </div>

      <div className={styles.navRow}>
        <ul className={styles.navLinks}>
          <li><Link to="/">home</Link></li>
          <li><Link to="/shop">shop</Link></li>
          <li><a href="#about" onClick={handleAboutClick}>about us</a></li>
          <li><Link to="/login">log-in</Link></li>
          <li><Link to="/cart">cart</Link></li>
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
