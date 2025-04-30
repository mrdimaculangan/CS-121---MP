import React from 'react';
import './profileinformation.css';
import Cart from '../assets/cart.png';
import Heart from '../assets/heart.png';
import Home from '../assets/home.png';
import Profile from '../assets/profile.png';
import Search from '../assets/search.png';
import Transparent from '../assets/transparent.png';
import Flower from '../assets/flower.png'

const ProfileInformation = () => {
  return (
    <div className="profilepage-container">
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
  <div className="profile-info">
    <div className="container">
      <div className="main">
        <div className="content">
        <img src={Flower} alt="flower" style={{width: '90px'}} className='flowerpic'/>
            <h1>welcome, user!</h1>
            <h2>here are your information:</h2>
            <h3 className='email'>email: name@email.com</h3>
            <h3 className='username'>username: username</h3>
            <button class="button" type="submit" className='logout'>log out</button>
      </div>
      <div className="pic">
                  <img id = "photo" src={Transparent} alt="nature"></img>
        </div>
      </div>
    </div>
  </div>
  </div>
  );
};

export default ProfileInformation;