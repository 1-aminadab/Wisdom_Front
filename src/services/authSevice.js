import axios from 'axios';
import { Base_url } from '../config/url';
const BASE_URL = Base_url // Update with your server URL
export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${BASE_URL}/auth/register`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const login = async (userData) => {
    
    try {
       
        const response = await axios.post(`${BASE_URL}/auth/login`, userData);
        localStorage.setItem("Access_Token", response.data.token)
        return response.data;

    } catch (error) {
        throw error.response.data;
    }
};

export const logout = async () => {
    try {
        const response = await axios.post(`${BASE_URL}/auth/logout`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
