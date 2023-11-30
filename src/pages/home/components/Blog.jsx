import React from "react";
import Banner from "../assets/images/blog-bg.svg";
import Blog1 from "../assets/images/blog-1.jpg";
import Blog2 from "../assets/images/blog-4.jpg";
import Blog3 from "../assets/images/blog-5.jpg";
import Shape from "../assets/images/blog-shape.png";
function Blog() {
  const news = [
    {
      image: Blog1,
      title: "online",
      subTitle: "Innovative Tutoring Platform Launches, Revolutionizing Online Learning",
      text: "A cutting-edge tutoring website company enters the scene, offering personalized and accessible learning experiences for students worldwide.",
      date: "10/03/2023",
    },
    {
      image: Blog2,
      title: "online",
      subTitle: "Startup Tutoring Company Secures Funding to Expand Educational Impact",
      text: "Promising growth for the tutoring startup as it receives significant funding to enhance its platform, providing even more students with quality tutoring services",
      date: "10/03/2023",
    },
    {
      image: Blog3,
      title: "online",
      subTitle: "Tech-Driven Tutoring Startup Partners with Leading Educators for Enhanced Curriculum",
      text: "A new tutoring platform collaborates with top educators to deliver a curriculum enriched with the latest teaching methodologies, ensuring a high-quality learning experience for users",
      date: "10/03/2023",
    },
  ];
  return (
    <div>
      <section
        className="section blog has-bg-image"
        id="blog"
        aria-label="blog"
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <div className="container">
          <p className="section-subtitle">Latest Articles</p>

          <h2 className="h2 section-title">Get News With Wisdom</h2>

          <ul className="grid-list">
            {
              news.map((news, index)=>{
                return  (
                  <li key={index}>
                  <div className="blog-card">
                    <figure className="card-banner img-holder has-after">
                      <img
                        src={news.image}
                        width="370"
                        height="370"
                        loading="lazy"
                        alt="Become A Better Blogger: Content Planning"
                        className="img-cover"
                      />
                    </figure>
    
                    <div className="card-content">
                      <a href="#" className="card-btn" aria-label="read more">
                        <ion-icon
                          name="arrow-forward-outline"
                          aria-hidden="true"
                        ></ion-icon>
                      </a>
    
                      <a href="#" className="card-subtitle">
                        {news.title}
                      </a>
    
                      <h3 className="h3">
                        <a href="#" className="card-title">
                          {news.subTitle}
                        </a>
                      </h3>
    
                      <ul className="card-meta-list">
                        <li className="card-meta-item">
                          <ion-icon
                            name="calendar-outline"
                            aria-hidden="true"
                          ></ion-icon>
    
                          <span className="span">{news.date}</span>
                        </li>
    
                        <li className="card-meta-item">
                          <ion-icon
                            name="chatbubbles-outline"
                            aria-hidden="true"
                          ></ion-icon>
    
                          <span className="span">Com 09</span>
                        </li>
                      </ul>
    
                      <p className="card-text">
                        {news.text}
                      </p>
                    </div>
                  </div>
                </li>
    
                )
              })
            }
          
              
          </ul>

          <img
            src={Shape}
            width="186"
            height="186"
            loading="lazy"
            alt=""
            className="shape blog-shape"
          />
        </div>
      </section>
    </div>
  );
}

export default Blog;
