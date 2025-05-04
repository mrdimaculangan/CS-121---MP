import React, {useState} from 'react';
import Navbar from './navbar';
import styleslogin from './login.module.css';


const Login = () => {
  const [showRegister, setShowRegister] = useState(false); {/* initialize states*/}

  const handleToggle = () => {
    setShowRegister(!showRegister);
  };

  return (
   <div className={styleslogin.loginContainer}>
    <Navbar/> {/* import navbar */}

  <div className={styleslogin.loginregisterBody}>
  <div className={styleslogin.loginregisterMain}>
  {/* Checkbox mimic toggle */}
  <input type="checkbox" id="chk" aria-hidden="true" checked={showRegister} onChange={handleToggle} />

  {/* --------------- LOGIN --------------- */}
  <div className={styleslogin.logIn}>
    <form>
      <input type="hidden" name="form_type" value="login" disabled={showRegister} className='loginInput'/>
      <label htmlFor="chk" aria-hidden="true">log-in</label>
      <input type="text" name="email" placeholder="Email" className='loginEmail'/><br />
      <input type="password" name="password" placeholder="Password" className='loginPassword'/><br />
      <button type="submit" className="logInButton">LOG IN</button>
    </form>
  </div> 

  {/* --------------- REGISTER --------------- */}
  <div className={styleslogin.register}>
    <form>
    <input type="hidden" name="form_type" value="register" disabled={!showRegister} />
      <label htmlFor="chk" aria-hidden="true">register</label>
      <input name="first_name" placeholder="First Name" /><br />
      <input name="last_name" placeholder="Last Name" /><br />
      <input name="email" placeholder="Email" /><br />
      <input type="password" name="password" placeholder="Password" /><br />
      <button type="submit" className='registerButton'>REGISTER</button> 
    </form>
  </div>

  </div>
  </div>
  </div>
  );
};



export default Login