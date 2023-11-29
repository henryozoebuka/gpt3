import React from 'react';
import "./possibility.css";
import possibility from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className='possibility'>
      <div className='possibility__img'>
        <img src={possibility} alt="possibility" />
      </div>
      <div className='possibility__texts'>
        <p className='possibility__texts__p1'>Request early access to get started</p>
        <h2 className='possibility__texts__h2'>The possibilities are beyond your imagination</h2>
        <p className='possibility__texts__p2'>Yet, you are waiting to be convinced the more. Why don't you try it out for free and see how it will go from there. We can't wait to see you happier.</p>
        <p className='possibility__texts__p3'>Do it now and thank us later.</p>
      </div>
    </div>
  )
}

export default Possibility;