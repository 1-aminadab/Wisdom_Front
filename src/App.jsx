import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import Router from './Routes'; // Import the Router component

const App = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};

export default App;
