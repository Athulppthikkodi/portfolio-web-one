import React from 'react'
import './about.css'
import me from '../../assets/me.jpg'
import {FaAward} from 'react-icons/fa'
import {FiFolder} from 'react-icons/fi'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about_container'>
        <div className='about_me'>
          <div className="about_me_img" data-aos="fade-right" data-aos-duration="3000">
            <img src={me} alt="" />
          </div>
        </div>
        <div className='about_content' data-aos="fade-up" data-aos-duration="3000">
          <div className="about_cards">
            <div className="card_experience">
              <div className="experience_icon">
                <FaAward/>
              </div>
              <h2>Experience</h2>
              <h5>Frontend Developer Trainee</h5>
            </div>
            <div className="card_projects">
            <div className="projects_icon">
                <FiFolder/>
              </div>
              <h2>Projects</h2>
              <h5>3+</h5>
            </div>
          </div>
          <div className="about_description">
            <p>I am a passionate frontend developer working at Acodez IT Solutions, dedicated to creating captivating and user-centric web experiences. With a strong foundation in HTML, CSS,JavaScript, and React Js, I possess the skills to transform design concepts into seamless and interactive websites.</p>
          </div>
          <div className='about_btn'>
            <a href="#contact">Let's Talk</a>
          </div>
          
        </div>
      </div>

    </section>
  )
}

export default About