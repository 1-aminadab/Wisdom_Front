import { createContext, useContext, useReducer, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const BASE_URL = 'http://localhost:3001';
// Reducer Open 
const initialState = {
  isAuthenticated: false,
  user: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        isAuthenticated: true,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};
// 
const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    // Check for JWT token on component mount
    const checkToken = async () => {
      const token = localStorage.getItem('Access_Token')
     
      try {
        // Make a GET request to your server's token validation endpoint
        const response = await axios.get(`${BASE_URL}/auth/validateToken`,{ 
          headers: {
          'Authorization': `Bearer ${token}`,
        }
      });

        // Assuming the response contains a valid user object
        const { user } = response.data;
        // Set the user in the context
        dispatch({ type: 'LOGIN', payload: user });
      } catch (error) {
        // Handle token validation error
        console.log('Token validation error:', error);
      }
    };

    checkToken();
  }, []);
  

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
