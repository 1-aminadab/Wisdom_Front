import React from 'react';

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 className='text-3xl  font-bold underline'>Page Not Found</h1>
      <p style={styles.message}>The requested page could not be found.</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  heading: {
    color: 'blue',
    fontSize: '24px',
  },
  message: {
    fontSize: '18px',
    marginTop: '20px',
  },
};

export default NotFound;
