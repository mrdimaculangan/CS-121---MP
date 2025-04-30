import React, { useEffect, useRef, useState } from 'react';
import './login.css'; 

const LoginRegister = ({ error, showRegister, formData, onLogin, onRegister }) => {
  const chkRef = useRef(null);
  const [isRegistering, setIsRegistering] = useState(showRegister || false);

  useEffect(() => {
    if (chkRef.current) {
      chkRef.current.checked = isRegistering;
    }
  }, [isRegistering]);

  return (
    <>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap');`}
      </style>

      <div className="main">
        <input
          type="checkbox"
          id="chk"
          aria-hidden="true"
          ref={chkRef}
          onChange={(e) => setIsRegistering(e.target.checked)}
        />

        {/* Login Form */}
        <div className="log-in">
          <form onSubmit={onLogin}>
            <input type="hidden" name="form_type" value="login" disabled={isRegistering} />
            <label htmlFor="chk" aria-hidden="true">log-in</label>
            <input type="text" name="email" placeholder="Email" /><br />
            <input type="password" name="password" placeholder="Password" /><br />
            {error && !isRegistering && (
              <p className="error-message">{error}</p>
            )}
            <button type="submit">LOG IN</button>
          </form>
        </div>

        {/* Register Form */}
        <div className="register">
          <form onSubmit={onRegister}>
            <input type="hidden" name="form_type" value="register" disabled={!isRegistering} />
            <label htmlFor="chk" aria-hidden="true">register</label>
            <input name="first_name" placeholder="First Name" defaultValue={formData?.first_name || ''} /><br />
            <input name="last_name" placeholder="Last Name" defaultValue={formData?.last_name || ''} /><br />
            <input type="date" name="birthday" defaultValue={formData?.birthday || ''} /><br />
            <input name="email" placeholder="Email" defaultValue={formData?.email || ''} /><br />
            <input type="password" name="password" placeholder="Password" /><br />
            {error && isRegistering && (
              <p className="error-message">{error}</p>
            )}
            <button type="submit">REGISTER</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginRegister;
