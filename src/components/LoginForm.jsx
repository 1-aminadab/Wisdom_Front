import React, { useState } from 'react';
import { login } from '../services/authSevice'; 
import {useNavigate} from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Logo from "../assets/images/wisdom3.png"
const LoginForm = () => {
    const [error, setError] =useState(true)
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await login(formData);
            console.log('Login successful', response);
            localStorage.setItem("Access_Token", response.token)
            navigate('/')
            window.location.reload()
           
            // Store JWT token in context or localStorage
            // Redirect to dashboard or show success message
        } catch (error) {
            console.error('Login error:', error);
            // Handle login error
        }
    };

    return (
        <form  onSubmit={handleSubmit} style={{width:"100%",display:"flex",gap:"15px", flexDirection:"column",alignItems:'center',justifyContent:"center"}}>
            <div style={{display:"flex", alignItems:"center",gap:"10px"}} className="logo">
                <img style={{height:"60px"}} src={Logo} alt="" />
                <h2 style={{fontFamily:"cursive"}}>Wisdom</h2>
            </div>
            <div className="login-text">
                <h1 style={{fontSize:"20px",color:"blue",fontWeight:"600",fontFamily:"cursive"}}>Login</h1>
            </div>
        <Box
      component="form"
      sx={{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
         <TextField label="Email" type="search"  id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}/>
      
          <TextField  
          
          label="Password"
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange} />
            <h6 style={{padding:"0 10px 10px", fontSize:"13px",width:'100%',textAlign:"right"}}>Forget Password?</h6>
            <button type="submit" style={{width:"100%",padding:'5px',borderRadius:"20px", backgroundColor:"blue", color:"white"}}>Sign in</button>
            <h5 style={{fontSize:"13px",marginTop:"10px",display:"flex", gap:"10px"}}> Don't have an account? <span style={{color:"blue", fontWeight:"500", fontSize:'14px'}}>Register</span></h5>
            </Box>
          
        </form>
    );
};

export default LoginForm;
