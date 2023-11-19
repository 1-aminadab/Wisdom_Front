import React, { useState } from 'react';
import { registerUser } from '../../services/authSevice';
const StudentRegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    username: '',
    password: '',
    student_age: '',
    student_grade: '',
    student_gender: '',
    // phone_number: '', // Assuming a phone number field for contact information
    // email: '', // Assuming an email field for contact information
    // address: '', // Assuming an address field for contact information
    user_type: 'student',
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
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="student_age"
          value={formData.age}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="grade">Grade:</label>
        <input
          type="number"
          id="grade"
          name="student_grade"
          value={formData.grade}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          name="student_gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      {/* <div>
        <label htmlFor="phone_number">Phone Number:</label>
        <input
          type="text"
          id="phone_number"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </div> */}
      <button type="submit">Register Student</button>
    </form>
  );
};

export default StudentRegistrationForm;
