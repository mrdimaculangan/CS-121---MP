import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './profileinformation.module.css';
import Transparent from '../../assets/transparent.png';
import Flower from '../../assets/flower.png';
import Navbar from './navbar';

const ProfileInformation = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Optional: Clear auth data from localStorage/session
    // localStorage.removeItem('user');
    // Then redirect to login page
    navigate('/login');
  };

  return (
    <div className={styles.profilepageContainer}>
      <Navbar />
      <div className={styles.profileInfo}>
        <div className={styles.container}>
          <div className={styles.profileMain}>
            <div className={styles.content}>
              <img src={Flower} alt="flower" style={{ width: '90px' }} className={styles.flowerPic} />
              <h1 className={styles.welcomeMessage}>welcome, user!</h1>
              <h2 className={styles.infoMessage}>here are your information:</h2>
              <h3 className={styles.email}>email: name@email.com</h3>
              <h3 className={styles.username}>username: username</h3>
              <button onClick={handleLogout} className={styles.logout}>log out</button>
            </div>
            <div className={styles.pic}>
              <img id="photo" src={Transparent} alt="nature" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInformation;
