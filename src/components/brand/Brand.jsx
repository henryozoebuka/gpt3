import React from 'react';
import './brand.css';
import { atlassian } from './index';
import { dropbox } from './index';
import { google } from './index';
import { shopify } from './index';
import { slack } from './index';

const Brand = () => {
  return (
    <div className='brand'>
      <img src={atlassian} alt="atlassian" />
      <img src={dropbox} alt="dropbox" />
      <img src={google} alt="google" />
      <img src={shopify} alt="shopify" />
      <img src={slack} alt="slack" />
    </div>
  )
}

export default Brand;