import React from 'react';
import { logout } from '../services/authSevice'; 
import {useNavigate} from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';
const ProtectedComponent = () => {
    const navigate = useNavigate()
    const {dispatch} = useAuth()
    const handleLogout = async () => {
        try {
           
           
            localStorage.removeItem('Access_Token')
            dispatch({ type: 'LOGOUT'}); // remove 
            navigate('/login') // navigate
        } catch (error) {
            console.error('Logout error:', error);
            // Handle logout error
        }
    };

    return (
        <div>
            {/* Add content for the protected component */}
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default ProtectedComponent;
