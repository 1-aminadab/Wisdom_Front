import React from 'react';
import Banner from '../assets/images/about-banner1.jpg'
import Shape1 from '../assets/images/about-shape-1.svg'
import Shape2 from '../assets/images/about-shape-2.svg'
import Shape3 from '../assets/images/about-shape-3.png'
import Shape4 from '../assets/images/about-shape-4.svg'
function About() {
  return (
    <div>
      <section className="section about" id="about" aria-label="about">
        <div className="container">
          <figure className="about-banner">
            <div className="img-holder" >
              <img
                src={Banner}
                width="520"
                height="370"
                loading="lazy"
                alt="about banner"
                className="img-cover"
              />
            </div>
            {/* <img src={Shape1} width="360" height="420" loading="lazy" alt="" className="shape about-shape-1" /> */}
            <img src={Shape2} width="371" height="220" loading="lazy" alt="" className="shape about-shape-2" />
            {/* <img src={Shape3} width="722" height="528" loading="lazy" alt="" className="shape about-shape-3" /> */}
          </figure>
          <div className="about-content">
            <p className="section-subtitle">About Us</p>
            <h2 className="h2 section-title">
            "Embark on a  <span className="span">Decade</span> of Educational Excellence.</h2>
            <p className="section-text">
            Empowering Growth Over a Decade: Elevate Your Skills with Tailored Tutoring Excellence in Remote Learning.
            </p>
            <ul className="about-list">
              <li className="about-item">
                <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>
                <span className="span">Expert Trainers</span>
              </li>
              <li className="about-item">
                <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>
                <span className="span">Online Remote Learning</span>
              </li>
              <li className="about-item">
                <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>
                <span className="span">Lifetime Access</span>
              </li>
            </ul>
            <img src={Shape4} width="100" height="100" loading="lazy" alt="" className="shape about-shape-4" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
