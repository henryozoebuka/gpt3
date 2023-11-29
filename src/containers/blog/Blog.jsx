import React from 'react';
import "./blog.css";
import blog1 from '../../assets/blog01.png'
import blog2 from '../../assets/blog02.png'
import blog3 from '../../assets/blog03.png'
import blog4 from '../../assets/blog04.png'
import blog5 from '../../assets/blog05.png'

const Blog = () => {
  return (
    <div className='blog'>
      <div className='blog__title'>
        <h2>A lot is happening, we are blogging about it</h2>
      </div>
      <div className='blog__blogs'>
        <div className='blog__blogs__main'>
          <div className='blog__blogs__main__blog1'>
            <img src={blog1} alt="blog1" />
            <h6>Nov 26, 2023</h6>
            <h3>GPT-3 and Open AI is the future. Let us exlore how it is.</h3>
            <h6 className='read'>Read Full Article.</h6>
          </div>
        </div>
        <div className='blog__blogs__others'>
          <div className='blog__blogs__others__blog2'>
            <img src={blog2} alt="blog2" />
            <h6>Nov 26, 2023</h6>
            <h3>GPT-3 and Open AI is the future. Let us exlore how it is.</h3>
            <h6>Read Full Article.</h6>
          </div>
          <div className='blog__blogs__others__blog3'>
            <img src={blog3} alt="blog3" />
            <h6>Nov 26, 2023</h6>
            <h3>GPT-3 and Open AI is the future. Let us exlore how it is.</h3>
            <h6>Read Full Article.</h6>
          </div>
          <div className='blog__blogs__others__blog4'>
            <img src={blog4} alt="blog4" />
            <h6>Nov 26, 2023</h6>
            <h3>GPT-3 and Open AI is the future. Let us exlore how it is.</h3>
            <h6>Read Full Article.</h6>
          </div>
          <div className='blog__blogs__others__blog5'>
            <img src={blog5} alt="blog5" />
            <h6>Nov 26, 2023</h6>
            <h3>GPT-3 and Open AI is the future. Let us exlore how it is.</h3>
            <h6>Read Full Article.</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog;