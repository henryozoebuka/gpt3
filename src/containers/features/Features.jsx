import React from 'react';
import "./features.css";
import Feature from "../../components/feature/Feature";
import WhatGPT3 from "../whatGPT3/WhatGPT3";

const Features = () => {
  return (
    <div className='features gradient__bg' id='what-is-gpt'>
      <div className='features__whatGPT3'>
        <WhatGPT3 title="What is GPT-3" desc="Generative Pre-trained Transformer 3 is a large language model released by OpenAI in 2020. Like its predecessor GPT-2, it is a decoder-only transformer model of deep neural network, which uses attention in place of previous recurrence- and convolution-based architectures."/>
      </div>
      <div className='features_library'>
        <div>
          <h2>The possibilities are beyond your imagination</h2>
        </div>
        <div className='features_explore' id='libraries'>
          <h6>Explore The Library</h6>
        </div>
      </div>
      <div className='features__feature'>
        <Feature title="Chatbots" desc="Our chatbot will marvel you as you can hardly find out that you are chatting with our AI."/>
        <Feature title="Knowledgebase" desc="You will be amazed at the knowledge base of our AI. We are sure it is something that you would want to utilize in no time."/>
        <Feature title="Education" desc="As very educative that it is, it is highly recommended by many institutions as it has aided their students in attaining their educational goals."/>
      </div>
    </div>
  )
}

export default Features;