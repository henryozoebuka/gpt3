import React from 'react';
import './feature.css';

const Feature = ({title, desc}) => {
  return (
    <div className='feature'>
      <div className='feature__bar'/>
      <div className='feature__contents'>        
        <div className='feature__title'>
          <h4>{title}</h4>
        </div>
        <div className='feature__desc'>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  )
}

export default Feature;