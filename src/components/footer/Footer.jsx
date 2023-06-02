import React from 'react'
import './footer.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {SiInstagram} from 'react-icons/si'
import {FaTwitterSquare} from 'react-icons/fa'
export const Footer = () => {
  return (
    <footer>
      <a className='myName' href="!#">ATHUL P P</a>
        <ul>
            <li><a href="!#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer_socials">
          <a href="https://facebook.com"><FaFacebookSquare/></a>
          <a href="https://instagram.com"><SiInstagram/></a>
          <a href="https://twitter.com"><FaTwitterSquare/></a>
        </div>
        <div className="footer_copyright">
          <small>@Athul p p.All rights are reserved</small>
        </div>
    </footer>
  )
}
