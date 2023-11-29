import React from 'react';
import { Brand, CTA, Navbar } from "./components";
import { Blog, CTA2, Features, Footer, Header, Possibility, Future } from "./containers";
import './App.css';

const App = () => {
  return (
    <div className="app">
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Features />
      <Future />
      <Possibility />
      <CTA />
      <Blog />
      <CTA2 />
      <Footer />
    </div>
  )
}

export default App;