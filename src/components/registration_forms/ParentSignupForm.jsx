import React, { useState } from 'react';
import { registerUser } from 
'../../services/authSevice';
const ParentRegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    username: '',
    password: '',
    parent_phone_number: '',
    parent_email: '', // Assuming an email field for contact information
    parent_address: '', // Assuming an address field for contact information
    user_type: 'parent',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call the registration service function for students
      await registerUser(formData);
      console.log('Student registered successfully');
      // Handle success, e.g., redirect to login page or show success message
    } catch (error) {
      console.error('Student registration error:', error);
      // Handle registration error, e.g., display an error message to the user
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fullname">Full Name:</label>
        <input
          type="text"
          id="fullname"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
        />
      </div>
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
      
      <div>
        <label htmlFor="phone_number">Phone Number:</label>
        <input
          type="text"
          id="phone_number"
          name="parent_phone_number"
          value={formData.parent_phone_number}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="parent_email"
          value={formData.parent_email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <textarea
          id="address"
          name="parent_address"
          value={formData.parent_address}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Register Student</button>
    </form>
  );
};

export default ParentRegistrationForm;
