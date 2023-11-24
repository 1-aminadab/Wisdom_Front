import React from 'react';
import MiniCards from './mini-compoents/MiniCards';
// Import images
import heroBgImage from '../assets/images/hero-bg.svg';
import heroBanner1 from '../assets/images/hero-banner-3.jpg';
import heroBanner2 from '../assets/images/hero-banner-4.jpg';
import heroShape1 from '../assets/images/hero-shape-1.svg';
import heroShape2 from '../assets/images/hero-shape-2.png';

function Hero() {
  return (
    <div>
      <section
        className="section hero has-bg-image"
        id="home"
        aria-label="home"
        
        style={{ backgroundImage: `url(${heroBgImage})` }}
      >
        <div className="container" >
          <div className="hero-content">
            <h1 className="h1 section-title " >
              The Best Program to <span className="span">Enroll</span> for Exchange
            </h1>
            <p className="hero-text">
              Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.
            </p>
            <a href="#" className="btn has-before">
              <span className="span">Find courses</span>
              <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
            </a>
          </div>
          <figure className="hero-banner">
            <div className="img-holder one" 
            // style={{ '--width': 270, '--height': 300 }}
            >
              <img src={heroBanner1} width="270" height="300" alt="hero banner" className="img-cover" />
            </div>
            <div className="img-holder two" 
            // style={{ '--width': 240, '--height': 370 }}
            >
              <img src={heroBanner2} width="240" height="370" alt="hero banner" className="img-cover" />
            </div>
             
            <img src={heroShape2} width="622" height="551" alt="" className="shape hero-shape-2" />
          </figure>
        </div>
      </section>
    </div>
  );
}

export default Hero;
