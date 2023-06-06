import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookBookmark} from 'react-icons/bi'
import {RiServiceFill} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {MdCastForEducation} from 'react-icons/md'
import { useState } from 'react'
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home')
  return (
    <nav>
      <a href="#home" onClick={()=>setActiveNav('#home')} className={activeNav=== '#home'? 'active':''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav=== '#about'? 'active':''}><AiOutlineUser/></a>
      <a href="#skills" onClick={()=>setActiveNav('#skills')} className={activeNav=== '#skills'? 'active':''}><BiBookBookmark/></a>
      <a href="#education" onClick={()=>setActiveNav('#education')} className={activeNav=== '#education'? 'active':''}><MdCastForEducation/></a>
      <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav=== '#portfolio'? 'active':''}><RiServiceFill/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav=== '#contact'? 'active':''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav