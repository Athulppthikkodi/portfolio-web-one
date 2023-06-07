import React from 'react'
import './education.css'
import EducationChild from './EducationChild'
const Education = () => {
  return (
   <section id='education'>
    <div className="container education_container">
        <h5>What i studied</h5>
        <h2>Education</h2>
        <div className="education_boxes">
          <div className="edu_box" data-aos="zoom-in-up" data-aos-duration="2000">
            <EducationChild
             standard="10th"
             institute="GVHSS PAYYOLI"
             board="Board"
             boardname="Kerala Board of Public Examination"
             marks="CGPA/%: 96%"/>
          </div>
          <div className="edu_box" data-aos="zoom-in-up" data-aos-duration="2500">
            <EducationChild
             standard="12th"
             institute="GVHSS PAYYOLI"
             board="Board"
             boardname="Kerala Board of Public Examination"
             marks="CGPA/%: 80%"/>
             </div>
             <div className="edu_box" data-aos="zoom-in-up" data-aos-duration="3000">
            <EducationChild
             standard="B.Tech"
             institute="Government Engineering College WAYANAD"
             board="Univercity"
             boardname="APJ Abdul Kalam Technological University"
             marks="CGPA/%: 6.74"/>
             </div>
        </div>
    </div>
   </section>
  )
}

export default Education