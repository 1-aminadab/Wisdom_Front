import React from 'react'
import Banner from '../assets/images/blog-bg.svg'
import Blog1 from '../assets/images/blog-1.jpg'
import Blog2 from '../assets/images/blog-2.jpg'
import Blog3 from '../assets/images/blog-3.jpg'
import Shape from '../assets/images/blog-shape.png'
function Blog() {
  return (
    <div>
        <section className="section blog has-bg-image" id="blog" aria-label="blog"
        style={{backgroundImage: `url(${Banner})`}}
        >
        <div className="container">

          <p className="section-subtitle">Latest Articles</p>

          <h2 className="h2 section-title">Get News With Eduweb</h2>

          <ul className="grid-list">

            <li>
              <div className="blog-card">

                <figure className="card-banner img-holder has-after">
                  <img src={Blog1} width="370" height="370" loading="lazy"
                    alt="Become A Better Blogger: Content Planning" className="img-cover"/>
                </figure>

                <div className="card-content">

                  <a href="#" className="card-btn" aria-label="read more">
                    <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                  </a>

                  <a href="#" className="card-subtitle">Online</a>

                  <h3 className="h3">
                    <a href="#" className="card-title">Become A Better Blogger: Content Planning</a>
                  </h3>

                  <ul className="card-meta-list">

                    <li className="card-meta-item">
                      <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>

                      <span className="span">Oct 10, 2021</span>
                    </li>

                    <li className="card-meta-item">
                      <ion-icon name="chatbubbles-outline" aria-hidden="true"></ion-icon>

                      <span className="span">Com 09</span>
                    </li>

                  </ul>

                  <p className="card-text">
                    Lorem Ipsum Dolor Sit Amet Cons Tetur Adipisicing Sed.
                  </p>

                </div>

              </div>
            </li>

            <li>
              <div className="blog-card">

                <figure className="card-banner img-holder has-after" >
                  <img src={Blog2} width="370" height="370" loading="lazy"
                    alt="Become A Better Blogger: Content Planning" className="img-cover"/>
                </figure>

                <div className="card-content">

                  <a href="#" className="card-btn" aria-label="read more">
                    <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                  </a>

                  <a href="#" className="card-subtitle">Online</a>

                  <h3 className="h3">
                    <a href="#" className="card-title">Become A Better Blogger: Content Planning</a>
                  </h3>

                  <ul className="card-meta-list">

                    <li className="card-meta-item">
                      <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>

                      <span className="span">Oct 10, 2021</span>
                    </li>

                    <li className="card-meta-item">
                      <ion-icon name="chatbubbles-outline" aria-hidden="true"></ion-icon>

                      <span className="span">Com 09</span>
                    </li>

                  </ul>

                  <p className="card-text">
                    Lorem Ipsum Dolor Sit Amet Cons Tetur Adipisicing Sed.
                  </p>

                </div>

              </div>
            </li>

            <li>
              <div className="blog-card">

                <figure className="card-banner img-holder has-after" >
                  <img src={Blog3} width="370" height="370" loading="lazy"
                    alt="Become A Better Blogger: Content Planning" className="img-cover"/>
                </figure>

                <div className="card-content">

                  <a href="#" className="card-btn" aria-label="read more">
                    <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                  </a>

                  <a href="#" className="card-subtitle">Online</a>

                  <h3 className="h3">
                    <a href="#" className="card-title">Become A Better Blogger: Content Planning</a>
                  </h3>

                  <ul className="card-meta-list">

                    <li className="card-meta-item">
                      <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>

                      <span className="span">Oct 10, 2021</span>
                    </li>

                    <li className="card-meta-item">
                      <ion-icon name="chatbubbles-outline" aria-hidden="true"></ion-icon>

                      <span className="span">Com 09</span>
                    </li>

                  </ul>

                  <p className="card-text">
                    Lorem Ipsum Dolor Sit Amet Cons Tetur Adipisicing Sed.
                  </p>

                </div>

              </div>
            </li>

          </ul>

          <img src={Shape} width="186" height="186" loading="lazy" alt=""
            className="shape blog-shape"/>

        </div>
      </section>

    
  
    </div>
  )
}

export default Blog