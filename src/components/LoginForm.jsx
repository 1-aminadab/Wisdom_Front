import React, { useState } from 'react';
import { login } from '../services/authSevice'; 
import {useNavigate} from 'react-router-dom'

const LoginForm = () => {
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
        <form onSubmit={handleSubmit}>
            <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
            <button type="submit">Login</button>
          
        </form>
    );
};

export default LoginForm;
