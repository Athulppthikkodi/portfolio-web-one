import React from 'react'
import './skills.css'
const Skills = () => {
  return (
    <section id='skills'>
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>
      <div className="container skills_container">
        <div className="skills_frontend">
            <div className="skills_progress">
              <h3>HTML<span>90%</span></h3>
              <div className='bar bar1'><span></span></div>
            </div>
            <div className="skills_progress">
              <h3>CSS<span>70%</span></h3>
              <div className='bar bar2'><span></span></div>
            </div>
            <div className="skills_progress">
              <h3>React Js<span>70%</span></h3>
              <div className='bar bar3'><span></span></div>
            </div>
            <div className="skills_progress">
              <h3>Bootstrap<span>80%</span></h3>
              <div className='bar bar4'><span></span></div>
            </div>
            <div className="skills_progress">
              <h3>Javascript<span>70%</span></h3>
              <div className='bar bar5'><span></span></div>
            </div>
        </div>
        <div className="skills_backend">
            <div className="skills_progress">
              <h3>Oracle SQL<span>85%</span></h3>
              <div className='bar bar6'><span></span></div>
            </div>
            
            <div className="skills_progress">
              <h3>Mongo Db<span>90%</span></h3>
              <div className='bar bar7'><span></span></div>
            </div>
            </div>
      </div>
    </section>
  )
}

export default Skills