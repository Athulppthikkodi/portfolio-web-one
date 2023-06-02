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
          <div className="edu_box">
            <EducationChild
             standard="10th"
             institute="GVHSS PAYYOLI"
             board="Board"
             boardname="Kerala Board of Public Examination"
             marks="CGPA/%: 96%"/>
          </div>
          <div className="edu_box">
            <EducationChild
             standard="12th"
             institute="GVHSS PAYYOLI"
             board="Board"
             boardname="Kerala Board of Public Examination"
             marks="CGPA/%: 96%"/>
             </div>
             <div className="edu_box">
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