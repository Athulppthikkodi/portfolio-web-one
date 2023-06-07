import React from 'react'
import './header.css'
import ContBtn from './ContBtn'
import headImg from "../../assets/headImg.png"
import HeaderSocials from './HeaderSocials'
const Header = () => {
  <script>

  </script>
  return (
    <header id="home" >
      <div className='container header-container'>
      <h5>Hello, I'm</h5>
      <h1>Athul P P</h1>
      <h5>Frontend Developer</h5>
      <ContBtn/>
      <HeaderSocials/>
      <div className='headImg' data-aos="zoom-out" data-aos-duration="3000">
        <img src={headImg} alt="" />
      </div>
      <a href="#contact" className='scroll_down'>Scroll down</a>
      </div>
    </header>
  )
}

export default Header