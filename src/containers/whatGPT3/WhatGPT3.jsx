import React from 'react';
import "./whatGPT3.css";

const WhatGPT3 = ({title, desc}) => {
  return (
    <div className='whatGPT3'>
      <div className='whatGPT3__bar' />
      <div className='whatGPT3__contents'>
        <div className='whatGPT3__title'>
          <h4>{title}</h4>
        </div>
        <div className='whatGPT3__desc'>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  )
}

export default WhatGPT3;