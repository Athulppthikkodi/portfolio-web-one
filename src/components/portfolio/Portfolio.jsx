import React from 'react'
import './portfolio.css'
import library from '../../assets/library.png'
import hospital from '../../assets/hospital.jpg'
import Portfoliochild from './portfoliochild'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <div className="portfolio_box">
          <Portfoliochild 
          image={library}
          projectName="Library Management System"
          gitlink="https://github.com/Athulppthikkodi/Library-Management-System.git"/>
        </div>
        <div className="portfolio_box">
          <Portfoliochild 
          image={hospital}
          projectName="Hospital Management System"
          gitlink="https://github.com/Athulppthikkodi/Hospital-Management.git"/>
        </div>
      </div>
    </section>
  )
}

export default Portfolio