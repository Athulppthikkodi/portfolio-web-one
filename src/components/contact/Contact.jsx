import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {SiWhatsapp} from 'react-icons/si'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef()
   const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xktnnaz', 'template_npzz82w', form.current, 'x57C33HijnAImOy_g')
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <div className="contact_email">
            <AiOutlineMail/>
            <h4>Email</h4>
            <h5>athulpp2000@gmail.com</h5>
            <a href="mailto:athulpp2000@gmail.com" target="_blank" rel="noreferrer">send a message</a>
          </div>
          <div className="contact_watsup">
            <SiWhatsapp/>
            <h4>Whatsapp</h4>
            <h5>+917034202754</h5>
            <a href="https://api.whatsapp.com/send/?phone=917034202754&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer">send a message</a>
          </div>
        </div>
       
          <form ref={form} onSubmit={sendEmail}>
            <input name='name' type="text" placeholder='Your Full Name' required/>
            <input name='email' type="email" placeholder='Your Email' required/>
            <textarea name="message" id="" cols="30" rows="10" placeholder='Your Message' required></textarea>
            <button type='submit' className='send_message'>Submit</button>
          </form>
    
      </div>
    </section>
  )
}

export default Contact