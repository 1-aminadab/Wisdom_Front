import React, { useState } from 'react';
import { FaGooglePlusG, FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import "./Registration.css"
import LoginLogo from "../../assets/images/loginlogo.jpg"
import LoginForm from '../../components/LoginForm';
const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
   
    <div  style={{height:"100vh", width:"100vw", display:"flex", alignItems:"center", justifyContent:"center"}} >
      <div style={{width:"60%", display:"flex",alignItems:"center",justifyItems:"center"}} >
         <LoginForm />
      </div>
     
      <div className='desc-par' style={{width:"100%",height:"100%"}}>
        <div className='desk-text'>
        <h1>there i am</h1></div>
        <div className="desc-img" style={{width:"100%",height:"100%"}}>
          <img src={LoginLogo} alt="" />
        </div>
       
      </div>
    </div>
          
  );
};

export default AuthForm;
