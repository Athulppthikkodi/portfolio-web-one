import React from 'react'
import CV from '../../assets/CV'
const ContBtn = () => {
  return (
    <div className='cont-btn'>
        <a href={CV} download className='cot_btn_one'>Download CV</a>
        <a href="#contact" className='cot_btn_two'>Let's Talk</a>
    </div>
  )
}

export default ContBtn