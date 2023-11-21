import axios from 'axios';
const BASE_URL = 'http://localhost:3001'; // Update with your server URL
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
        console.log("yes it intered login");
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
