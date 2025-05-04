import React from 'react';
import './profileinformation.css';
import Transparent from '../assets/transparent.png';
import Flower from '../assets/flower.png'
import Navbar from './navbar';

const ProfileInformation = () => {
  return (

    <div className="profilepage-container">
    <Navbar/>

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