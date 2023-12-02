import React from 'react';
import $ from 'jquery';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';


const Navbar = () => {
  $(document).ready(()=>{
    const openBtn = $("#open-btn");
    const closeBtn = $("#close-btn");

    $(".navbar__links__text").on("click", ()=>{
      $(".navbar__links__mobile").slideUp();
    });

    openBtn.on('click', ()=>{
      $(".navbar__links__mobile").slideDown();
    });

    closeBtn.on('click', ()=>{
      $(".navbar__links__mobile").slideUp();
    });
  });

  return (
    <div className='navbar' id="links">
      <div className='navbar__links'>
        <div className='navbar__links__texts'>
          <div className='navbar__links__logo'>
            <img src={logo} alt="logo" />
          </div>
          <p className='navbar__links__text'><a href="#home">Home</a></p>
          <p className='navbar__links__text'><a href="#what-is-gpt">What is GPT?</a></p>
          <p className='navbar__links__text'><a href="#open-ai">Open AI</a></p>
          <p className='navbar__links__text'><a href="#case-studies">Case Studies</a></p>
          <p className='navbar__links__text'><a href="#libraries">Libraries</a></p>
        </div>
        <div className='navbar__links__sign'>
          <div className='navbar__links__sign-in'>
            <a href="#home">Sign in</a>
          </div>
          <div className='navbar__links__sign-up'>
            <a href="#home">Sign up</a>
          </div>
        </div>
        <div className='navbar__links__mobile_open-btn'>
          <RiMenu3Line id='open-btn' />
        </div>                  
      </div>

      <div className='navbar__links__mobile'>
        <div className='navbar__links__mobile_close-btn'>
          <RiCloseLine id='close-btn'/>
        </div>      
          <div className='navbar__links__texts_mobile_div'>            
            <div className='navbar__links__texts_mobile'>
              
              <p className='navbar__links__text'><a href="#home">Home</a></p>
              <p className='navbar__links__text'><a href="#what-is-gpt">What is GPT?</a></p>
              <p className='navbar__links__text'><a href="#open-ai">Open AI</a></p>
              <p className='navbar__links__text'><a href="#case-studies">Case Studies</a></p>
              <p className='navbar__links__text'><a href="#libraries">Libraries</a></p>
            </div>
            <div className='navbar__links__sign'>
              <div className='navbar__links__sign-in'>
                <a href="#home" className='navbar__links__text'>Sign in</a>
              </div>
              <div className='navbar__links__sign-up'>
                <a href="#home" className='navbar__links__text'>Sign up</a>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar;