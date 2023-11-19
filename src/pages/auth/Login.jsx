import React, { useState } from 'react';
import { FaGooglePlusG, FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import "./Style.css"
const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <body>
      
    
    <div className="container" id="container">
      <div className={`form-container ${isSignUp ? 'sign-up' : 'sign-in'}`}>
        <form>
          <h1>{isSignUp ? 'Create Account' : 'Sign In'}</h1>
          <div className="social-icons">
            <a href="#" className="icon"><FaGooglePlusG /></a>
            <a href="#" className="icon"><FaFacebookF /></a>
            <a href="#" className="icon"><FaGithub /></a>
            <a href="#" className="icon"><FaLinkedinIn /></a>
          </div>
          {isSignUp ? <span>or use your email for registration</span> : <span>or use your email and password</span>}
          {isSignUp && <input type="text" placeholder="Name" />}
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          {isSignUp && <button>Sign Up</button>}
          {!isSignUp && <button>Sign In</button>}
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className={`toggle-panel ${isSignUp ? 'toggle-left' : 'toggle-right'}`}>
            {isSignUp ? (
              <>
                <h1>Welcome Back!</h1>
                <p>Enter your personal details to use all site features</p>
                <button className="hidden" onClick={toggleForm}>Sign In</button>
              </>
            ) : (
              <>
                <h1>Hello, Friend!</h1>
                <p>Register with your personal details to use all site features</p>
                <button className="hidden" onClick={toggleForm}>Sign Up</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
    </body>
  );
};

export default AuthForm;
