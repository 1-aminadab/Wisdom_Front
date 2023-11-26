import React from 'react';

// Import images
import category1Image from '../assets/images/category-1.svg';
import category2Image from '../assets/images/category-2.svg';
import category3Image from '../assets/images/category-3.svg';
import category4Image from '../assets/images/category-4.svg';
// 
import Button from '@mui/material/Button';
function Category() {
  const categorys = [
    {
      icon:category1Image,
      header:" Expert Tutoring for Academic Success",
      subHeader:"Lorem ipsum dolor Personalized guidance to unlock academic potential and build confidence in every subject.",
      courseNumber:"5 Course"
    },
    {
      icon:category2Image,
      header:"Non-Degree Skill Enhancement Programs",
      subHeader:"Tailored tutoring in skill-focused programs to enrich knowledge and practical expertise.",
      courseNumber:"9 Course "
    },
    {
      icon:category3Image,
      header:"Programming Skills",
      subHeader:"Enhance your software programming skills with targeted tutoring, mastering coding languages and problem-solving for a successful career in technology.",
      courseNumber:"7 Course"
    },
    {
      icon:category4Image,
      header:"Hybrid Distance Tutoring Programs",
      subHeader:"Versatile hybrid programs combining online learning with personalized in-person tutoring sessions.",
      courseNumber:"3 Course"
    },
  ]
  return (
    <div>
      <section className="section category" aria-label="category">
        <div className="container">
          <p className="section-subtitle">Categories</p>
          <h2 className="h2 section-title">
            Online <span className="span">Classes </span> For Remote Learning.
          </h2>
          <p  className="section-text">Consectetur adipiscing elit sed do eiusmod tempor.</p>
          <ul className="grid-list">
            {
              categorys.map((category)=>{
                return(
                  <li>
                  <div className="category-card" >
                    <div className="card-icon">
                      <img src={category.icon} width="40" height="40" loading="lazy" alt="Online Degree Programs" className="img" />
                    </div>
                    <h3 className="h3">
                      <a href="#" className="card-title">
                      {category.header}
                      </a>
                    </h3>
                    <p style={{fontSize:"13px"}} className="card-text">{category.subHeader}</p>
                    <Button variant="contained" sx={{fontSize:"13px"}} color="primary">{category.courseNumber} </Button>
                  </div>
                </li>
                )
              })
            }
           
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Category;
