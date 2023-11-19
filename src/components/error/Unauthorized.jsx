import React from 'react';

const Unauthorized = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Unauthorized Access</h1>
      <p style={styles.message}>You do not have permission to access this page.</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  heading: {
    color: 'red',
    fontSize: '24px',
  },
  message: {
    fontSize: '18px',
    marginTop: '20px',
  },
};

export default Unauthorized;
