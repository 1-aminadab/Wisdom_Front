import React from 'react'
import Logo from '../assets/images/logo-light.svg'
import FooterBG from "../assets/images/footer-bg.png"
function Footer() {
  const currentDate = new Date().getFullYear()

  return (
    <div> <footer className="footer" 
    
    style={{backgroundImage: `url(${FooterBG})`}}
    >

    <div className="footer-top section">
      <div className="container grid-list">

        <div className="footer-brand">

          <a href="#" className="logo">
            <img src={Logo} width="162" height="50" alt="EduWeb logo"/>
          </a>

          <p className="footer-brand-text">
            Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm tempor incidid unt labore dolore.
          </p>

          <div className="wrapper">
            <span className="span">Add:</span>

            <address className="address">Addis Ababa, Ethiopia</address>
          </div>

          <div className="wrapper">
            <span className="span">Call:</span>

            <a href="tel:+011234567890" className="footer-link">+251946450835/+251910736293</a>
          </div>

          <div className="wrapper">
            <span className="span">Email:</span>

            <a href="connectwisdom4@gmail.com" className="footer-link">connectwisdom4@gmail.com</a>
          </div>

        </div>

        <ul className="footer-list">

          <li>
            <p className="footer-list-title">Online Platform</p>
          </li>

          <li>
            <a href="#" className="footer-link">About</a>
          </li>

          <li>
            <a href="#" className="footer-link">Courses</a>
          </li>

          <li>
            <a href="#" className="footer-link">Instructor</a>
          </li>

          <li>
            <a href="#" className="footer-link">Events</a>
          </li>

          <li>
            <a href="#" className="footer-link">Instructor Profile</a>
          </li>

          <li>
            <a href="#" className="footer-link">Purchase Guide</a>
          </li>

        </ul>

        <ul className="footer-list">

          <li>
            <p className="footer-list-title">Links</p>
          </li>

          <li>
            <a href="#" className="footer-link">Contact Us</a>
          </li>

          <li>
            <a href="#" className="footer-link">Gallery</a>
          </li>

          <li>
            <a href="#" className="footer-link">News & Articles</a>
          </li>

          <li>
            <a href="#" className="footer-link">FAQ's</a>
          </li>

          <li>
            <a href="#" className="footer-link">Sign In/Registration</a>
          </li>

          <li>
            <a href="#" className="footer-link">Coming Soon</a>
          </li>

        </ul>

        <div className="footer-list">

          <p className="footer-list-title">Contacts</p>

          <p className="footer-list-text">
            Enter your email address to register to our newsletter subscription
          </p>

          <form action="" className="newsletter-form">
            <input type="email" name="email_address" placeholder="Your email" required className="input-field"/>

            <button type="submit" className="btn has-before">
              <span className="span">Subscribe</span>

              <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
            </button>
          </form>

          <ul className="social-list">

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-youtube"></ion-icon>
              </a>
            </li>

          </ul>

        </div>

      </div>
    </div>

    <div className="footer-bottom">
      <div className="container">

        <p className="copyright">
          Copyright {currentDate} All Rights Reserved by <a href="#" className="copyright-link">codewithsadee</a>
        </p>

      </div>
    </div>

  </footer>
</div>
  )
}

export default Footer