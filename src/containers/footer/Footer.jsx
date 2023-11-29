import React from 'react';
import './footer.css';
import logo from '../../assets/logo.svg'

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear();
  
  return (
    <div className='footer'>
      <div className='footer__contents'>
        <div>
          <img src={logo} alt="logo" />
          <p>11 New Divine Street.</p>
        </div>
        <div>
          <h5>Links</h5>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#gpt3">What is Henry GPT-3?</a></li>
            <li><a href="#open-ai">Open AI</a></li>
            <li><a href="#case-studies">Case Studies</a></li>
            <li><a href="#libraries">Libraries</a></li>
          </ul>
        </div>
        <div>
          <h5>Company</h5>
          <ul>
            <li><a href="#home">Term & conditions</a></li>
            <li><a href="#gpt3">Privacy policy</a></li>
            <li><a href="#open-ai">Contact</a></li>            
          </ul>
        </div>
        <div>
          <h5>Get in touch</h5>
          <ul>
            <li><a href="#gpt3">Our socials</a></li>
            <li><a href="#open-ai">Connect</a></li>
            <li><a href="#case-studies">Meet our members</a></li>
          </ul>
        </div>
      </div>
      <div className='footer__contents__copywrite'>
        <p>&copy; <span>{year}</span> Henry GPT-3. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer;