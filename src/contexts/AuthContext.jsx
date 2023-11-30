// AuthContext.jsx
import { createContext, useContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser, isAuthenticated } from '../feature/userSlice';
import { Base_url} from '../config/url';

const AuthContext = createContext();

const BASE_URL = Base_url

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

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, localDispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    // Check for JWT token on component mount
    const checkToken = async () => {
      const token = localStorage.getItem('Access_Token');

      try {
        // Make a GET request to your server's token validation endpoint
        const response = await axios.get(`${BASE_URL}/auth/validateToken`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        // Assuming the response contains a valid user object
        const { user } = response.data;
        // Set the user in the context
        localDispatch({ type: 'LOGIN', payload: user });
        // Dispatch Redux actions
        dispatch(setUser(user));
        dispatch(isAuthenticated(true));
        // Navigate to the home page
        navigate('/');
      } catch (error) {
        dispatch(setUser(null));
        dispatch(isAuthenticated(false));
        // Handle token validation error
    
      }
    };

    checkToken();
  }, [dispatch, navigate]);

  return (
    <AuthContext.Provider value={{ ...state, dispatch: localDispatch }}>
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
