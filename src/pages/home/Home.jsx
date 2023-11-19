import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './home.css'
import Header from './components/Header';
import Hero from './components/Hero';
import Catagory from './components/Catagory';
import About from './components/About';
import Course from './components/Course';
import Video from './components/Video';
import State from './components/State';
import Blog from './components/Blog';
import Footer from './components/Footer';
import TestNavbar from './components/TestNavbar'
export default function HideAppBar(props) {

   
 
  return (
    <div className='home'>
      <TestNavbar />
    {/* <Header /> */}
      <Hero />
      <Catagory />
      <About />
      <Course />
      <Video />
      <State />
      <Blog />
      <Footer />
    </div>
      
      
   
  );
}