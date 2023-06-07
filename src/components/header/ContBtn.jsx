import React from 'react'
import CV from '../../assets/CV'
const ContBtn = () => {
  return (
    <div className='cont-btn' data-aos="fade-left" data-aos-duration="3000">
        <a href={CV} download className='cot_btn_one'>Download CV</a>
        <a href="#contact" className='cot_btn_two'>Let's Talk</a>
    </div>
  )
}

export default ContBtn