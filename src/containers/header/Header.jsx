import React from 'react';
import './header.css';
import ai from '../../assets/ai.png';
import people from '../../assets/people.png';
const Header = () => {
  return (
    <div className='header section__margin' id='home'>
      <div className='header__texts'>
        <div className='header__texts_title'>
          <h1>Let's Build Something amazing with GPT-3 OpenAI</h1>
        </div>
        <div className='header__texts_desc'>
          <p>I am sure that you need assist with many tasks in life. You are at the right place, where your will get the answers to you numerous questions and concerns. Let's keep you going with with our top notch Open Ai.</p>
        </div>
        <div className='header__text_cta'>
          <input type="email" placeholder='Your Email Address' />
          <button>Get started</button>
        </div>
        <div className='header__people'>
          <img src={people} alt="people" />
          <p>2,647 people requested access to visit in the last 24 hours.</p>
        </div>
      </ div>
      <div className='header__img' id='open-ai'>
        <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header;