import React, { useState } from 'react';
import styles from './login.module.css'; // adjust path if needed
import Navbar from './navbar';

const Login = () => {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className={styles.loginContainer}>
      <Navbar />
      <div className={styles.loginregisterBody}>
        <div
          className={`${styles.loginregisterMain} ${showRegister ? styles.active : ''}`}
        >
          {/* Login Form */}
          <div className={styles.formPage}>
            <form className={styles.loginForm}>
              <label onClick={() => setShowRegister(false)}>log-in</label>
              <input type="text" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button type="submit" className={styles.logInButton}>LOG IN</button>
            </form>
          </div>

          {/* Register Form */}
          <div className={styles.formPage + ' ' + styles.registerForm}>
            <form>
              <label onClick={() => setShowRegister(true)}>register</label>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button type="submit" className={styles.registerButton}>REGISTER</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
