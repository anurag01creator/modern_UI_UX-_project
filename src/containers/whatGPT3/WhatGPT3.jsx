import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="ChatGPT is an AI-powered conversational agent developed by OpenAI. It leverages state-of-the-art natural language processing (NLP) techniques to understand and generate human-like text responses. Whether you're looking for assistance, creative inspiration, or just a friendly chat, ChatGPT is here to engage with you.." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      
      <a href="#blog">Explore the Library </a>

    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Customer Support" text="Enhance customer service experiences with ChatGPT's ability to provide instant assistance and answers to common queries." />
      <Feature title="Content Generation" text="Generate ideas, brainstorm content, or even draft articles with the help of ChatGPT's creative input." />
      <Feature title="Education" text="Assist learners with explanations, examples, and interactive Q&A sessions to facilitate understanding of complex concepts." />
    </div>
  </div>
);

export default WhatGPT3;
