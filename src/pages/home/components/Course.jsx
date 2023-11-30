import React from 'react';
import { useDispatch } from 'react-redux';
import Course1 from '../assets/images/course-1.jpg'
import { notifyState } from '../../../feature/cardSlice';
function Course() {
  const dispatch = useDispatch()
  return (
    <div>
      <section className="section course" id="courses" aria-label="course">
        <div className="container">
         
          <h2 className="h2 section-title">Pick A Course To Get Started</h2>
          <ul className="grid-list">
            <li style={{cursor:"pointer"}} onClick={()=>dispatch(notifyState(true))}>
              <div className="course-card">
                <figure className="card-banner img-holder" >
                  <img
                    src={Course1}
                    width="370"
                    height="220"
                    loading="lazy"
                    alt="Build Responsive Real- World Websites with HTML and CSS"
                    className="img-cover"
                  />
                </figure>
                <div className="abs-badge">
                  <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
                  <span className="span">3 Weeks</span>
                </div>
                <div className="card-content">
                  <span className="badge">Beginner</span>
                  <h3 className="h3">
                    <a href="#" className="card-title">
                      Build Responsive Real- World Websites with HTML and CSS
                    </a>
                  </h3>
                  <div className="wrapper">
                    <div className="rating-wrapper">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>
                    <p className="rating-text">(5.0/7 Rating)</p>
                  </div>
                  {/* <data className="price" value="29">$29.00</data> */}
                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <ion-icon name="library-outline" aria-hidden="true"></ion-icon>
                      <span className="span">8 Lessons</span>
                    </li>
                    <li className="card-meta-item">
                      <ion-icon name="people-outline" aria-hidden="true"></ion-icon>
                      <span className="span">20 Students</span>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            {/* Repeat similar blocks for other courses */}
          </ul>
          <a href="#" className="btn has-before">
            <span className="span">Browse more courses</span>
            <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Course;
