import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAuth } from './contexts/AuthContext';
import Home from './pages/home/Home';
import LoginForm from './components/forms/LoginForm';

import ChatInterface from './components/chat/ChatInterface';
import Unauthorized from './components/error/Unauthorized';
import NotFound from './components/error/NotFound';
import Dashboard from './dashboards/Dashbaord'
import Registration from './pages/auth/Registration';
import AuthForm from './pages/auth/Login';
import Contact from './pages/contact/Contact';

const Router = () => {
  const {user, authenticated}= useSelector((store)=> store.user)
  console.log(user, authenticated)
  const navigate = useNavigate();


  const checkUserRole = () => {
    if (user) {
      return user.user_type;
    }
    return undefined;
  };

  const PrivateRoute = ({ element: Component, roles, ...rest }) => {
    const userRole = checkUserRole();

    if (authenticated && roles.includes(userRole)) {
      return <Route {...rest} element={<Component {...rest} />} />;
    } else {
      navigate("/not-authorized");
      return null;
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />


      {/* PrivateRoutes
      <PrivateRoute path="/parent_signup" roles={['parent']} element={ParentRegistrationForm} />
      <PrivateRoute path="/teacher_signup" roles={['teacher']} element={TeacherRegistrationForm} />
      <PrivateRoute path="/student_signup" roles={['student']} element={StudentRegistrationForm} /> */}

      {/* Unauthorized access */}
      <Route path="/not-authorized" element={<Unauthorized />} />
      <Route path="/chat-interface" element={<ChatInterface/>} />
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<AuthForm/>}/>
      <Route path="/signup" element={<Registration/>}/>
      <Route path="/dashboard/:content" element={<Dashboard/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  );
};

export default Router;
