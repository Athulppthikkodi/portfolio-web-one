import React from 'react'

import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Skills from './components/skills/Skills'
import Education from './components/education/Education'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import About from './components/about/About'
import { Footer } from './components/footer/Footer'
import { useEffect } from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos';
const App = () => {
  useEffect(() => {
    AOS.init({
      once:true,
    });
  }, []);
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Skills/>
    <Education/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App